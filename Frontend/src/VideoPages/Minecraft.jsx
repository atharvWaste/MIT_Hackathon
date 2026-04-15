import React, { useState } from 'react';
import { Search, Home, Video, PlayCircle, MessageSquare, Bookmark, History, Monitor, Layers, Trophy, Bell, Heart, Play, Clock, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Minecraft = ()=>{

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
      <style>{`
        :root {
          --bg-deep: #070810;
          --bg-base: #0d0f1c;
          --bg-card: #131627;
          --bg-card2: #1a1d30;
          --bg-hover: #1f2338;
          --pink: #ff1f6a;
          --cyan: #00d4ff;
          --gold: #ffd84d;
          --gold-dim: rgba(255,216,77,0.15);
          --text-1: #ffffff;
          --text-2: #a0a8c0;
          --text-3: #636880;
          --nav-h: 60px;
          --side-w: 220px;
          --radius: 10px;
          --border: rgba(255,255,255,0.07);
        }
*{
background: var(--bg-deep);
}
  
        .game-wrapper {
          background: var(--bg-deep);
          color: var(--text-1);
          min-height: 100vh;
          font-family: 'Exo 2', sans-serif;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: var(--nav-h); background: rgba(7,8,16,0.95);
          backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
          display: flex; align-items: center; padding: 0 20px; gap: 16px;
        }

        .logo { font-family: 'Orbitron'; font-size: 20px; font-weight: 700; }
        .logo span { color: var(--pink); }

        aside {
          width: var(--side-w); position: fixed; top: var(--nav-h); bottom: 0; left: 0;
          background: var(--bg-base); border-right: 1px solid var(--border); padding: 16px 0;
        }

        .side-label {
          font-family: 'Rajdhani'; font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-3);
          padding: 8px 20px 4px;
        }

        .side-item {
          display: flex; align-items: center; gap: 10px; padding: 9px 20px;
          font-size: 13px; color: var(--text-2); cursor: pointer; transition: 0.15s;
          border-left: 2px solid transparent; text-decoration: none;
        }

        .side-item:hover { background: var(--bg-hover); color: #fff; border-left-color: var(--pink); }
        .side-item.active { background: rgba(255,31,106,0.08); color: var(--pink); border-left-color: var(--pink); }

        main { margin-left: var(--side-w); padding: 24px 28px; }

        .hero {
          position: relative; border-radius: 14px; overflow: hidden;
          margin-bottom: 32px; height: 380px; background: var(--bg-card); display: flex;
        }

        .hero-thumb {
          flex: 1; background: linear-gradient(135deg, #1a0a2e, #0f1744);
          position: relative; display: flex; align-items: center; justify-content: center;
        }

        .hero-thumb::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .hero-info { width: 320px; padding: 28px 24px; background: var(--bg-card); border-left: 1px solid var(--border); }
        
        .video-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .vcard {
          background: var(--bg-card); border-radius: var(--radius); overflow: hidden;
          border: 1px solid var(--border); cursor: pointer; transition: 0.2s;
        }

        .vcard:hover { transform: translateY(-4px); border-color: var(--pink); }
        .vcard-thumb { position: relative; padding-top: 56.25%; background: var(--bg-card2); }
        .vcard-body { padding: 12px; display: flex; gap: 10px; }
        
        .pulse { animation: pulseAnim 1.4s infinite; }
        @keyframes pulseAnim { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        .avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, var(--pink), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Orbitron'; font-size: 12px; font-weight: bold;
          border: 2px solid var(--pink); cursor: pointer;
        }
      `}</style>

      <div className="game-wrapper">
        {/* ── NAVBAR ── */}
        <nav>
          <div className="logo">GAME<span>FLIX</span></div>
          
          <div className="nav-search" style={{ flex: 1, maxWidth: '420px', position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search games, matches, teams..." 
              style={{ width: '100%', height: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '0 16px', color: '#fff', outline: 'none' }}
            />
            <button style={{ position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--pink)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={14} color="white" />
            </button>
          </div>

          <div className="nav-right" style={{ marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div className="xp-widget" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: 'var(--gold)', background: 'var(--gold-dim)', padding: '2px 7px', borderRadius: '4px', border: '1px solid rgba(255,216,77,0.3)' }}>LVL 18</span>
                <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>620 / 1000 XP</span>
              </div>
              <div style={{ width: '100px', height: '4px', background: 'var(--bg-card2)', borderRadius: '2px', marginTop: '4px' }}>
                <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, var(--gold), #ffaa00)', borderRadius: '2px' }}></div>
              </div>
            </div>
            <div className="avatar">AW</div>
          </div>
        </nav>

        <div className="layout" style={{ display: 'flex', paddingTop: 'var(--nav-h)' }}>
          {/* ── SIDEBAR ── */}
          <aside>
            <div className="side-section">
              <p className="side-label">Menu</p>
              <div className={`side-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>
                <Home size={16} /> Home
              </div>
              <div className="side-item">
                <Video size={16} /> Live Now <span className="side-badge" style={{ marginLeft: 'auto', background: 'var(--pink)', color: '#fff', fontSize: '10px', padding: '1px 5px', borderRadius: '3px' }}>12</span>
              </div>
              <div className="side-item">
                <PlayCircle size={16} /> Subscriptions
              </div>
            </div>
            <div style={{ height: '1px', background: 'var(--border)', margin: '15px' }}></div>
            <div className="side-section">
              <p className="side-label">Esports</p>
              <div className="side-item"><a onClick={()=>{navigate('../GTA')}}><Monitor size={16} /> GTA</a></div>
              <div className="side-item" ><a onClick={()=>{navigate('../Valorant')}}><Layers size={16} /> Valorant</a></div>
              <div className="side-item" ><a onClick={()=>{navigate('/Minecraft')}}><Trophy size={16} /> Minecraft</a></div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main>
            {/* HERO SECTION */}
            <div className="hero">
              <div className="hero-thumb">
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--pink)', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="pulse" style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%' }}></div> LIVE
                </div>
                <div style={{ width: '70px', height: '70px', background: 'var(--pink)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,31,106,0.4)' }}>
                  <Play size={30} fill="white" style={{ marginLeft: '5px' }} />
                </div>
              </div>
              <div className="hero-info">
                <div style={{ color: 'var(--cyan)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Esports • CS2 Major</div>
                <h1 style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '15px' }}>IEM Katowice 2026 — Grand Final</h1>
                <p style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: '1.6', marginBottom: '20px' }}>Natus Vincere face Team Vitality in a thrilling best-of-three Grand Final.</p>
                <button style={{ width: '100%', padding: '12px', background: 'var(--pink)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>WATCH LIVE</button>
              </div>
            </div>

            {/* VIDEO GRID */}
            
            <div style={{ marginBottom: '20px', borderLeft: '3px solid var(--pink)', paddingLeft: '12px' }}>
              <h2 style={{ fontSize: '16px', textTransform: 'uppercase' }}>Recommended For You</h2>
            </div>
            
            <div className="video-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="vcard">
                  <div className="vcard-thumb">
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'var(--gold-dim)', border: '1px solid rgba(255,216,77,0.4)', color: 'var(--gold)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>+50 XP</div>
                  </div>
                  <div className="vcard-body">
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>CH</div>
                    <div className="vcard-text">
                      <div className="vcard-title">Live Match: Pro League Season {i}</div>
                      <div className="vcard-ch-name">GamingChannel_0{i}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

                        <div style={{ marginBottom: '20px', borderLeft: '3px solid var(--pink)', paddingLeft: '12px' }}>
              <h2 style={{ fontSize: '16px', textTransform: 'uppercase' }}>Esports</h2>
            </div>
            
            <div className="video-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="vcard">
                  <div className="vcard-thumb">
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'var(--gold-dim)', border: '1px solid rgba(255,216,77,0.4)', color: 'var(--gold)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>+50 XP</div>
                  </div>
                  <div className="vcard-body">
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>CH</div>
                    <div className="vcard-text">
                      <div className="vcard-title">Live Match: Pro League Season {i}</div>
                      <div className="vcard-ch-name">GamingChannel_0{i}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

                        <div style={{ marginBottom: '20px', borderLeft: '3px solid var(--pink)', paddingLeft: '12px' }}>
              <h2 style={{ fontSize: '16px', textTransform: 'uppercase' }}>Sports</h2>
            </div>
            
            <div className="video-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="vcard">
                  <div className="vcard-thumb">
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'var(--gold-dim)', border: '1px solid rgba(255,216,77,0.4)', color: 'var(--gold)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>+50 XP</div>
                  </div>
                  <div className="vcard-body">
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>CH</div>
                    <div className="vcard-text">
                      <div className="vcard-title">Live Match: Pro League Season {i}</div>
                      <div className="vcard-ch-name">GamingChannel_0{i}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Minecraft