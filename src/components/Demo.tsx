import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

export const Demo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [speed, setSpeed] = useState(2); // 1-5 scale
  
  const demoText = "Reader makes text more accessible by highlighting each word as it's read. This helps improve focus and comprehension for readers of all ages and abilities. The customizable highlighting follows your natural reading pace, while the voice narration brings the text to life in your preferred language.";
  const words = demoText.split(' ');
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev >= words.length - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 6000 / (speed * 5)); // Speed calculation
    
    return () => clearInterval(interval);
  }, [isPlaying, speed, words.length]);
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleReset = () => {
    setCurrentWordIndex(0);
    setIsPlaying(false);
  };
  
  const handleSkipForward = () => {
    setCurrentWordIndex((prev) => Math.min(prev + 5, words.length - 1));
  };
  
  const handleSkipBack = () => {
    setCurrentWordIndex((prev) => Math.max(prev - 5, 0));
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Reader in Action
          </h2>
          <p className="text-lg text-gray-700">
            Experience how Reader enhances your reading with this interactive demo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef} 
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
          >
            <div className="text-left text-lg leading-relaxed text-gray-800 mb-6">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${
                      index === currentWordIndex
                        ? 'bg-indigo-200 text-indigo-800'
                        : index < currentWordIndex
                        ? 'text-gray-500'
                        : ''
                    } px-1 py-0.5 rounded transition-colors duration-200`}
                  >
                    {word}
                  </span>{' '}
                </React.Fragment>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={handleSkipBack}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <SkipBack size={20} className="text-gray-700" />
                </button>
                <button 
                  onClick={handlePlayPause}
                  className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button 
                  onClick={handleSkipForward}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <SkipForward size={20} className="text-gray-700" />
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX size={20} className="text-gray-700" />
                  ) : (
                    <Volume2 size={20} className="text-gray-700" />
                  )}
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Speed:</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-24 accent-indigo-600"
                />
                <span className="text-sm text-gray-600">{speed}x</span>
              </div>
              
              <button
                onClick={handleReset}
                className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">OCR Demo</h3>
              <p className="text-gray-700 text-sm mb-4">
                Reader can extract text from images, making printed content accessible.
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm text-center">
                <p className="text-sm text-gray-500">Image to text conversion demo</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Voice Recognition</h3>
              <p className="text-gray-700 text-sm mb-4">
                Speak and Reader will accurately transcribe your words.
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm text-center">
                <p className="text-sm text-gray-500">Speech-to-text demo</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-language</h3>
              <p className="text-gray-700 text-sm mb-4">
                Reader supports multiple languages for both reading and narration.
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm text-center">
                <p className="text-sm text-gray-500">Language selection demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};