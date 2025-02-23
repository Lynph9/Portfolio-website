import React, { useState, useEffect } from 'react';
import { FaUser, FaLightbulb, FaFileAlt, FaGlobe, FaMobile, FaUnity } from 'react-icons/fa';
import { BiLogoBlender } from 'react-icons/bi';
import { SiGodotengine, SiAdobephotoshop } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
import ImageSlider from '../components/ImageSlider';
import VideoPlayer from '../components/VideoPlayer';
import GifCarousel from '../components/GifCarousel';

// We'll define the possible sections as a TypeScript type.
type Section = 'about' | 'ideas' | 'cv' | 'webapps' | 'mobileapps' | 'unreal' | 'godot' | 'blender' | 'photoshop';

export default function HomePage() {
  // This state variable tracks which section is currently active.
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [dateTime, setDateTime] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const unrealSlides = [
    '/blender/model-gray.jpg',
    '/blender/model-colored.jpg',
    '/blender/model-scene.jpg'
  ];

  useEffect(() => {
    // Update date and time
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      setDateTime(now.toLocaleDateString('en-US', options));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // We'll create a small function to render the main content
  // based on the active section.
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            {/* Main content */}
            <div className="mb-16">
              <div className="text-[32px] leading-[1.4] text-gray-800 space-y-12">
                <p>
                  <span className="font-bold">Hey, I'm Erkin Erdoğan</span>—a junior full-stack developer and game developer. 
                  My journey into technology began at a young age, fueled by an endless curiosity about how things work. 
                  From experimenting with computers to mastering various creative and technical skills, 
                  I've always sought to push the boundaries of what I can create.
                </p>
                
                <p>
                  Over the years, I've earned certifications in sculpting, animation, Photoshop, and pixel art, 
                  allowing me to bring digital worlds to life. Beyond game development, I also specialize in crafting 
                  cinematic scenes and virtual architectural tours, helping architects and designers visualize their 
                  projects in immersive detail.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              {/* Additional about content can go here */}
            </div>
          </div>
        );
      case 'ideas':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-16">
              {/* AI Companions Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  The Future of AI Companions
                </h2>
                <p className="text-xl text-gray-800 mb-8">
                  AI today is functional—but not personal. I believe AI can go beyond chatbots and assistants to become truly adaptive, intelligent, and emotionally aware companions. Instead of rigid, pre-programmed responses, imagine an AI that learns, remembers, and evolves with you—an entity that becomes part of your world rather than just a tool.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Concepts:</h3>
                  <p className="flex items-start gap-3">
                    <span>🤖</span>
                    <span><strong>Persistent AI Memory</strong> – AI that doesn't reset every session, but remembers past conversations, moods, and goals to develop a long-term dynamic relationship.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🎭</span>
                    <span><strong>Character-Driven AI</strong> – A system that embodies fictional or historical figures, responding based on deep learning models trained on literature, history, or user interactions.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🧠</span>
                    <span><strong>AI as a Rival & Mentor</strong> – Instead of just assisting, AI could challenge users in games, coding, or real-world problem-solving by acting as a mentor, competitor, or debate partner.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🔗</span>
                    <span><strong>AI Integrated in Games</strong> – What if NPCs remembered your past choices across multiple playthroughs? Imagine an RPG where characters evolve based on their history with you.</span>
                  </p>
                </div>
              </section>

              {/* Fullstack Development Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Fullstack Development Beyond the Basics
                </h2>
                <p className="text-xl text-gray-800 mb-8">
                  Most fullstack applications today are either too generic or too complex to manage at scale. 
                  My approach is to optimize for performance, scalability, and user-centric design, leveraging C#, .NET, 
                  and modern front-end frameworks to create efficient and engaging applications.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Concepts:</h3>
                  <p className="flex items-start gap-3">
                    <span>🚀</span>
                    <span><strong>Microservices-Based Web Apps</strong> – Scalable systems that can handle millions of users, 
                    ensuring speed, security, and seamless updates.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>💡</span>
                    <span><strong>AI-Enhanced Content Platforms</strong> – Web apps that generate content, suggest optimizations, 
                    or assist users with dynamic AI-generated elements.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🌐</span>
                    <span><strong>Interactive Dashboards</strong> – A fullstack app that combines data visualization, 
                    real-time analytics, and predictive AI to help users make informed decisions.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🕹</span>
                    <span><strong>Game Backend Architecture</strong> – A backend system for multiplayer indie games that syncs 
                    player progress, in-game economy, and leaderboard rankings in real time.</span>
                  </p>
                </div>
              </section>

              {/* Mobile Applications Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Mobile Applications That Feel Like Extensions of You
                </h2>
                <p className="text-xl text-gray-800 mb-8">
                  Most mobile apps focus on functionality, but I believe a great app should feel like an extension of your thoughts and habits. 
                  Whether it's AI-powered personal assistants, habit trackers, or interactive experiences, my focus is on creating fluid, 
                  responsive, and intelligent mobile applications.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Concepts:</h3>
                  <p className="flex items-start gap-3">
                    <span>📱</span>
                    <span><strong>AI-Powered Personal Assistant App</strong> – A mobile AI that remembers your daily habits, 
                    anticipates your needs, and suggests improvements based on your workflow.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🏋️</span>
                    <span><strong>Gamified Productivity App</strong> – A task manager that turns your to-do list into an RPG-style game, 
                    rewarding focus and efficiency.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🎮</span>
                    <span><strong>Game Companion App</strong> – A mobile app that acts as a real-time game tracker, 
                    strategy assistant, or co-op matchmaking tool for multiplayer experiences.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>📊</span>
                    <span><strong>AI-Driven Learning App</strong> – An adaptive mobile app that tracks your knowledge gaps 
                    and generates custom study plans based on your learning progress.</span>
                  </p>
                </div>
              </section>

              {/* Gaming Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Reinventing Gaming with Smart AI & Player-Driven Worlds
                </h2>
                <p className="text-xl text-gray-800 mb-8">
                  Gaming has evolved from static, pre-defined narratives to player-driven experiences, but AI is still underutilized. 
                  I believe that AI should adapt dynamically, create unexpected challenges, and even form long-term relationships with the player.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">Concepts:</h3>
                  <p className="flex items-start gap-3">
                    <span>🎭</span>
                    <span><strong>NPCs with Dynamic Memory</strong> – Characters that remember your actions across sessions, 
                    evolving their behavior based on past interactions.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🕵🏻</span>
                    <span><strong>AI-Generated Game Narratives</strong> – Story-driven games where AI writes side quests, 
                    NPC dialogues, and plot twists in real-time based on player choices.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>⚔️</span>
                    <span><strong>AI-Controlled Rivals</strong> – Instead of predictable enemy AI, an evolving machine-learning opponent 
                    that adapts, counters your strategies, and learns from past battles.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🌌</span>
                    <span><strong>Infinite Procedural Worlds</strong> – AI-assisted procedural generation that creates unique cities, 
                    ecosystems, and economies that change dynamically as you play.</span>
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-6">Final Thoughts</h2>
                <p className="text-xl text-gray-800 mb-6">
                  Some of these ideas are experiments. Some are future projects. But all of them represent the direction I want to take—merging AI, fullstack development, and gaming into something new.
                </p>
                <p className="text-xl text-gray-800 flex items-center gap-2">
                  <span>💡</span>
                  Which idea sparks your interest? Want to collaborate? Let's talk.
                </p>
              </section>
            </div>
          </div>
        );
      case 'cv':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-16">
              {/* Header Section */}
              <section className="flex justify-between items-start gap-8">
                <div className="flex items-start gap-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Erkin Erdoğan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-4">Erkin Erdoğan</h1>
                    <div className="space-y-1 text-gray-600">
                      <p>Sakarya, Turkey</p>
                      <p>erkinerdogan.dev@gmail.com</p>
                      <p>www.linkedin.com/in/erkinerdoan</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Summary
                </h2>
                <p className="text-xl text-gray-800">
                  I am a 24-year-old Junior Software Developer with over 2 years of self-driven experience in building web 
                  applications and games. I specialize in .NET, C#, and Python, and have developed several personal projects—
                  including an online soccer scheduling system, a series of hypercasual/mobile game clones, and a prototype 
                  roguelike 2.5D pixel art game. I am actively seeking remote internship opportunities where I can contribute, 
                  learn, and grow within a collaborative team environment.
                </p>
              </section>

              {/* Work Experience Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Work Experience
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold">Freelance Fullstack Developer – Online Soccer Scheduling System</h3>
                    <p className="text-gray-600 mb-3">September 2023 - February 2025</p>
                    <ul className="space-y-2 text-gray-800">
                      <li>• Designed and built an online platform to soccer match scheduling with a %87 percent 5 star feedbacks that also consists of unique player rating system.</li>
                      <li>• Developed both front-end and back-end components only by myself to ensure a seamless user experience.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Personal Project: Roguelike 2.5D Pixel Art Game (Prototype)</h3>
                    <p className="text-gray-600 mb-3">December 2024 – Present</p>
                    <ul className="space-y-2 text-gray-800">
                      <li>• Still developing of a Hades inspired roguelike game, focusing on core mechanics and art direction for about 2-3 months.</li>
                      <li>• With +4 year of indie gaming experience, beta tests will be here at the end of 2025.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Freelance Indie Game Developer – Hypercasual & Mobile Game Clones</h3>
                    <p className="text-gray-600 mb-3">February 2018 – December 2020</p>
                    <ul className="space-y-2 text-gray-800">
                      <li>• Developed and released 20+ hypercasual games and clones of popular mobile titles.</li>
                      <li>• Managed the complete development cycle from concept to deployment across various platforms.</li>
                      <li>• Applied agile methodologies to iterate quickly and meet project deadlines.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Skills Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Technical Skills
                </h2>
                <p className="text-xl text-gray-800">
                  C#, .NET Core, ASP.NET Core, EF Core, Dapper, JavaScript, TypeScript, HTML5, CSS3, React, Vue.js, Node.js, 
                  Bootstrap, Tailwind CSS, Git, Docker, MySQL, PostgreSQL, SQL Server, MongoDB, Unity, Unreal Engine, Godot, 
                  Python, Blender, Adobe Photoshop, Figma
                </p>
              </section>

              {/* Education Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Computer Science | Sakarya University</h3>
                    <p className="text-gray-600">September 2024 – Present</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Electrical And Electronic Engineering | Eskisehir Osmangazi University</h3>
                    <p className="text-gray-600">September 2019 - 2024 July</p>
                    <p className="text-gray-800 mt-1">Switched to Computer Science</p>
                  </div>
                </div>
              </section>

              {/* Languages Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Languages
                </h2>
                <div className="space-y-2">
                  <p className="text-xl text-gray-800"><strong>English:</strong> Near Native Fluency (C2)</p>
                  <p className="text-xl text-gray-800"><strong>Japanese:</strong> N4</p>
                  <p className="text-xl text-gray-800"><strong>Turkish:</strong> Native</p>
                </div>
              </section>

              {/* Certificates Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Certificates
                </h2>
                <div className="space-y-2 text-xl text-gray-800">
                  <p>Professional Photoshop Certificate By Navras Academy</p>
                  <p>Professional Blender Certificate By Navras Academy</p>
                  <p>Professional Unreal Engine Certificate By Navras Academy</p>
                  <p className="mt-4 text-gray-600">The Academy training is still ongoing, more certificates will be here within the end of 2025.</p>
                </div>
              </section>

              {/* Repository Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Repository
                </h2>
                <a 
                  href="https://github.com/Lynph9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-blue-500 hover:text-blue-600"
                >
                  https://github.com/Lynph9
                </a>
              </section>
            </div>
          </div>
        );
      case 'webapps':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-16">
              {/* Current Project Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Portfolio Website
                </h2>
                <div className="space-y-8 text-xl text-gray-800">
                  <p>
                    This website was built by me, Erkin Erdoğan, completely from scratch. 
                    I leveraged a modern tech stack including Next.js for a robust React framework, 
                    TypeScript for type safety, Tailwind CSS for rapid and responsive styling, and 
                    ESLint to ensure clean code. The process involved careful planning, design, and 
                    manual coding from scratch, which demonstrates my commitment to mastering full 
                    stack development.
                  </p>
                  <p>
                    My progress so far includes designing a minimalist, single-page interface, 
                    developing dynamic content switching, and implementing responsive styles to 
                    ensure a smooth user experience. Each component of this portfolio reflects 
                    the skills and passion I bring to web development.
                  </p>
                </div>
              </section>

              {/* Upcoming Project Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Upcoming Project
                </h2>
                <p className="text-xl text-gray-800">
                  Looking ahead, once I complete my current mobile application project, I will 
                  begin work on a car retail website. This upcoming project aims to showcase 
                  a comprehensive online platform for car sales, featuring inventory management, 
                  a user-friendly interface, and scalable web architecture.
                </p>
              </section>

              {/* Technologies Used */}
              <section className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-6">Technologies</h2>
                
                {/* Backend Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Backend & Database</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">C#</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">.NET Core</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">ASP.NET Core</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">EF Core</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Dapper</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Node.js</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">MySQL</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">PostgreSQL</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">SQL Server</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">MongoDB</span>
                  </div>
                </div>

                {/* Frontend Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">JavaScript</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">TypeScript</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">React</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Next.js</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Vue.js</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">HTML5</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">CSS3</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Bootstrap</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Tailwind CSS</span>
                  </div>
                </div>

                {/* Development Tools */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Development Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Git</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Docker</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">ESLint</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Figma</span>
                  </div>
                </div>

                {/* Game Development */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Game Development & Creative Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Unity</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Unreal Engine</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Godot</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Python</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Blender</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">Adobe Photoshop</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      case 'mobileapps':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-16">
              {/* Introduction Section */}
              <section>
                <p className="text-2xl font-semibold text-gray-800 leading-relaxed pb-8 mb-8 border-b border-gray-200/60">
                  Mobile apps should feel like an extension of the user, not just another tool. 
                  My approach to app development is focused on seamless user experience, AI integration, 
                  and real-world utility—creating applications that understand, adapt, and evolve with the user.
                </p>
              </section>

              {/* Main Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  AI-Powered & Data-Driven Mobile Solutions
                </h2>
                <p className="text-xl text-gray-800 mb-8">
                  I develop cross-platform mobile applications using .NET MAUI, Flutter, and native frameworks, 
                  ensuring smooth performance across both iOS and Android. My focus is on building intelligent, 
                  intuitive, and scalable applications that don't just solve problems but enhance daily life.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Concepts & Experience:</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📱</span>
                        <div>
                          <p className="font-semibold">Mood Tracker App [In Development]</p>
                          <p className="text-gray-800">
                            Currently building a private AI-driven mood tracking app designed for personal 
                            well-being and self-improvement, available for iOS and Android. 
                            (Details remain confidential.)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚽</span>
                        <div>
                          <p className="font-semibold">Online Soccer Scheduling App (2023-2025)</p>
                          <p className="text-gray-800">
                            Developed an automated scheduling platform that allows players to find, organize, 
                            and rate matches, streamlining game coordination for sports communities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🧠</span>
                        <div>
                          <p className="font-semibold">Smart Productivity Apps</p>
                          <p className="text-gray-800">
                            Exploring habit-building apps, gamified task managers, and AI-assisted learning 
                            platforms that track progress dynamically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vision Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Future Vision
                </h2>
                <p className="text-xl text-gray-800">
                  Merging AI, fullstack development, and mobile experiences to create apps that not only 
                  assist but actively learn, predict, and improve user workflows.
                </p>
              </section>

              {/* Call to Action */}
              <section className="border-t border-gray-200 pt-8">
                <p className="text-xl text-gray-800 flex items-center gap-3">
                  <span>💬</span>
                  Have a mobile app idea? Let's build something together.
                </p>
              </section>
            </div>
          </div>
        );
      case 'unreal':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="flex gap-12">
              {/* Left Content */}
              <div className="w-1/2 space-y-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Unreal Engine: Lessons Learned, Paths Redefined
                </h2>
                
                <div className="space-y-6 text-gray-800">
                  {/* New Introduction Section */}
                  <div className="pb-6 border-b border-gray-200">
                    <p className="text-lg mb-4">
                      I am currently receiving training at Navras Academy, Turkey's first Unreal Engine and 
                      Epic Games-approved academy. Through their structured program, I have earned a certificate 
                      by successfully completing assigned tasks and actively participating in classes.
                    </p>
                    <p className="text-lg">
                      At Navras Academy, I have been learning everything a solo game developer needs—from 
                      foundational mechanics to advanced Unreal Engine workflows. While I will go into more 
                      detail in the relevant sections, this education continues to refine my technical expertise, 
                      problem-solving abilities, and game development skills.
                    </p>
                  </div>

                  {/* Existing Content */}
                  <p className="text-lg">
                    Game development isn't just about finishing a project—it's about what you learn along the way. 
                    My experience with Unreal Engine has been a mix of experimentation, frustration, breakthroughs, 
                    and setbacks, and I want to be as honest as possible about it.
                  </p>

                  <p className="text-lg">
                    I once worked on a game concept similar to Chained Together, where the character had smooth, 
                    fluid animations, IK (Inverse Kinematics), ledge climbing, and dynamic movement mechanics. 
                    It was one of my most ambitious projects, and I poured a lot into perfecting the movement system.
                  </p>

                  <p className="text-lg">
                    But over time, the project fell apart. The plugins I relied on became outdated, conflicting 
                    with each other, and because I hadn't updated the project regularly, it eventually became unusable. 
                    That was a hard lesson—one that taught me the importance of maintaining projects, keeping 
                    dependencies in check, and planning ahead for long-term sustainability.
                  </p>

                  <div className="pt-6">
                    <p className="text-lg font-semibold mb-4">
                      Even though I can't showcase any footage from that project, I don't see it as a failure. It taught me:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔</span>
                        How to handle animations and IK in Unreal Engine.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔</span>
                        How to work with Blueprint visual scripting effectively.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔</span>
                        How Unreal's ecosystem works—from movement mechanics to physics-based interactions.
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg pt-4">
                    Right now, I'm channeling everything I learned into new projects, and I'll keep posting updates 
                    as I progress. Unreal Engine remains one of my favorite tools, and while that game may never 
                    see the light of day, the experience shaped me into a better developer.
                  </p>
                </div>
              </div>

              {/* Right Content - Image Slideshow */}
              <div className="w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                  <ImageSlider images={unrealSlides} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'godot':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-16">
              {/* Title */}
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-blue-500">🔹</span>
                Godot Game Development
              </h2>

              {/* First Section - Text Left, GIF Right */}
              <div className="flex gap-12 items-center">
                <div className="w-1/2">
                  <p className="text-lg text-gray-800">
                    You can now catch the first glimpses of my game in development. 
                    To optimize the weapon system, I utilized Marker2D nodes, allowing me 
                    to modulate attacks dynamically while reusing the same animations—significantly 
                    improving efficiency and saving development time.
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <VideoPlayer 
                      src="/godot/weapon-preview.gif"
                      type="image/gif"
                    />
                  </div>
                </div>
              </div>

              {/* Second Section - GIF Left, Text Right */}
              <div className="flex gap-12 items-center">
                <div className="w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <VideoPlayer 
                      src="/godot/Run_N.gif"
                      type="image/gif"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-gray-800">
                    You can check out my previous works, where I designed and animated assets in Aseprite 
                    before successfully implementing them into my game. Every pixel was carefully crafted 
                    to fit the game's aesthetic, ensuring smooth animations and a cohesive visual style.
                  </p>
                </div>
              </div>

              {/* Third Section - Text Left, GIF Right */}
              <div className="flex gap-12 items-center">
                <div className="w-1/2">
                  <p className="text-lg text-gray-800">
                    This process deepened my understanding of sprite-based animation, optimization, and 
                    seamless integration into game engines. From concept to execution, I've refined my 
                    ability to create immersive, handcrafted visuals that bring the game world to life.
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <VideoPlayer 
                      src="/godot/Run_S.gif"
                      type="image/gif"
                    />
                  </div>
                </div>
              </div>

              {/* Fourth Section - GIF Left, Text Right */}
              <div className="flex gap-12 items-center">
                <div className="w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <VideoPlayer 
                      src="/godot/Sword_swing.gif"
                      type="image/gif"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-gray-800">
                    {/* Add another paragraph here if needed */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'blender':
        return (
          <div className="max-w-[90%] mx-auto">
            {/* Date display */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-500">{dateTime}</span>
            </div>

            <div className="space-y-12">
              {/* First Section */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-blue-500">🔹</span>
                  Blender: From Sculpting to Animation—Mastering the Full Pipeline
                </h2>
                
                <div className="text-gray-800 space-y-6">
                  <p className="text-lg">
                    My expertise in Blender comes from a combination of freelance experience 
                    and formal training at Navras Academy. Over the years, I've developed a 
                    deep understanding of every stage of the 3D pipeline, from sculpting and 
                    baking to rigging, animation, modeling, and lighting.
                  </p>

                  <p className="text-lg">
                    Whether it's character design, environment creation, or cinematic rendering, 
                    I have the skills to bring ideas to life in high-quality 3D assets. Blender 
                    has been an essential tool in my workflow, allowing me to create both game-ready 
                    models and pre-rendered visuals, adapting to the specific needs of each project.
                  </p>
                </div>
              </div>

              {/* Clean Dividing Line */}
              <hr className="border-t-2 border-blue-500/20" />

              {/* Second Section */}
              <div className="flex gap-12">
                {/* Left Content */}
                <div className="w-1/2">
                  <div className="text-gray-800 space-y-6 border-r-2 border-blue-500/20 pr-8">
                    <p className="text-lg">
                      I blindly jumped into Blender, eager to sculpt a character for my game—a 
                      decision that quickly turned into a trial by fire. While most start with 
                      modeling fundamentals, I unknowingly threw myself into advanced sculpting 
                      techniques, learning through sheer persistence.
                    </p>

                    <p className="text-lg">
                      The model you see was sculpted entirely by me—no AI, no shortcuts, just 
                      a deep dive into the craft. I then retopologized it properly, rigged it 
                      with bones, and prepared it for full in-game integration. While it was a 
                      challenging path, it gave me a deep understanding of Blender's sculpting, 
                      topology, and rigging workflows—one that most would only encounter much later.
                    </p>
                  </div>
                </div>

                {/* Right Content - Image */}
                <div className="w-1/2">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image 
                      src="/godot/first_blender.jpg"
                      alt="First Blender Project"
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Second Dividing Line */}
              <hr className="border-t-2 border-blue-500/20" />

              {/* Third Section */}
              <div className="flex gap-12">
                {/* Left Content */}
                <div className="w-1/2">
                  <div className="text-gray-800 space-y-6 border-r-2 border-blue-500/20 pr-8">
                    <p className="text-lg">
                      After successfully sculpting an entire character from scratch, I shifted my focus 
                      toward refining both modeling and sculpting techniques. Through extensive practice 
                      and structured training at Navras Academy, I honed my skills across various aspects 
                      of 3D design, topology, and detailing.
                    </p>

                    <p className="text-lg mt-4">
                      Here are some of my works, showcasing my progress and dedication to the craft:
                    </p>
                  </div>
                </div>

                {/* Right Content - For Images */}
                <div className="w-1/2">
                  {/* Add your showcase content here */}
                </div>
              </div>
            </div>
          </div>
        );
      case 'photoshop':
        return <p>Photoshop content here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
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
              href="mailto:erkinerdogan.dev@gmail.com" 
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
              href="https://linkedin.com/in/erkinerdoan" 
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
      <main className="flex-1 p-12">
        {renderContent()}
      </main>
    </div>
  );
}