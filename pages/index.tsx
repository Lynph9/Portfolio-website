import React, { useState } from 'react';
import { FaUser, FaLightbulb, FaFileAlt, FaGlobe, FaMobile, FaUnity } from 'react-icons/fa';
import { BiLogoBlender } from 'react-icons/bi';
import { SiGodotengine, SiAdobephotoshop } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

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
        return (
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                Hey, I'm Erkin Erdoğan—a junior full-stack developer and game developer.
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                My journey into technology began at a young age, fueled by an endless curiosity about how things work. 
                From experimenting with computers to mastering various creative and technical skills, 
                I've always sought to push the boundaries of what I can create. Over the years, 
                I've earned certifications in sculpting, animation, Photoshop, and pixel art, 
                allowing me to bring digital worlds to life. Beyond game development, 
                I also specialize in crafting cinematic scenes and virtual architectural tours, 
                helping architects and designers visualize their projects in immersive detail.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              {/* Additional about content can go here */}
              <p>This is the About section. You can add additional content, images, etc.</p>
            </div>
          </div>
        );
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
      <aside className="w-64 bg-gray-200 p-6 flex flex-col">
        <nav className="flex-1">
          {/* Main Navigation */}
          <div className="mb-12">
            <button
              onClick={() => setActiveSection('about')}
              className={`w-full text-left py-2 px-3 rounded text-xl font-bold flex items-center gap-2
                ${activeSection === 'about' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaUser className="text-lg" /> <span>About</span>
            </button>
            <button
              onClick={() => setActiveSection('ideas')}
              className={`w-full text-left py-2 px-3 rounded text-xl font-bold flex items-center gap-2 mt-2
                ${activeSection === 'ideas' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaLightbulb className="text-lg" /> <span>Ideas</span>
            </button>
            <button
              onClick={() => setActiveSection('cv')}
              className={`w-full text-left py-2 px-3 rounded text-xl font-bold flex items-center gap-2 mt-2
                ${activeSection === 'cv' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaFileAlt className="text-lg" /> <span>CV</span>
            </button>
          </div>

          {/* Fullstack Section */}
          <div className="mb-12">
            <h2 className="text-sm text-gray-600 uppercase tracking-wider mb-3 px-3">Fullstack</h2>
            <button
              onClick={() => setActiveSection('webapps')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2
                ${activeSection === 'webapps' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaGlobe className="text-lg" /> <span>Web Applications</span>
            </button>
            <button
              onClick={() => setActiveSection('mobileapps')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2 mt-1
                ${activeSection === 'mobileapps' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaMobile className="text-lg" /> <span>Mobile Applications</span>
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <h2 className="text-sm text-gray-600 uppercase tracking-wider mb-3 px-3">Projects</h2>
            <button
              onClick={() => setActiveSection('unreal')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2
                ${activeSection === 'unreal' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <FaUnity className="text-lg" /> <span>Unreal Engine</span>
            </button>
            <button
              onClick={() => setActiveSection('godot')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2 mt-1
                ${activeSection === 'godot' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <SiGodotengine className="text-lg" /> <span>Godot</span>
            </button>
            <button
              onClick={() => setActiveSection('blender')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2 mt-1
                ${activeSection === 'blender' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <BiLogoBlender className="text-lg" /> <span>Blender</span>
            </button>
            <button
              onClick={() => setActiveSection('photoshop')}
              className={`w-full text-left py-2 px-3 rounded text-sm flex items-center gap-2 mt-1
                ${activeSection === 'photoshop' ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
            >
              <SiAdobephotoshop className="text-lg" /> <span>Photoshop</span>
            </button>
          </div>
        </nav>

        {/* Contact Section */}
        <div className="mt-auto pt-6">
          <h2 className="text-sm text-gray-600 uppercase tracking-wider mb-3 px-3">Contact</h2>
          <div className="flex flex-col space-y-1">
            <a 
              href="mailto:your-email@example.com" 
              className="py-2 px-3 text-sm flex items-center gap-2 hover:bg-gray-100 rounded"
            >
              <MdEmail className="text-lg" /> <span>Mail</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-2 px-3 text-sm flex items-center gap-2 hover:bg-gray-100 rounded"
            >
              <BsInstagram className="text-lg" /> <span>Instagram</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-2 px-3 text-sm flex items-center gap-2 hover:bg-gray-100 rounded"
            >
              <BsLinkedin className="text-lg" /> <span>LinkedIn</span>
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
