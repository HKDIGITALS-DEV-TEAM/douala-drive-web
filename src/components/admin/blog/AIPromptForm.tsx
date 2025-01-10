import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

interface AIPromptFormProps {
  onGenerate: (content: string) => void;
  isGenerating: boolean;
}

export default function AIPromptForm({ onGenerate, isGenerating }: AIPromptFormProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(prompt);
    setPrompt('');
  };

  const promptTemplates = [
    "Écrivez un article sur les avantages de la location de voiture avec chauffeur",
    "Créez un guide des meilleures destinations touristiques autour de Douala",
    "Rédigez un article sur les conseils de sécurité en voiture",
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Wand2 className="w-4 h-4" />
        <span>Suggestions de prompts :</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {promptTemplates.map((template) => (
          <button
            key={template}
            onClick={() => setPrompt(template)}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {template}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez l'article que vous souhaitez générer..."
          className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          required
        />
        <button
          type="submit"
          disabled={isGenerating}
          className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 disabled:bg-gray-400"
        >
          {isGenerating ? (
            <>
              <span className="animate-spin mr-2">⚡</span>
              Génération en cours...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Générer avec ChatGPT
            </>
          )}
        </button>
      </form>
    </div>
  );
}