import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload or Import Text',
    description: 'Upload documents, paste text, or capture images containing text you want to read.',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    number: '02',
    title: 'Customize Your Experience',
    description: 'Choose highlight color, reading speed, voice type, and language preferences.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    number: '03',
    title: 'Start Reading',
    description: 'Begin reading with visual highlighting, listen to audio, or use both simultaneously.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    number: '04',
    title: 'Interact and Control',
    description: 'Pause, adjust speed, or switch between reading and dictation modes as needed.',
    color: 'bg-indigo-100 text-indigo-700',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Reader Works
          </h2>
          <p className="text-lg text-gray-700">
            A simple, intuitive process designed to enhance your reading experience in just a few steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className={`flex-shrink-0 w-12 h-12 ${step.color} flex items-center justify-center rounded-full font-bold text-lg`}>
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reader's Processing Workflow</h3>
              <p className="text-gray-700">See how Reader processes and enhances your reading material</p>
            </div>
            <div className="px-6 py-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 mb-2">Input</p>
                  <p className="text-sm text-gray-600">Text from documents, websites, or images via OCR</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 mb-2">Processing</p>
                  <p className="text-sm text-gray-600">Text analysis, tracking, and conversion to speech</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 mb-2">Output</p>
                  <p className="text-sm text-gray-600">Highlighted text with synchronized audio narration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};