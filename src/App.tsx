import React from 'react';
import StoryEditor from './components/StoryEditor';
import { BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <BookOpen className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">StoryForge</h1>
        </div>
      </header>
      <main>
        <StoryEditor />
      </main>
    </div>
  );
}

export default App;