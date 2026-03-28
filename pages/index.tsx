import React, { useState } from 'react';
import { FaUser, FaLightbulb, FaFileAlt, FaGlobe, FaMobile, FaBars, FaTimes } from 'react-icons/fa';
import { FaUnity } from 'react-icons/fa6';
import { BiLogoBlender } from 'react-icons/bi';
import { SiGodotengine, SiUnrealengine } from 'react-icons/si';
import { MdPhotoCamera, MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import ImageSlider from '../components/ImageSlider';

type Section = 'about' | 'ideas' | 'cv' | 'webapps' | 'mobileapps' | 'unity' | 'unreal' | 'godot' | 'blender' | 'photoshop';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: 'about', label: 'About', icon: <FaUser /> },
    { section: 'ideas', label: 'Ideas', icon: <FaLightbulb /> },
    { section: 'cv', label: 'CV', icon: <FaFileAlt /> },
  ];

  const fullstackItems: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: 'webapps', label: 'Web Apps', icon: <FaGlobe /> },
    { section: 'mobileapps', label: 'Mobile Apps', icon: <FaMobile /> },
  ];

  const projectItems: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: 'unity', label: 'Unity', icon: <FaUnity /> },
    { section: 'unreal', label: 'Unreal Engine', icon: <SiUnrealengine /> },
    { section: 'godot', label: 'Godot', icon: <SiGodotengine /> },
    { section: 'blender', label: 'Blender', icon: <BiLogoBlender /> },
    { section: 'photoshop', label: 'Photoshop', icon: <MdPhotoCamera /> },
  ];

  const renderContent = () => {
    switch (activeSection) {

      case 'about':
        return (
          <div className="fade-in max-w-4xl">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-4 ring-offset-dark-900 shrink-0">
                <Image src="/images/profile/profile.jpg" alt="Erkin Erdoğan" width={112} height={112} className="object-cover w-full h-full" priority />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Erkin Erdoğan</h1>
                <p className="text-accent-light text-lg font-medium">Software Developer</p>
                <p className="text-gray-400 text-sm mt-1">Sakarya, Turkey</p>
              </div>
            </div>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                I build mobile and web apps with
                <span className="text-accent-light font-medium"> Node.js</span>,
                <span className="text-accent-light font-medium"> JavaScript</span> and
                <span className="text-accent-light font-medium"> React Native</span>, and prototype mobile games with
                <span className="text-accent-light font-medium"> Unity/C#</span>.
              </p>

              <p>
                I shipped <span className="text-white font-semibold">EdicorAi</span> to the App Store (4.8 stars from early users)
                and built <span className="text-white font-semibold">VetAide</span>&apos;s backend on Supabase and PostgreSQL.
                On the side, I make hypercasual game prototypes.
              </p>

              <p>
                I want to work somewhere I can own features end-to-end and eventually move deeper into game development and interactive experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { label: 'EdicorAi', value: '4.8 stars, App Store' },
                { label: 'VetAide', value: 'Pet health platform' },
                { label: 'Game Dev', value: 'Unity & Godot' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-accent-light font-semibold text-sm">{stat.label}</div>
                  <div className="text-white text-sm mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ideas':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Ideas</h2>

            {[
              {
                title: 'AI That Actually Remembers You',
                desc: 'Most AI tools reset every session. I want to build companions that carry context forward — things that learn your preferences, remember your goals, and get better over time.',
                concepts: [
                  { name: 'Persistent memory across sessions', detail: 'No more re-explaining yourself every time.' },
                  { name: 'Character-driven AI', detail: 'Systems that embody specific personas — fictional, historical, or custom.' },
                  { name: 'AI as opponent and teacher', detail: 'Something that challenges you in games or coding, not just assists.' },
                  { name: 'NPCs that know you', detail: 'Game characters that remember your choices across playthroughs.' },
                ],
              },
              {
                title: 'Fullstack Work I Actually Care About',
                desc: 'I like building things that are fast, handle real load, and don\'t fall apart at scale. Mostly interested in game backends and data-heavy apps.',
                concepts: [
                  { name: 'Microservices that scale', detail: 'Systems built to handle real traffic without duct tape.' },
                  { name: 'AI-assisted platforms', detail: 'Apps that generate or suggest content based on user behavior.' },
                  { name: 'Live dashboards', detail: 'Real-time data visualization with actual predictive value.' },
                  { name: 'Game backend systems', detail: 'Player sync, economy, leaderboards — the infrastructure side of multiplayer.' },
                ],
              },
              {
                title: 'Mobile Apps That Don\'t Feel Generic',
                desc: 'Most apps are forgettable. I want to build things that feel personal and actually adapt to how you use them.',
                concepts: [
                  { name: 'Smart personal assistant', detail: 'Learns your daily patterns and suggests things before you ask.' },
                  { name: 'Gamified task management', detail: 'Turn your to-do list into something you want to open.' },
                  { name: 'Game companion tools', detail: 'Real-time trackers, strategy helpers, matchmaking.' },
                  { name: 'Adaptive learning', detail: 'Tracks what you don\'t know and builds a study path around it.' },
                ],
              },
              {
                title: 'Games Where AI Isn\'t Braindead',
                desc: 'Enemy AI in most games is predictable. I want to build opponents and systems that actually adapt.',
                concepts: [
                  { name: 'NPCs with memory', detail: 'They remember what you did last session.' },
                  { name: 'AI-written side quests', detail: 'Story content generated from your actual play style.' },
                  { name: 'Adaptive opponents', detail: 'ML-based enemies that learn your patterns and counter them.' },
                  { name: 'Procedural worlds', detail: 'Cities and ecosystems that evolve as you play.' },
                ],
              },
            ].map((section) => (
              <div key={section.title} className="glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{section.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.concepts.map((c) => (
                    <div key={c.name} className="p-3 rounded-lg bg-dark-800/50">
                      <span className="text-white font-medium text-sm">{c.name}</span>
                      <p className="text-gray-500 text-xs mt-0.5">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-white/5 pt-6">
              <p className="text-gray-400 text-sm">Some of these are experiments, some are future projects. If any of this overlaps with what you&apos;re working on, I&apos;d like to hear about it.</p>
            </div>
          </div>
        );

      case 'cv':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            {/* Header */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent/30 shrink-0">
                <Image src="/images/profile/profile.jpg" alt="Erkin Erdoğan" width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Erkin Erdoğan</h1>
                <p className="text-gray-400 mt-1">Sakarya, Turkey · erkinerdogan.dev@gmail.com</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://linkedin.com/in/erkinerdoan" target="_blank" rel="noopener noreferrer" className="text-accent-light text-sm hover:underline">LinkedIn</a>
                  <a href="https://github.com/Lynph9" target="_blank" rel="noopener noreferrer" className="text-accent-light text-sm hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I build production-grade mobile and web apps with Node.js, JavaScript and React Native, and I prototype mobile games with Unity and C#. I shipped EdicorAi to the App Store (4.8 stars) and built VetAide&apos;s backend on Supabase/PostgreSQL. I&apos;m looking for a role where I can own features end-to-end and work toward game and interactive product development.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Work Experience
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Founder & Lead Developer – EdicorAi',
                    period: 'Sep 2023 – Present',
                    points: [
                      'Built an offline-first photo editing and AI prompt app with Expo (React Native), JavaScript and SQLite.',
                      'Designed a local-first data layer — client-side caching and persistent storage, no external backend needed.',
                      'Launched on the Apple App Store. 4.8/5.0 rating from early adopters. Handled bug fixes, perf tuning, and releases.',
                      'Ran the full product lifecycle solo: design, implementation, App Store process, and ongoing maintenance.',
                    ],
                  },
                  {
                    title: 'Indie Game Developer & Prototyper',
                    period: '2020 – Present',
                    points: [
                      'Built several hypercasual mobile prototypes (e.g. Barber Shop Sim) in Unity (C#) and Unreal Engine.',
                      'Focused on core loops, input handling, camera behavior and UI — optimizing for game feel on mobile.',
                      'Iterated on difficulty, pacing and feedback through playtesting.',
                    ],
                  },
                  {
                    title: 'Lead Developer – VetAide',
                    period: 'Feb 2022 – June 2025',
                    points: [
                      'Built a Supabase/PostgreSQL backend for tracking long-term pet health data: symptoms, visits, media, notes.',
                      'Wrote Node.js services that generate weekly AI-driven health summaries, diet plans and exercise routines.',
                      'Designed the data model for recurring check-ins and long-term progression — similar to live-ops systems in games.',
                    ],
                  },
                ].map((job) => (
                  <div key={job.title} className="glass-card p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-white font-semibold">{job.title}</h3>
                      <span className="text-accent-light text-sm shrink-0 ml-4">{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Technical Skills
              </h2>
              <div className="space-y-4">
                {[
                  { cat: 'Backend & Data', skills: ['Node.js', 'JavaScript', '.NET Core', 'SQL', 'Supabase', 'PostgreSQL'] },
                  { cat: 'Mobile & Web', skills: ['React Native (Expo)', 'React.js', 'Tailwind CSS', 'HTML5/CSS3'] },
                  { cat: 'Game Development', skills: ['Unity (C#)', 'Unreal Engine', 'Blender'] },
                  { cat: 'Tools', skills: ['Git', 'Docker', 'Figma'] },
                ].map((group) => (
                  <div key={group.cat}>
                    <h3 className="text-sm text-gray-500 font-medium mb-2">{group.cat}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="tech-pill">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Education
              </h2>
              <div className="space-y-3">
                <div className="glass-card p-4">
                  <h3 className="text-white font-medium">Computer Science — Sakarya University</h3>
                  <p className="text-gray-500 text-sm">2024 – Present</p>
                </div>
                <div className="glass-card p-4">
                  <h3 className="text-white font-medium">Electrical &amp; Electronic Engineering — Eskişehir Osmangazi University</h3>
                  <p className="text-gray-500 text-sm">2019 – 2024 · Transferred to Computer Science</p>
                </div>
              </div>
            </section>

            {/* Languages & Certificates */}
            <div className="grid grid-cols-2 gap-6">
              <section>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Languages
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-gray-300">English</span><span className="text-accent-light">C2 – Near Native</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-300">Turkish</span><span className="text-accent-light">Native</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-300">Japanese</span><span className="text-accent-light">N4</span></div>
                </div>
              </section>
              <section>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Certificates
                </h2>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Unreal Engine — Navras Academy</p>
                  <p>Blender — Navras Academy</p>
                  <p>Photoshop — Navras Academy</p>
                </div>
              </section>
            </div>
          </div>
        );

      case 'webapps':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Web Applications</h2>

            <div className="glass-card p-6 border border-accent/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                <span className="text-gray-500 text-sm">Freelance · 2024</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                Built a full e-commerce site from scratch for a client. Product catalog with categories and search, shopping cart, checkout flow with real payment processing, order tracking, and an admin panel for inventory management. Supabase backend with PostgreSQL, real-time stock updates, and auth.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Client later migrated to Shopify to reduce maintenance overhead — which honestly says more about the business need than the code. The original handled real transactions and real customers from day one.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'JavaScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS'].map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Freelance Web Work</h3>
                <span className="text-gray-500 text-sm">2023 – Present</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                I've built and delivered multiple websites for clients — business landing pages, service platforms, admin dashboards. Most are under NDA or belong to the client so I can't show them here, but the work covers the full stack: responsive frontends, REST APIs, database design, auth, and deployment.
              </p>
              <p className="text-gray-400 text-sm">
                If you want specifics I'm happy to walk through the technical details in person.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">This Portfolio</h3>
              <p className="text-gray-300 leading-relaxed">
                Built from scratch with Next.js and Tailwind CSS. Single-page layout with dynamic content switching, dark theme, and responsive design. No templates, no generators — just code.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Next Up</h3>
              <p className="text-gray-400 leading-relaxed">
                Planning a car retail website — inventory management, search/filter, and a clean buyer-facing UI.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-bold text-white mb-4">Stack</h3>
              <div className="space-y-4">
                {[
                  { cat: 'Backend & Database', skills: ['Node.js', 'JavaScript', '.NET Core', 'Supabase', 'PostgreSQL', 'SQL Server'] },
                  { cat: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
                  { cat: 'Dev Tools', skills: ['Git', 'Docker', 'ESLint', 'Figma'] },
                ].map((group) => (
                  <div key={group.cat}>
                    <h4 className="text-sm text-gray-500 font-medium mb-2">{group.cat}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((s) => <span key={s} className="tech-pill">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'mobileapps':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Mobile Applications</h2>

            {/* EdicorAi */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">EdicorAi</h3>
                <span className="text-accent-light text-sm bg-accent/10 px-3 py-1 rounded-full">4.8 stars, App Store</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                Offline-first photo editing and AI prompt app. Built with Expo (React Native), JavaScript and SQLite. Everything runs locally — no external backend, no account needed.
              </p>
              <p className="text-gray-400 text-sm">
                Launched on the Apple App Store. I handle everything: design, development, releases, bug fixes, and performance work.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['React Native', 'Expo', 'JavaScript', 'SQLite'].map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>

            {/* VetAide */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">VetAide</h3>
                <span className="text-gray-500 text-sm">Feb 2022 – June 2025</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                Veterinary health tracking app. Backend on Supabase/PostgreSQL — tracks symptoms, vet visits, media, and notes over time.
              </p>
              <p className="text-gray-400 text-sm">
                Built Node.js services that generate weekly health summaries, diet plans and exercise routines. Designed the data model around recurring check-ins and long-term progression.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Node.js', 'JavaScript', 'Supabase', 'PostgreSQL'].map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>

            {/* App Screenshots */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Screenshots</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/2">
                  <ImageSlider
                    images={[
                      '/images/MobileApplications/WhatsApp Image 2025-05-22 at 22.05.39.jpeg',
                      '/images/MobileApplications/WhatsApp Image 2025-05-22 at 22.05.38 (1).jpeg',
                      '/images/MobileApplications/WhatsApp Image 2025-05-22 at 22.05.38.jpeg',
                      '/images/MobileApplications/WhatsApp Image 2025-05-22 at 22.05.37 (1).jpeg',
                      '/images/MobileApplications/WhatsApp Image 2025-05-22 at 22.05.37.jpeg',
                    ]}
                    height="400px"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Work in progress — full details coming when these ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'unity':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Unity</h2>

            <div className="glass-card p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I&apos;m building a first-person co-op game in Unity 6 (URP) targeting PC/Steam. Genre hybrid — part simulation, part action, part tycoon — set in a dense open-world neighborhood with a day/night cycle, faction diplomacy, and a full progression system. Not announcing it yet, but the scope is serious and I&apos;m deep into production.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Before this, I shipped several hypercasual prototypes to test ideas and learn what works across different game types.
              </p>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-white font-semibold mb-3">Systems I&apos;ve built so far</h3>
              <div className="space-y-2">
                {[
                  'Procedural mesh system — ~974 individually interactable chunks per NPC, real-time deformation',
                  'Zone-based damage model with 7 independent hit zones, bleed/stun states, ragdoll on kill',
                  'Day/night cycle with two distinct gameplay phases and AI behavior shifts',
                  'Passive world simulation — board-game style dice rolls, crew AI, faction actions while player is away',
                  'P2P co-op networking for 1-4 players',
                  '5-tier heat/escalation system affecting police AI, NPC behavior, and territory control',
                  'NPC AI: customer queuing, dialogue trees with intel gathering, faction-aware behavior (spies, informants, hostiles)',
                  'Skill-based scoring system across 8 zones with accuracy-driven XP, payment, and reputation',
                  'Shop/base upgrade tree tied to progression — equipment, rooms, defenses',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-accent shrink-0 mt-1">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h4 className="text-white text-sm font-medium mb-2">Tech</h4>
                <div className="flex flex-wrap gap-2">
                  {['Unity 6', 'URP', 'C#', 'P2P Netcode'].map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-white text-sm font-medium mb-2">Target</h4>
                <div className="flex flex-wrap gap-2">
                  {['PC (Steam)', '1-4 Co-op', 'First Person'].map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6">
              <p className="text-gray-500 text-sm">More to show when I&apos;m closer to a playable build. The design doc is 40+ pages and growing.</p>
            </div>
          </div>
        );

      case 'unreal':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Unreal Engine</h2>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-6">
                <div className="glass-card p-5">
                  <h3 className="text-white font-semibold mb-3">Navras Academy</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Training at Turkey&apos;s first Epic Games-approved Unreal Engine academy. Earned a certificate through completed coursework. Covers everything from foundational mechanics to advanced engine workflows.
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    I worked on a climbing/platformer project similar to Chained Together — smooth animations, IK, ledge climbing, dynamic movement. The project eventually broke because I let plugin dependencies go stale. Lost the project, kept the lessons.
                  </p>
                </div>

                <div className="glass-card p-4">
                  <p className="text-white font-medium text-sm mb-3">What I took away from it:</p>
                  <div className="space-y-2">
                    {[
                      'Animations and IK in Unreal',
                      'Blueprint scripting at a practical level',
                      'How the Unreal ecosystem actually fits together',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-green-400 shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <ImageSlider
                  images={[
                    '/images/blender/model-gray.jpg',
                    '/images/blender/model-colored.jpg',
                    '/images/blender/model-scene.jpg',
                  ]}
                  height="500px"
                />
              </div>
            </div>
          </div>
        );

      case 'godot':
        return (
          <div className="fade-in max-w-4xl space-y-12">
            <h2 className="text-2xl font-bold text-white">Godot</h2>

            {[
              {
                text: 'Early prototype footage. I used Marker2D nodes to modulate attacks dynamically while reusing the same animations — cuts down on redundant work significantly.',
                image: '/images/godot/weapon-preview.gif',
                reverse: false,
              },
              {
                text: 'All pixel art drawn in Aseprite, then imported into Godot. Each sprite was made to match the game\'s visual language — consistent palette, readable silhouettes, smooth frame transitions.',
                image: '/images/godot/Run_N.gif',
                reverse: true,
              },
              {
                text: 'The whole pipeline — concept, sprite sheet, engine integration — taught me a lot about how animation, optimization and game feel connect at the pixel level.',
                image: '/images/godot/Run_S.gif',
                reverse: false,
              },
              {
                text: '',
                image: '/images/godot/Sword_swing.gif',
                reverse: true,
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden bg-dark-800">
                    <img src={item.image} alt={`Godot Demo ${idx + 1}`} className="w-full h-auto object-contain" />
                  </div>
                </div>
                {item.text && (
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'blender':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Blender</h2>

            <div className="glass-card p-6 space-y-3">
              <p className="text-gray-300 leading-relaxed">
                I know the full pipeline: sculpting, retopology, baking, rigging, animation, modeling, and lighting. Mix of self-taught work and structured training at Navras Academy.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                I can produce game-ready assets or pre-rendered visuals depending on what the project needs.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-3">
                <h3 className="text-white font-semibold">First Character</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jumped straight into sculpting before learning the basics. The model was done entirely by hand — sculpted, retopologized, rigged, and prepped for a game engine. Learned more from this one project than any tutorial.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden">
                  <Image src="/images/blender/first_blender.jpg" alt="First Blender Project" width={500} height={300} className="object-contain w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-3">
                <h3 className="text-white font-semibold">Later Work</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  After that first character, I spent time refining topology, sculpting detail, and learning proper workflows through Navras Academy.
                </p>
              </div>
              <div className="md:w-1/2">
                <ImageSlider images={['/images/blender/demon.jpg', '/images/blender/fox.jpg', '/images/blender/plane.jpg']} height="300px" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-3">
                <h3 className="text-white font-semibold">Animation & Lighting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Moved into keyframe animation, IK rigs, and lighting setups. Still learning, but comfortable enough to produce usable work.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden bg-dark-800 h-[300px] flex items-center justify-center">
                  <img src="/images/blender/robot.gif" alt="Robot Animation" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'photoshop':
        return (
          <div className="fade-in max-w-4xl space-y-10">
            <h2 className="text-2xl font-bold text-white">Photoshop</h2>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-6">
                <div className="glass-card p-5 space-y-3">
                  <p className="text-gray-300 leading-relaxed">
                    Started learning Photoshop to make my own banners, UI assets, and splash screens. Went through the full Navras Academy program — ended up comfortable with most of what the tool offers.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Graphic design and digital art for branding and UI',
                      'Professional mockups for presentations and marketing',
                      'Photo manipulation, retouching, and compositing',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <ImageSlider
                  images={Array.from({ length: 14 }, (_, i) => `/images/photoshop/${i + 1}.jpg`)}
                  height="80vh"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleNav = (section: Section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const sidebarContent = (
    <>
      <nav className="flex-1 space-y-6">
        <div>
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-all mb-1
                ${activeSection === item.section
                  ? 'bg-accent/15 text-accent-light border-l-2 border-accent'
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border-l-2 border-transparent'
                }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 px-3 font-semibold">Fullstack</h2>
          {fullstackItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className={`w-full text-left py-2 px-3 rounded-lg text-sm flex items-center gap-3 transition-all mb-0.5
                ${activeSection === item.section
                  ? 'bg-accent/15 text-accent-light border-l-2 border-accent'
                  : 'text-gray-500 hover:bg-white/5 hover:text-gray-300 border-l-2 border-transparent'
                }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 px-3 font-semibold">Projects</h2>
          {projectItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className={`w-full text-left py-2 px-3 rounded-lg text-sm flex items-center gap-3 transition-all mb-0.5
                ${activeSection === item.section
                  ? 'bg-accent/15 text-accent-light border-l-2 border-accent'
                  : 'text-gray-500 hover:bg-white/5 hover:text-gray-300 border-l-2 border-transparent'
                }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="border-t border-white/5 pt-4 mt-4">
        <h2 className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 px-3 font-semibold">Contact</h2>
        <div className="space-y-0.5">
          <a href="mailto:erkinerdogan.dev@gmail.com" className="flex items-center gap-3 py-2 px-3 text-sm text-gray-500 hover:text-accent-light hover:bg-white/5 rounded-lg transition-all">
            <MdEmail className="text-base" /> <span>Mail</span>
          </a>
          <a href="https://github.com/Lynph9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 px-3 text-sm text-gray-500 hover:text-accent-light hover:bg-white/5 rounded-lg transition-all">
            <BsGithub className="text-base" /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/erkinerdoan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 px-3 text-sm text-gray-500 hover:text-accent-light hover:bg-white/5 rounded-lg transition-all">
            <BsLinkedin className="text-base" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-dark-900 noise-bg">

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-dark-800/90 backdrop-blur-sm border-b border-white/5">
        <span className="text-white font-semibold text-sm">Erkin Erdoğan</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-400 hover:text-white transition-colors p-1">
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-dark-900/95 backdrop-blur-sm pt-14 px-5 pb-5 flex flex-col overflow-y-auto">
          {sidebarContent}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 bg-dark-800/50 backdrop-blur-sm border-r border-white/5 p-5 flex-col fixed h-screen z-10">
        {sidebarContent}
      </aside>

      <main className="flex-1 md:ml-60 p-5 md:p-10 pt-16 md:pt-10 relative z-[1]">
        {renderContent()}
      </main>
    </div>
  );
}
