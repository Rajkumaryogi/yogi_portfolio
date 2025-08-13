import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Faq() {
  const { darkMode } = useDarkMode();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      id: 1,
      que: "How can I contact you?",
      ans: "You can reach me through the contact form on this website or via email at work.yogirajkumar@gmail.com, rajkumar6777y@gmail.com and rajkum51_soe@jnu.ac.in",
    },
    {
      id: 2,
      que: "Can I hire you for a project?",
      ans: "Yes, I'm available for freelance work and collaborations. Please get in touch with me to discuss your project requirements.",
    },
    {
      id: 3,
      que: "Are you available for remote work?",
      ans: "Yes, I can work remotely and collaborate with clients from anywhere in the world.",
    },
  ];

  return (
    <div className={`px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-40 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <h2 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-black'} text-2xl md:text-5xl text-center`}>
        FAQ
      </h2>

      <div className="mt-16 space-y-4">
        {faq.map((item, index) => (
          <div 
            key={item.id} 
            className={`border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl overflow-hidden transition-all duration-300`}
          >
            <button
              className={`flex justify-between items-center w-full px-4 py-4 text-left text-lg sm:text-xl font-semibold ${darkMode ? 'text-gray-100 hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'} transition-colors duration-200`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${item.id}`}
            >
              {item.que}

              {/* Icon */}
              <span className="ml-4">
                {activeIndex === index ? (
                  <FaChevronUp className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                ) : (
                  <FaChevronDown className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                )}
              </span>
            </button>

            {/* Answer section */}
            {activeIndex === index && (
              <div 
                id={`faq-${item.id}`}
                className={`px-4 pb-4 text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="pt-2">• {item.ans}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;