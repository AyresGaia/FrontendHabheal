import React, { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const FoodFilter = ({
  pincodes,
  tags,
  selectedPincode,
  selectedVegNonVeg,
  selectedTags,
  onPincodeChange,
  onVegNonVegChange,
  onTagsChange,
  loading,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    pincode: true,
    vegNonVeg: true,
    tags: true,
  });

  const toggleSection = useCallback((section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleTagToggle = useCallback(
    (tagId) => {
      if (selectedTags.includes(tagId)) {
        onTagsChange(selectedTags.filter((id) => id !== tagId));
      } else {
        onTagsChange([...selectedTags, tagId]);
      }
    },
    [selectedTags, onTagsChange]
  );

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-6 md:sticky md:top-20 h-fit">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

      <div className="space-y-6">
        {/* Pincode Filter */}
        <div className="border-b border-gray-200 pb-6">
          <button
            onClick={() => toggleSection("pincode")}
            className="flex items-center justify-between w-full mb-4 hover:text-blue-600 transition-colors"
            aria-expanded={expandedSections.pincode}
          >
            <h3 className="font-semibold text-gray-800">Pincode</h3>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedSections.pincode ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.pincode && (
            <div className="space-y-2">
              <select
                value={selectedPincode || ""}
                onChange={(e) => onPincodeChange(e.target.value || null)}
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">All Pincodes</option>
                {pincodes.map((pincode) => (
                  <option key={pincode.id} value={pincode.id}>
                    {pincode.pincode} - {pincode.city}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Veg / Non-Veg Filter */}
        <div className="border-b border-gray-200 pb-6">
          <button
            onClick={() => toggleSection("vegNonVeg")}
            className="flex items-center justify-between w-full mb-4 hover:text-blue-600 transition-colors"
            aria-expanded={expandedSections.vegNonVeg}
          >
            <h3 className="font-semibold text-gray-800">Type</h3>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedSections.vegNonVeg ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.vegNonVeg && (
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="vegNonVeg"
                  value=""
                  checked={selectedVegNonVeg === null}
                  onChange={() => onVegNonVegChange(null)}
                  disabled={loading}
                  className="w-4 h-4 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className="text-gray-700 group-hover:text-gray-900">All</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="vegNonVeg"
                  value="veg"
                  checked={selectedVegNonVeg === true}
                  onChange={() => onVegNonVegChange(true)}
                  disabled={loading}
                  className="w-4 h-4 text-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className="flex items-center space-x-2 text-gray-700 group-hover:text-gray-900">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>Vegetarian</span>
                </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="vegNonVeg"
                  value="non-veg"
                  checked={selectedVegNonVeg === false}
                  onChange={() => onVegNonVegChange(false)}
                  disabled={loading}
                  className="w-4 h-4 text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className="flex items-center space-x-2 text-gray-700 group-hover:text-gray-900">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Non-Vegetarian</span>
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Tags Filter */}
        <div>
          <button
            onClick={() => toggleSection("tags")}
            className="flex items-center justify-between w-full mb-4 hover:text-blue-600 transition-colors"
            aria-expanded={expandedSections.tags}
          >
            <h3 className="font-semibold text-gray-800">Tags</h3>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedSections.tags ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.tags && (
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <label
                    key={tag.id}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag.id)}
                      onChange={() => handleTagToggle(tag.id)}
                      disabled={loading}
                      className="w-4 h-4 text-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <span className="text-gray-700 text-sm group-hover:text-gray-900">
                      {tag.name}
                    </span>
                  </label>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No tags available</p>
              )}
            </div>
          )}
        </div>

        {/* Clear Filters Button */}
        {(selectedPincode || selectedVegNonVeg !== null || selectedTags.length > 0) && (
          <button
            onClick={() => {
              onPincodeChange(null);
              onVegNonVegChange(null);
              onTagsChange([]);
            }}
            disabled={loading}
            className="w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </aside>
  );
};

export default FoodFilter;
