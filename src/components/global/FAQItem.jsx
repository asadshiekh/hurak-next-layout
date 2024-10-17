"use client"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleFAQ}
        className="w-full flex justify-between items-center py-4 focus:outline-none px-2 bg-[#F8F9FA]"
      >
        <span className="text-left text-lg font-medium">{question}</span>
        <span className="text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && <p className=" mt-2 px-2 pb-4">{answer}</p>}
    </div>
  );
};

export default FAQItem;
