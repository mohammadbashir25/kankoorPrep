import { useEffect, useState } from "react";
import FaqItems from "./FaqItems";
import Faq_Questions from "../data/Faq_Questions";

import { LuMaximize, LuMinimize } from "react-icons/lu";

const FaqList = () => {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleFaq = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  useEffect(() => {
    if (openId && typeof window !== "undefined") {
      setTimeout(() => {
        const element = document.getElementById(`faq-question-${openId}`);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [openId]);
  return (
    <div className="bg-(--bg-section)  rounded-lg dark:bg-(--bg-section-dark) mt-20">
    <div className="mx-auto px-4 sm:px-6  lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
                  <h2 className="text-3xl font-bold mb-3 text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>
        <p className="text-base">Everything You need know Before Stating your First Mock test- no hidden rules no surprises.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleExpandAll}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 cursor-pointer"
          >
            {!expandAll ? (
              <div className="flex gap-2 justify-center items-center">
                <LuMaximize />
                <span>Expand All</span>
              </div>
            ) : (
              <div className="flex gap-2 justify-center items-center">
                <LuMinimize />
                <span>Collapse All</span>
              </div>
            )}
          </button>

        </div>
      </div>
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-300">
        {Faq_Questions.map((question) => {
          return (
            <FaqItems
              key={question.id}
              question={question}
              onClick={toggleFaq}
              isOpen={expandAll || openId === question.id}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default FaqList;
