import React, { useState, useEffect, useCallback } from "react";
import FoodCard from "./FoodCard";
import FoodFilter from "./FoodFilter";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const FoodGrid = () => {
  const [foods, setFoods] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedPincode, setSelectedPincode] = useState(null);
  const [selectedVegNonVeg, setSelectedVegNonVeg] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();

        const [pincodesRes, tagsRes] = await Promise.all([
          fetch(`${BASE_URL}/api/pincodes`, { signal: controller.signal }),
          fetch(`${BASE_URL}/api/tags`, { signal: controller.signal }),
        ]);

        if (!pincodesRes.ok || !tagsRes.ok) {
          throw new Error("Failed to fetch filter data");
        }

        const pincodesData = await pincodesRes.json();
        const tagsData = await tagsRes.json();

        setPincodes(pincodesData);
        setTags(tagsData);
      } catch (err) {
        console.error("Error fetching initial data:", err);
        setError("Failed to load filters");
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();

        const params = new URLSearchParams();

        if (selectedPincode) {
          params.append("pincode_id", selectedPincode);
        }

        if (selectedVegNonVeg !== null) {
          params.append("is_vegetarian", selectedVegNonVeg);
        }

        if (selectedTags.length > 0) {
          selectedTags.forEach((tagId) => {
            params.append("tag_ids", tagId);
          });
        }

        const url = `${BASE_URL}/api/foods${
          params.toString() ? "?" + params.toString() : ""
        }`;

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFoods(data);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching foods:", err);
          setError("Failed to load foods");
        }
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchFoods();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [selectedPincode, selectedVegNonVeg, selectedTags]);

  const handlePincodeChange = useCallback((pincode) => {
    setSelectedPincode(pincode);
  }, []);

  const handleVegNonVegChange = useCallback((vegNonVeg) => {
    setSelectedVegNonVeg(vegNonVeg);
  }, []);

  const handleTagsChange = useCallback((newTags) => {
    setSelectedTags(newTags);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-8 md:py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Food Selection
          </h1>
          <p className="text-gray-600">
            Filter by location, dietary preference, and categories
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <FoodFilter
            pincodes={pincodes}
            tags={tags}
            selectedPincode={selectedPincode}
            selectedVegNonVeg={selectedVegNonVeg}
            selectedTags={selectedTags}
            onPincodeChange={handlePincodeChange}
            onVegNonVegChange={handleVegNonVegChange}
            onTagsChange={handleTagsChange}
            loading={loading}
          />

          {/* Food Grid */}
          <div className="flex-1">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Retry
                </button>
              </div>
            )}

            {loading && foods.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium">Loading foods...</p>
              </div>
            ) : foods.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600 font-medium">
                    Showing {foods.length} food
                    {foods.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  role="list"
                >
                  {foods.map((food) => (
                    <FoodCard
                      key={food.id}
                      id={food.id}
                      name={food.name}
                      description={food.description}
                      image={food.image}
                      isVegetarian={food.isVegetarian}
                      tags={food.tags || []}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-gray-600 text-lg font-medium mb-2">
                  No foods found
                </p>
                <p className="text-gray-500 text-center max-w-sm">
                  Try adjusting your filters or clearing some selections to see
                  more options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodGrid;
