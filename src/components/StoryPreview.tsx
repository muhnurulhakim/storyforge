import React from 'react';
import { Story } from '../types';
import { Book, User, Film } from 'lucide-react';

interface StoryPreviewProps {
  story: Story;
}

export default function StoryPreview({ story }: StoryPreviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Story Header */}
        <div className="border-b pb-6">
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{story.title || 'Untitled Story'}</h2>
          </div>
          <p className="text-gray-600 whitespace-pre-line">{story.synopsis}</p>
        </div>

        {/* Characters Section */}
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Characters</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {story.characters.map((character) => (
              <div key={character.id} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900">{character.name}</h4>
                <p className="text-sm text-indigo-600 mb-2">{character.role}</p>
                <p className="text-gray-600">{character.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scenes Section */}
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <Film className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Scenes</h3>
          </div>
          <div className="space-y-6">
            {story.scenes.map((scene) => (
              <div key={scene.id} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">{scene.title}</h4>
                <p className="text-gray-600 whitespace-pre-line mb-4">{scene.content}</p>
                <div className="text-sm">
                  <span className="text-gray-500">Characters in scene: </span>
                  {scene.characters.map(charId => {
                    const character = story.characters.find(c => c.id === charId);
                    return character ? character.name : '';
                  }).filter(Boolean).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}