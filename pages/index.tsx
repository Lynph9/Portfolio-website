import React, { useState } from 'react';

// We'll define the possible sections as a TypeScript type.
type Section = 'about' | 'ideas' | 'cv' | 'webapps' | 'mobileapps' | 'unreal' | 'godot' | 'blender' | 'photoshop';

export default function HomePage() {
  // This state variable tracks which section is currently active.
  const [activeSection, setActiveSection] = useState<Section>('about');

  // We'll create a small function to render the main content
  // based on the active section.
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <p>This is the About section. You can add text, images, etc.</p>;
      case 'ideas':
        return <p>This is the Ideas section. Write about your project ideas here.</p>;
      case 'cv':
        return <p>This is the CV section. Show your experience or a PDF link here.</p>;
      case 'webapps':
        return <p>Web Applications content here.</p>;
      case 'mobileapps':
        return <p>Mobile Applications content here.</p>;
      case 'unreal':
        return <p>Unreal Engine content here.</p>;
      case 'godot':
        return <p>Godot Projects content here.</p>;
      case 'blender':
        return <p>Blender Works content here.</p>;
      case 'photoshop':
        return <p>Photoshop content here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-200 p-4 flex flex-col justify-between">
        <nav>
          {/* Main Navigation */}
          <div className="mb-12">
            <button
              onClick={() => setActiveSection('about')}
              className={`block w-full text-left mb-3 p-2 rounded text-xl font-bold
                ${activeSection === 'about' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection('ideas')}
              className={`block w-full text-left mb-3 p-2 rounded text-xl font-bold
                ${activeSection === 'ideas' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Ideas
            </button>
            <button
              onClick={() => setActiveSection('cv')}
              className={`block w-full text-left mb-3 p-2 rounded text-xl font-bold
                ${activeSection === 'cv' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              CV
            </button>
          </div>

          {/* Fullstack Section */}
          <div className="mb-12">
            <h2 className="mb-3 text-sm text-gray-600 uppercase tracking-wider">Fullstack</h2>
            <button
              onClick={() => setActiveSection('webapps')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'webapps' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Web Applications
            </button>
            <button
              onClick={() => setActiveSection('mobileapps')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'mobileapps' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Mobile Applications
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm text-gray-600 uppercase tracking-wider">Projects</h2>
            <button
              onClick={() => setActiveSection('unreal')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'unreal' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Unreal Engine
            </button>
            <button
              onClick={() => setActiveSection('godot')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'godot' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Godot
            </button>
            <button
              onClick={() => setActiveSection('blender')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'blender' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Blender
            </button>
            <button
              onClick={() => setActiveSection('photoshop')}
              className={`block w-full text-left mb-2 p-2 rounded text-sm
                ${activeSection === 'photoshop' ? 'bg-gray-300' : 'bg-transparent'}`}
            >
              Photoshop
            </button>
          </div>
        </nav>

        {/* Contact Section */}
        <div className="mt-auto">
          <h2 className="mb-2 text-sm text-gray-600 uppercase tracking-wider">Contact</h2>
          <div className="flex flex-col space-y-2">
            <a href="mailto:your-email@example.com" className="hover:text-gray-600 text-sm">Mail</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 text-sm">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4 capitalize">{activeSection}</h1>
        {renderContent()}
      </main>
    </div>
  );
}
