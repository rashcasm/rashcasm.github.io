import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Terminal, Database, Cpu, Globe, Code2, ExternalLink, Wrench, Library, Layers, Zap, BookOpen, Send, Instagram, Coffee, Check } from 'lucide-react';
import {GitHubCalendar} from 'react-github-calendar';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  // REPLACE THIS WITH YOUR ACTUAL SOLANA WALLET ADDRESS
  const [copied, setCopied] = useState(false);
  const solanaAddress = "GsJYonU5Kz4MJBHZ5UFx9oyStBpXXswnZcFUorktj2yZ"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(solanaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Custom theme for the calendar to match your pastel look
  const calendarTheme = {
      light: [
        '#e8e8e8', // Level 0 (Empty) - Light Gray
        '#9F8FEF', // Level 1 - Very Light Lavender
        '#9F8FEF', // Level 2 - Your Main Lavender Accent
        '#7A6DDF', // Level 3 - Medium Purple
        '#7A6DDF', // Level 4 - Darker Purple
      ],
      dark: [
        '#e8e8e8', // Level 0 (Empty) - Light Gray
        '#9F8FEF', // Level 1 - Very Light Lavender
        '#9F8FEF', // Level 2 - Your Main Lavender Accent
        '#7A6DDF', // Level 3 - Medium Purple
        '#7A6DDF',
      ],
    };

  // Categorized Skills Data
  const skillsCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      color: "var(--accent-4)", // Blue
      items: ["Rust", "Python", "C++", "SQL", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      icon: <Layers size={20} />,
      color: "var(--accent-1)", // Green
      items: ["Anchor", "React", "Node.js", "MERN"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} />,
      color: "var(--accent-3)", // Pink
      items: ["Git", "VS Code", "Surfpool", "Postman"]
    },
    // {
    //   title: "Libraries",
    //   icon: <Library size={20} />,
    //   color: "var(--accent-1)", // Lavender
    //   items: ["pandas", "NumPy", "Matplotlib"]
    // }
  ];

  const achievements = [
    {
      title: "First Position, Blockchain Nexus",
      org: "IIT Kanpur",
      year: "2025",
      desc: "Created network topology architecture using Hyperledger Fabric and defined high-level system architecture."
    },
    {
      title: "Second Position, Stellar Ragnarok",
      org: "Nagpur",
      year: "2025",
      desc: "Pitched a product idea using Stellar blockchain and deployed Soroban Smart Contracts."
    },
    {
      title: "First Position, Raisoni Tech Hackathon",
      org: "Nagpur",
      year: "2024",
      desc: "Secured 1st place for innovative technical solutions."
    },
    {
      title: "Outstanding Tech Performer",
      org: "SVPCET",
      year: "2024",
      desc: "Award Receiver."
    },
    {
      title: "Third Position, SIH Expo",
      org: "SVPCET",
      year: "2024",
      desc: "Internal Smart India Hackathon exhibition winner."
    },
    {
      title: "First Position, Dataverse",
      org: "SVPCET",
      year: "2024",
      desc: "Secured top rank in data-focused competition."
    },
    {
      title: "Rank 1 in College",
      org: "SVPCET",
      year: "2024",
      desc: "Achieved 10.00 CGPA."
    }
  ];

  const projects = [
    {
      title: "Ekonos",
      tech: "Rust, Solana, Anchor",
      year: "2025",
      link: "https://github.com/rashcasm/ekonos-v1",
      details: [
        "Started as the capstone project under turbin3.org (The Solana Talent Engine).",
        "Designing a protocol enabling fractional ownership of assets on Solana.",
      ]
    },
    {
      title: "Multi-threaded Web Server",
      tech: "Rust",
      year: "2025",
      link: "https://github.com/rashcasm/rust_web_server",
      details: [
        "Built a multi-threaded web server in Rust.",
        "No framework. Create thread pool manually to really understand how things work under the hood."
      ]
    },
    {
      title: "Automated Market Maker (AMM)",
      tech: "Rust, Solana, Anchor",
      year: "2025",
      link: "https://github.com/rashcasm/anchor-amm",
      details: [
        "Built an Automated Market Maker smart contract on Solana.",
        "Implemented liquidity pools, swaps, and LP token minting using Anchor framework."
      ]
    },
    {
      title: "Minigrep",
      tech: "Rust, CLI",
      year: "2025",
      link: "https://github.com/rashcasm/minigrep-rustbook",
      details: [
        "Built a fast command-line text search tool inspired by grep using Rust.",
        "Implemented pattern matching, file reading, and case-insensitive search via environment variables."
      ]
    },
    {
      title: "Quill.ai",
      tech: "JavaScript, Chrome Extensions, AI",
      year: "2025",
      link: "https://github.com/rashcasm/form_fill_mini",
      details: [
        "Built a Google Chrome extension that generates AI-based responses and auto-fills web forms.",
        "Implemented DOM parsing and field detection to inject context-aware responses directly into forms."
      ]
    },
    {
      title: "IdeaSpark",
      tech: "React, MongoDB, Flutter, MERN",
      year: "2024",
      link: "https://github.com/rashcasm/RTH-ideaspark",
      details: [
        "Built a platform to connect student innovators with mentors and investors.",
        "Implemented WebSocket for live communication and pitching."
      ]
    },
    {
      title: "Rust-Solana Learning Repo",
      tech: "markdown",
      year: "2025",
      link: "https://github.com/rashcasm/web3-journal",
      details: [
        "personal learning repository documenting Rust and Solana concepts.",
      ]
      }
  ];

  const community = [
    {
      event: "Get On-Chain Workshop",
      role: "Speaker and Instructor",
      year: "2025",
      details: [
        "Conducted a hands-on workshop titled 'Get On-Chain' for 70+ participants.",
        "Introduced blockchain fundamentals and guided attendees to deploy their first dApp using Noah.ai."
      ]
    },
    {
      event: "Superteam India & Solana Foundation",
      role: "Conference Attendee",
      year: "2025",
      details: [
        "Participated in the OnlyDevs Conference by Superteam India and Solana Apex by Solana Foundation.",
        "Engaged with the Solana developer ecosystem and explored upcoming trends in decentralized applications."
      ]
    },
    {
      event: "HacKronyX",
      role: "Coordinator and Organizer",
      year: "2025",
      details: [
        "Led a national-level hackathon with 3500+ registrations.",
        "Managed logistics, sponsorships, volunteers, and end-to-end event execution."
      ]
    },
    {
      event: "HackGenX",
      role: "Technical Mentor and Judge",
      year: "2025",
      details: [
        "Guided participants and evaluated projects on innovation, design, and technical depth."
      ]
    },
    {
      event: "Guest Speaker on AI",
      role: "Vigyan Va Ganit Sanskar Shibir (ViBha)",
      year: "2025",
      details: [
        "Delivered a talk on AI applications, emerging trends, and societal impact in Daryapur."
      ]
    },
    {
      event: "Google Devfest Nagpur",
      role: "Volunteer",
      year: "2025",
      details: [
        "Contributed in the management and operations of Devfest 2025."
      ]
    }
  ];

  /* GITHUB CALCULATIONS */
// const selectLastHalfYear = (contributions) => {
//   const now = new Date();
//   const sixMonthsAgo = new Date();
//   sixMonthsAgo.setMonth(now.getMonth() - 6);
//   return contributions.filter(activity => {
//     const activityDate = new Date(activity.date);
//     return activityDate >= sixMonthsAgo && activityDate <= now;
//   });
// };


  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="profile-pic-container">
          <img 
            src="/rashmin.jpg"
            alt="Rashmin Avatar" 
            className="profile-pic"
          />
        </div>
        
        <h1>RASHMIN</h1>
        <div className="tagline">
          RUST | SOLANA | MERN | AI
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/rashminchaudhari" target="_blank" rel="noopener noreferrer" className="icon-btn"><Linkedin size={20} /></a>
          <a href="https://twitter.com/rashcasm" target="_blank" rel="noopener noreferrer" className="icon-btn"><Twitter size={20} /></a>
          <a href="https://github.com/rashcasm" target="_blank" rel="noopener noreferrer" className="icon-btn"><Github size={20} /></a>
          <a href="https://t.me/rashminc" target="_blank" rel="noopener noreferrer" className="icon-btn"><Send size={20} /></a>
          <a href="mailto:rashmin9c@gmail.com" className="icon-btn"><Mail size={20} /></a>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="nav">
        {['about', 'stack', 'projects', 'achievements', 'community'].map((tab) => (
          <button 
            key={tab}
            className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main>
        {activeTab === 'about' && (
          <>
            <section className="card" style={{ textAlign: 'center', padding: '40px' }}>
              <h2 style={{ marginTop: 0, fontFamily: 'var(--font-mono)' }}>
                Hi, I’m Rashmin.
              </h2>

              <p>
                I’m a 3rd-year Computer Science & Business Systems student with a strong focus on <strong>Rust,
                backend development, and Web3.</strong>
              </p>

              <p>
                I’ve studied Rust and graduated from elite blockchain fellowships like
                <strong> Ackee – School of Solana</strong> and <strong> Turbin3 Builders</strong> Cohort.
                I actively build using the <strong>MERN stack</strong> and have an overview of
                <strong> AI/ML concepts</strong>.
              </p>

              <p>
                I’m also a student at <strong>100xDevs</strong>, learning to build scalable,
                production-ready systems with a strong backend-first mindset.
              </p>
            </section>

            {/* GITHUB CALENDAR SECTION */}
            <div className="card" style={{ marginTop: '20px', padding: '20px', textAlign: 'center' }}>
               <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontFamily: 'var(--font-mono)', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px' }}>
                 <Github size={20} /> Contributions
               </h3>
               {/* Wrapper for overflow scrolling on small screens */}
               <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
                  <GitHubCalendar
                    username="rashcasm"
                    blockSize={12}
                    blockMargin={2}
                    fontSize={14}
                    blockRadius={5}
                    theme={calendarTheme}
                    style={{ color: 'black' }}
                    showColorLegend={false}
                  />
               </div>
            </div>
            {/* NEW "CURRENT FOCUS" SECTION BENEATH ABOUT */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
              
              <div className="card" style={{ marginBottom: 0, flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Zap size={20} color="var(--border-color)" />
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Learning Now</h3>
                </div>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '5px' }}>Rust Lang Book</li>
                  <li style={{ marginBottom: '5px' }}>Rust Atomics and Locks</li>
                  <li style={{ marginBottom: '5px' }}>Rust for Rustaceans</li>
                </ul>
              </div>

              <div className="card" style={{ marginBottom: 0, flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <BookOpen size={20} color="var(--border-color)" />
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Interests</h3>
                </div>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '5px' }}>Philosophies</li>
                  <li style={{ marginBottom: '5px' }}>Organizing Cool Stuff</li>
                  <li style={{ marginBottom: '5px' }}>Sleepinn..zzz</li>
                </ul>
              </div>
              
            </div>
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleCopy}
              className="nav-btn" 
                style={{ 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: '12px', 
                   fontSize: '1rem',
                   padding: '15px 30px',
                   backgroundColor: copied ? 'var(--accent-2)' : 'white' // Turns Mint Green on success
                }}
                >
              {copied ? <Check size={20} /> : <Coffee size={20} />}
              {copied ? "Address Copied!" : "Buy me a cryptic coffee"}
            </button>
            </div>
          </>
        )}

        {/* NEW STACK TAB */}
        {activeTab === 'stack' && (
          <section>
             <h2 className="section-title">TECH STACK</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              {skillsCategories.map((cat, index) => (
                <div key={index} className="card" style={{padding: '20px', textAlign: 'left'}}>
                  <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '15px',
                    borderBottom: '2px solid #eee',
                    paddingBottom: '10px'
                  }}>
                    <span style={{color: 'black'}}>{cat.icon}</span>
                    <h3 style={{margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-mono)'}}>{cat.title}</h3>
                  </div>
                  
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                    {cat.items.map((item, i) => (
                      <span key={i} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        backgroundColor: cat.color,
                        padding: '8px 14px',
                        border: '2px solid black',
                        boxShadow: '3px 3px 0px 0px black',
                        borderRadius: '4px'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section>
            <h2 className="section-title">AWARDS & WINS</h2>
            {achievements.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <small style={{fontFamily: 'var(--font-mono)', opacity: 0.7}}>{item.org}</small>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <p style={{marginTop:'10px', fontSize:'0.95rem'}}>{item.desc}</p>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'projects' && (
          <section>
            <h2 className="section-title">BUILD LOG</h2>
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{fontSize: '1.3rem'}}>{project.title}</h3>
                    <div style={{
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.8rem', 
                      background: 'var(--accent-4)', 
                      display: 'inline-block',
                      padding: '2px 6px',
                      border: '1px solid black',
                      marginTop: '5px'
                    }}>
                      {project.tech}
                    </div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <span className="card-year">{project.year}</span>
                      <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-btn" 
                          style={{width: '30px', height: '30px', marginTop: '5px', marginLeft: 'auto'}}
                        >
                          <ExternalLink size={14} />
                        </a>
                  </div>
                </div>
                <ul style={{marginTop:'15px', paddingLeft: '20px', fontSize: '0.95rem'}}>
                  {project.details.map((point, i) => (
                    <li key={i} style={{marginBottom: '5px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'community' && (
          <section>
            <h2 className="section-title">COMMUNITY & TALKS</h2>
            {community.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{fontSize: '1.2rem'}}>{item.event}</h3>
                    <div style={{
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.85rem', 
                      background: 'var(--accent-3)', 
                      display: 'inline-block',
                      padding: '4px 8px',
                      border: '1px solid black',
                      marginTop: '6px',
                      fontWeight: 'bold'
                    }}>
                      {item.role}
                    </div>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <ul style={{marginTop:'15px', paddingLeft: '20px', fontSize: '0.95rem'}}>
                  {item.details.map((point, i) => (
                    <li key={i} style={{marginBottom: '5px'}}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}
      </main>

      <footer>
        <p>© 2026 Rashmin • Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;