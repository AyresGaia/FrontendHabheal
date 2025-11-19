import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect } from "react";

const FAQSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset:100 });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Geo-Nutrition?",
      answer:
        "Geo-Nutrition provides nutrition insights based on your location and regional food availability.",
    },
    {
      question: "How can I track my health progress?",
      answer:
        "You can log meals, set health goals, and view analytics personalized for your wellness journey.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure cloud storage for all your data.",
    },
    {
      question: "Can I access this on mobile?",
      answer:
        "Yes! Our platform is fully responsive and optimized for mobile devices.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure cloud storage for all your data.",
    },
    {
      question: "Can I access this on mobile?",
      answer:
        "Yes! Our platform is fully responsive and optimized for mobile devices.",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center" data-aos="fade-up">
      {/* Gradient Header */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
          Common Questions Asked
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mt-14 mb-14 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 pb-6 cursor-pointer"
            onClick={() => toggleQuestion(index)}
            data-aos="fade-up"
            data-aos-duration={index*1000}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-gray-800">{faq.question}</p>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600 w-6 h-6" />
              ) : (
                <ChevronDown className="text-gray-600 w-6 h-6" />
              )}
            </div>

            {openIndex === index && (
              <p className="text-gray-600 mt-4 text-base leading-relaxed transition-all duration-300" data-aos="fade-right">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
