'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is AI automation, and how can it benefit my business?",
    answer: (
      <div className="space-y-4">
        <p>AI automation uses artificial intelligence to perform repetitive tasks, analyze data, and streamline processes without the need for constant human involvement. It can benefit your business by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Saving time by automating manual, time-consuming tasks.</li>
          <li>Reducing costs by improving efficiency and minimizing errors.</li>
          <li>Enhancing productivity, allowing you to focus on higher-value activities.</li>
          <li>Improving customer experiences through faster, more reliable service delivery.</li>
        </ul>
        <p>In short, AI automation helps your business run smoother and smarter.</p>
      </div>
    )
  },
  {
    question: "Do I need technical expertise to use your automation solutions?",
    answer: "Our solutions are designed to be user-friendly, and we handle all the technical setup for you. Once the automation is in place, you'll find it simple to use without needing any specialized skills. I also provide clear a documentation and support to ensure everything runs seamlessly."
  },
  {
    question: "Do you provide training or support after the automation is implemented?",
    answer: "We provide comprehensive support to help you understand and manage the automation. We write an in depth documentation, I'm here to make sure the solution works perfectly for you."
  },
  {
    question: "Will automating processes disrupt my current workflow?",
    answer: "Our goal is to integrate automation seamlessly into your existing workflow. I take the time to understand your business processes and ensure the automation works in harmony with them, minimizing disruption while maximizing efficiency."
  },
  {
    question: "How do I know if automation is the right solution for me?",
    answer: "If you find yourself spending time on repetitive tasks or manual processes, automation could be your solution. It's perfect for businesses looking to save time, cut costs, and grow efficiently. Let's have a chat and discuss your needs to see if automation is right for you."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-200 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-[#112240] border border-[#233554] hover:border-[#4c5f82] transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="text-gray-300 prose prose-invert">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 