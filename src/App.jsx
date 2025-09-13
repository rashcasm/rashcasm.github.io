import React, { useState, useEffect } from 'react';

// Main component for the portfolio website
function App() {
  // Use state to manage which tab is currently active
  const [activeTab, setActiveTab] = useState('about');
  const [showResumeWarning, setShowResumeWarning] = useState(false);

  // Your name and a tagline
  const yourName = "Rashmin Chaudhari";
  const yourTagline = "Exploring Solana";

  // Placeholder for your profile image and resume
  const profilePic = "/img.png";
  const resumePath = ""; // Add the URL to your resume PDF here.

  const handleDownloadResume = () => {
    if (resumePath) {
      const link = document.createElement('a');
      link.href = resumePath;
      link.setAttribute('download', 'Rashmin_Chaudhari_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowResumeWarning(true);
    }
  };

  useEffect(() => {
    if (showResumeWarning) {
      const timer = setTimeout(() => {
        setShowResumeWarning(false);
      }, 5000); // Hide the warning after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showResumeWarning]);

  // Content for each section, stored as a simple object
  const sections = {
    about: {
      heading: "About Me",
      content: (
        <div className="flex flex-col items-center">
          <p className="max-w-xl mx-auto text-sm leading-relaxed">
      I’m a CS and Business Systems student who loves building things from scratch, whether it’s a web app, 
      a hackathon prototype, or diving into a new blockchain idea. Over the last few years 
      I’ve explored everything from full-stack development to machine learning and web3, 
      picking up a few hackathon wins and research projects along the way.  
      What excites me most is solving real problems with tech and working with people 
      who share the same drive. <br />When I’m not at the laptop, you’ll probably find me 
      reading up on the latest in blockchain, sketching, or helping juniors get 
      started.<br />^^
    </p>
          <button
            onClick={handleDownloadResume}
            className="font-bold border border-neutral-900 p-2 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
          >
            Download Resume
          </button>
          {showResumeWarning && (
            <p className="text-red-500 text-xs mt-2 transition-opacity duration-500 opacity-100">
              Oops, my resume is still in beta! Please check back later.
            </p>
          )}
        </div>
      ),
    },
    projects: {
      heading: "My Projects",
      content: (
        <div className="grid gap-8 max-w-2xl mx-auto">
          <a href="https://github.com/rashcasm/Stellar-Ragnarok/tree/main/Hulk_Hashers" className="border border-neutral-900 p-4 block hover:bg-neutral-200 transition-colors duration-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">AidChain</h3>
              <p className="text-sm">2025</p>
            </div>
            <p className="text-sm mb-2 italic">Flutter, Stellar, Soroban, Rust</p>
            <p className="text-sm">Developed Stellar-based platform for transparent, low-cost aid disbursements using stablecoins.</p>
          </a>
          <a href="https://github.com/rashcasm/chess-backend" className="border border-neutral-900 p-4 block hover:bg-neutral-200 transition-colors duration-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Online Chess Game</h3>
              <p className="text-sm">2024</p>
            </div>
            <p className="text-sm mb-2 italic">TypeScript, WebSocket</p>
            <p className="text-sm">Built a real-time backend for a multiplayer online chess game. Implemented WebSocket communication to enable live gameplay between users.</p>
          </a>
          <a href="https://github.com/rashcasm/RTH-ideaspark" className="border border-neutral-900 p-4 block hover:bg-neutral-200 transition-colors duration-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">IdeaSpark</h3>
              <p className="text-sm">2024</p>
            </div>
            <p className="text-sm mb-2 italic">Javascript, MERN, Flutter</p>
            <p className="text-sm">Built a platform to connect student innovators with mentors and investors. Implemented WebSocket for live communication and pitching.</p>
          </a>
        </div>
      ),
    },
    achievements: {
      heading: "Awards and Achievements",
      content: (
        <ul className="text-sm text-left max-w-xl mx-auto space-y-4">
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">First Prize, Blockchain Nexus, IIT Kanpur</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">Created network topology architecture using Hyperledger Fabric and defined high-level system architecture.</p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Second Prize, Stellar Ragnarok, Nagpur</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">Pitched a product idea using Stellar blockchain and deployed Soroban Smart Contracts.</p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">First Prize, Raisoni Tech Hackathon, Nagpur</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">IdeaSpark.</p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Outstanding Tech Performer, SVPCET</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1"></p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">2-Star, Competitive Programming, CodeChef</span>
                <span className="text-xs">2024</span>
              </div>
              <p className="text-xs mt-1"></p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Third Prize, SIH Expo, SVPCET</span>
                <span className="text-xs">2024</span>
              </div>
              <p className="text-xs mt-1"></p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">First Prize, Dataverse 3.0, SVPCET</span>
                <span className="text-xs">2024</span>
              </div>
              <p className="text-xs mt-1"></p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Second Prize, Dataverse 2.0, SVPCET</span>
                <span className="text-xs">2023</span>
              </div>
              <p className="text-xs mt-1"></p>
            </a>
          </li>
        </ul>
      ),
    },
    certifications: {
      heading: "Certifications",
      content: (
        <ul className="text-sm text-left max-w-xl mx-auto space-y-4">
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <span className="font-bold">Blockchain Basics — Cyfrin</span>
              <p className="text-xs mt-1"> </p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <span className="font-bold">Disaster Risk Monitoring Using Satellite Imagery — NVIDIA</span>
              <p className="text-xs mt-1"> </p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <span className="font-bold">Software Engineering — Infosys Springboard</span>
              <p className="text-xs mt-1"> </p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <span className="font-bold">Python and SQL for Data Science — Scaler</span>
              <p className="text-xs mt-1"> </p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <span className="font-bold">Data Analysis using Python — Jovian</span>
              <p className="text-xs mt-1"> </p>
            </a>
          </li>
        </ul>
      ),
    },
    community_involvement: {
      heading: "Contributions & Community Involvement",
      content: (
        <ul className="text-sm text-left max-w-xl mx-auto space-y-4">
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Coordinator and Organizer, HacKronyX</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">Led the entire national level hackathon with 3500+ registrations, managing logistics, sponsors, volunteers, and execution.</p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Technical Mentor and Judge, HackGenX</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">Guided participants and judged projects based on innovation and technical implementation.</p>
            </a>
          </li>
          <li className="p-2 border border-neutral-900">
            <a href="#" className="block hover:bg-neutral-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <span className="font-bold">Guest Speaker on AI, Daryapur</span>
                <span className="text-xs">2025</span>
              </div>
              <p className="text-xs mt-1">Delivered a session on AI, its applications, trends, and societal impact, as a part of Vigyan Va Ganit Sanskar Shibir, ViBha.</p>
            </a>
          </li>
        </ul>
      ),
    },
  };

  // Render the portfolio components
  return (
    // The main container for the entire page. 'items-start' keeps the content at the top.
    <div className="min-h-screen bg-stone-300 text-neutral-900 font-mono flex flex-col items-center p-4 pt-16">
      
      {/* The main content card */}
      <div className="w-full max-w-4xl p-8 border-4 border-neutral-900 bg-stone-100 shadow-lg">

        {/* Name and tagline header section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase">{yourName}</h1>
          <p className="text-sm">{yourTagline}</p>
        </div>
        
        {/* Profile image section */}
        <div className="text-center mb-8">
          <img
            src={profilePic}
            alt="My profile"
            className="w-36 h-36 mx-auto rounded-full border-4 border-neutral-900 object-cover"
          />
          {/* Social icons */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/rashminchaudhari" className="hover:text-cyan-500 transition-colors duration-200">
              <img src="https://img.icons8.com/?size=100&id=RjyJigAbeJlA&format=png&color=000000" alt="LinkedIn" className="w-5 h-5 object-cover"/>
            </a>
            <a href="https://twitter.com/rashcasm" className="hover:text-cyan-500 transition-colors duration-200">
              <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="Twitter" className="w-5 h-5 object-cover"/>
            </a>
            <a href="https://github.com/rashcasm" className="hover:text-cyan-500 transition-colors duration-200">
              <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="GitHub" className="w-5 h-5 object-cover"/>
            </a>
            <a href="https://t.me/rashminc" className="hover:text-cyan-500 transition-colors duration-200">
              <img src="https://img.icons8.com/?size=100&id=11223&format=png&color=000000" alt="Telegram" className="w-5 h-5 object-cover"/>
            </a>
          </div>
        </div>

        {/* Tabs for navigation */}
        <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mb-8">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                px-4 py-2 mt-2 text-sm font-bold border border-neutral-900 transition-colors duration-200
                ${activeTab === key ? 'bg-neutral-900 text-stone-100' : 'hover:bg-neutral-200'}
              `}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Content area based on the active tab */}
        <hr className="border-t-2 border-neutral-900 w-full mb-8" />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 uppercase">
            {sections[activeTab].heading}
          </h2>
          <div className="prose text-neutral-900">
            {sections[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the App component to be used by the main application file
export default App;
