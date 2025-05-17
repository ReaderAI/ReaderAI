import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What platforms does Reader work on?',
    answer: 'Reader is available as a browser extension for Chrome, Firefox, and Edge, as well as a standalone application for Windows, macOS, and Linux. Mobile apps for iOS and Android are currently in development.',
  },
  {
    question: 'Does Reader work offline?',
    answer: 'Yes, the core highlighting and text-to-speech features work offline. However, OCR and some advanced voice recognition features require an internet connection for optimal performance.',
  },
  {
    question: 'How many languages does Reader support?',
    answer: 'Reader currently supports 25+ languages for text highlighting and 15+ languages for voice narration, with more being added regularly.',
  },
  {
    question: 'Is Reader suitable for people with dyslexia?',
    answer: 'Absolutely! Reader was designed with accessibility in mind and has proven particularly helpful for users with dyslexia, ADHD, and visual processing challenges.',
  },
  {
    question: 'Can Reader extract text from handwritten notes?',
    answer: 'Reader can extract text from clearly written handwriting with varying accuracy. The OCR capability works best with printed text and typed documents.',
  },
  {
    question: 'Is there a free version available?',
    answer: 'Yes, Reader offers a free version with core highlighting and basic text-to-speech features. Premium features like OCR, advanced voice recognition, and additional voices require a subscription.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about Reader
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};