import React from 'react';
import FAQSection from './faq/FAQSection';
import { faqData } from '../utils/faqData';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h1>
        
        <div className="space-y-8">
          {faqData.map((section) => (
            <FAQSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}