import React from 'react';
import { 
  Highlighter, 
  Headphones, 
  Mic, 
  Image, 
  Globe, 
  Accessibility
} from 'lucide-react';

const features = [
  {
    icon: <Highlighter className="w-8 h-8 text-indigo-600" />,
    title: 'Smart Highlighting',
    description: 'Follow your reading with customizable linear highlighting that matches your reading speed and style.',
  },
  {
    icon: <Headphones className="w-8 h-8 text-indigo-600" />,
    title: 'Voice Narration',
    description: 'Listen to your text read aloud with natural-sounding voices in multiple languages.',
  },
  {
    icon: <Mic className="w-8 h-8 text-indigo-600" />,
    title: 'Voice Recognition',
    description: 'Dictate your thoughts and Reader will transcribe them with high accuracy.',
  },
  {
    icon: <Image className="w-8 h-8 text-indigo-600" />,
    title: 'OCR Technology',
    description: 'Extract text from images, photos, and screenshots for immediate reading assistance.',
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: 'Multi-language Support',
    description: 'Works seamlessly across multiple languages for both reading and narration.',
  },
  {
    icon: <Accessibility className="w-8 h-8 text-indigo-600" />,
    title: 'Accessibility Focus',
    description: 'Designed with accessibility in mind to help readers of all abilities.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Reading
          </h2>
          <p className="text-lg text-gray-700">
            Reader combines advanced technologies to create a comprehensive reading assistant that helps you focus, understand, and engage with text.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};