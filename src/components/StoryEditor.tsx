import React, { useState, useEffect } from 'react';
import { Story, Character, Scene } from '../types';
import { Book, Users, Film, Plus, Save, Eye } from 'lucide-react';
import StoryPreview from './StoryPreview';

export default function StoryEditor() {
  const [activeTab, setActiveTab] = useState<'story' | 'characters' | 'scenes' | 'preview'>('story');
  const [story, setStory] = useState<Story>({
    id: '1',
    title: '',
    synopsis: '',
    characters: [],
    scenes: []
  });

  // Load saved story on component mount
  useEffect(() => {
    const savedStory = localStorage.getItem('story');
    if (savedStory) {
      setStory(JSON.parse(savedStory));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('story', JSON.stringify(story));
    alert('Story saved successfully!');
  };

  const addCharacter = () => {
    const newCharacter: Character = {
      id: Date.now().toString(),
      name: '',
      role: '',
      description: ''
    };
    setStory({ ...story, characters: [...story.characters, newCharacter] });
  };

  const addScene = () => {
    const newScene: Scene = {
      id: Date.now().toString(),
      title: '',
      content: '',
      characters: []
    };
    setStory({ ...story, scenes: [...story.scenes, newScene] });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('story')}
            className={`flex items-center px-6 py-4 ${
              activeTab === 'story' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            <Book className="w-5 h-5 mr-2" />
            Story
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={`flex items-center px-6 py-4 ${
              activeTab === 'characters' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            Characters
          </button>
          <button
            onClick={() => setActiveTab('scenes')}
            className={`flex items-center px-6 py-4 ${
              activeTab === 'scenes' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            <Film className="w-5 h-5 mr-2" />
            Scenes
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center px-6 py-4 ${
              activeTab === 'preview' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            <Eye className="w-5 h-5 mr-2" />
            Preview
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'story' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={story.title}
                  onChange={(e) => setStory({ ...story, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  placeholder="Enter your story title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Synopsis</label>
                <textarea
                  value={story.synopsis}
                  onChange={(e) => setStory({ ...story, synopsis: e.target.value })}
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  placeholder="Write your story synopsis..."
                />
              </div>
            </div>
          )}

          {activeTab === 'characters' && (
            <div>
              <button
                onClick={addCharacter}
                className="mb-4 flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Character
              </button>
              <div className="space-y-6">
                {story.characters.map((character, index) => (
                  <div key={character.id} className="p-4 border rounded-lg bg-gray-50">
                    <input
                      type="text"
                      value={character.name}
                      onChange={(e) => {
                        const newCharacters = [...story.characters];
                        newCharacters[index].name = e.target.value;
                        setStory({ ...story, characters: newCharacters });
                      }}
                      className="block w-full mb-2 p-2 border rounded"
                      placeholder="Character Name"
                    />
                    <input
                      type="text"
                      value={character.role}
                      onChange={(e) => {
                        const newCharacters = [...story.characters];
                        newCharacters[index].role = e.target.value;
                        setStory({ ...story, characters: newCharacters });
                      }}
                      className="block w-full mb-2 p-2 border rounded"
                      placeholder="Character Role"
                    />
                    <textarea
                      value={character.description}
                      onChange={(e) => {
                        const newCharacters = [...story.characters];
                        newCharacters[index].description = e.target.value;
                        setStory({ ...story, characters: newCharacters });
                      }}
                      className="block w-full p-2 border rounded"
                      placeholder="Character Description"
                      rows={3}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'scenes' && (
            <div>
              <button
                onClick={addScene}
                className="mb-4 flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Scene
              </button>
              <div className="space-y-6">
                {story.scenes.map((scene, index) => (
                  <div key={scene.id} className="p-4 border rounded-lg bg-gray-50">
                    <input
                      type="text"
                      value={scene.title}
                      onChange={(e) => {
                        const newScenes = [...story.scenes];
                        newScenes[index].title = e.target.value;
                        setStory({ ...story, scenes: newScenes });
                      }}
                      className="block w-full mb-2 p-2 border rounded"
                      placeholder="Scene Title"
                    />
                    <textarea
                      value={scene.content}
                      onChange={(e) => {
                        const newScenes = [...story.scenes];
                        newScenes[index].content = e.target.value;
                        setStory({ ...story, scenes: newScenes });
                      }}
                      className="block w-full p-2 border rounded"
                      placeholder="Scene Content"
                      rows={4}
                    />
                    <select
                      multiple
                      value={scene.characters}
                      onChange={(e) => {
                        const newScenes = [...story.scenes];
                        newScenes[index].characters = Array.from(e.target.selectedOptions, option => option.value);
                        setStory({ ...story, scenes: newScenes });
                      }}
                      className="block w-full mt-2 p-2 border rounded"
                    >
                      {story.characters.map(char => (
                        <option key={char.id} value={char.id}>
                          {char.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <StoryPreview story={story} />
          )}
        </div>

        <div className="border-t p-4 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Story
          </button>
        </div>
      </div>
    </div>
  );
}