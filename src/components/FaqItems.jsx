import  { useEffect, useRef, useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const FaqItems = ({ question, onClick, isOpen }) => {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 last:border-none duration-300 hover:bg-linear-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent transition-all"
      id={`faq-question-${question.id}`}
    >
      <button
        className={`w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg transition-all duration-500 cursor-pointer text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400 ${isOpen ? "bg-linear-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 text-purple-700 dark:text-white font-medium" : "text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 dark:from-indigo-400 dark:hover:to-purple-400"}`}
        onClick={() => onClick(question.id)}
      >
        <span className="text-lg font-medium pr-6">{question.question}</span>
        <div
          className={`flex items-center justify-center w-8 min-w-8 aspect-square rounded-full shrink-0 bg-gray-200 dark:bg-gray-700 transition-all duration-200 ${isOpen ? "bg-linear-to-r from-indigo-600 to-purple-500 dark:from-indigo-500 dark:to-purple-500 shadow-md" : "bg-gray-200 dark:bg-gray-700"}`}
        >
          {!isOpen ? (
            <LuPlus className="text-gray-600 dark:text-gray-400" />
          ) : (
            <LuMinus
              className={`text-gray-600 dark:text-gray-400 ${isOpen ? "text-white dark:text-white" : "text-gray-600 dark:text-gray-400"}`}
            />
          )}
        </div>
      </button>
      <div
        className="overflow-hidden"
        id={`answer-${question.id}`}
        ref={answerRef}
        style={{
          maxHeight: height + "px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-75">
            {question.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItems;
