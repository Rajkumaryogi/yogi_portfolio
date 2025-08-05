import React, { useState } from "react";

function Faq() {
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
    <div className="px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-40">
      <h2 className="font-bold text-black text-2xl md:text-5xl text-center">
        FAQ
      </h2>

      <div className="mt-16 space-y-4">
        {faq.map((item, index) => (
          <div key={item.id} className="border border-black rounded-xl">
            <button
              className="flex justify-between items-center w-full px-4 py-4 text-left text-lg sm:text-xl text-black font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {item.que}

              {/* Icon */}
              <span className="ml-4">
                {activeIndex === index ? (
                  // Up arrow (when open)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  // Down arrow (when closed)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>

            {/* Answer section */}
            {activeIndex === index && (
              <div className="px-4 pb-4 text-base sm:text-lg text-gray-700">
                • {item.ans}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
