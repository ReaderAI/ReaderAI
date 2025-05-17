import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sampleText = "Reader helps you follow along with your text, enhancing focus and comprehension with customizable highlighting. It reads aloud in multiple languages, transcribes your voice, and even extracts text from images.";
  const words = sampleText.split(' ');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev >= words.length - 1 ? 0 : prev + 1));
    }, 400);
    
    return () => clearInterval(interval);
  }, [words.length]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-indigo-600">AI-Powered</span> Reading Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Enhance your reading experience with advanced highlighting,
            voice narration, and text recognition
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium text-lg">
              Download Reader
            </button>
            <button className="w-full sm:w-auto bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition-colors font-medium text-lg">
              Try Demo
            </button>
          </div>
          
          <div 
            ref={containerRef}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 my-10 max-w-3xl mx-auto"
          >
            <div className="text-left text-lg md:text-xl text-gray-800 leading-relaxed">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${
                      index === highlightIndex
                        ? 'bg-indigo-200 text-indigo-800'
                        : ''
                    } px-1 py-0.5 rounded transition-colors duration-200`}
                  >
                    {word}
                  </span>{' '}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToFeatures}
            className="text-indigo-600 flex items-center hover:text-indigo-800 transition-colors"
          >
            <span className="mr-2">Discover Features</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};