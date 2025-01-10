import React from 'react';
import { X, Facebook, Twitter, MessageCircle, Link as LinkIcon } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Lien copié !');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Partager l'article</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <link.icon className="w-6 h-6" />
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <LinkIcon className="w-5 h-5" />
          <span>Copier le lien</span>
        </button>
      </div>
    </div>
  );
}