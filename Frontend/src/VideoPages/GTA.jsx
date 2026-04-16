import React, { useState } from 'react';
import { Search, Home, Video, Monitor, Layers, Trophy, Play, TrendingUp, Eye, Filter } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const GTA=()=>{
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  //<iframe width="1013" height="570" src="https://www.youtube.com/embed/lQBlMFSLvrY?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="I SAVE GHOST GIRL FROM GANGSTERS | GTA V GAMEPLAY #5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{/* <iframe width="1013" height="570" src="https://www.youtube.com/embed/UF5ayql8ix4?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="ROBBERY IN CITY&#39;S BIGGEST JEWELLERY SHOP | GTA V GAMEPLAY #7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>// <iframe width="1013" height="570" src="https://www.youtube.com/embed/izJMy2lo-Fg?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="MICHAEL KILLED HIS DAUGHTER&#39;S FRIENDS  | GTA V GAMEPLAY #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    const videoData = [
    { id: "fcexQBagpc4?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "I Built a Minecraft House in Real Life", channel: "MrBeast", viewers: "12.4K", category: "Creative" },
    { id: "izJMy2lo-Fg?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "VCT Americas: LOUD vs Sentinels - Grand Finals", channel: "ValorantEsports", viewers: "85K", category: "Tactical" },
    { id: "2hT3K3K-QhY?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "GTA VI - Official Trailer 1", channel: "Rockstar Games", viewers: "1.2M", category: "Open World" },
    { id: "lQBlMFSLvrY?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "MW3 - Best Ranked Loadouts", channel: "Call of Duty", viewers: "5.2K", category: "FPS" },
    { id: "UF5ayql8ix4?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "Minecraft Speedrunner vs 5 Hunters", channel: "Dream", viewers: "44K", category: "Minecraft" },
    { id: "bCYaNo7ovoM?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5", title: "Valorant: How to Play Clove", channel: "SkillCapped", viewers: "10K", category: "Guide" }
  ];

  // <iframe width="1013" height="570" src="https://www.youtube.com/embed/bCYaNo7ovoM?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="I STOLE PRIME MINISTER&#39;S CAR | GTA V GAMEPLAY #6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
const EsportsVidep = [
    { id:"hhlgphVf-1g?list=PLTFsoy_DWCOOvT2L8CzAlgqp0997RZjv2" , title: "THE MYSTERY OF HEROBRINE IN MINECRAFT", channel:'ValorantEsports', category:'Tactical'},
    { id:"hvtR6Skx7_4" , title: "THE MYSTERY OF HEROBRINE IN MINECRAFT", channel:'ValorantEsports', category:'Tactical'},
    { id:"5bdsq08pG-E" , title: "THE MYSTERY OF HEROBRINE IN MINECRAFT", channel:'ValorantEsports', category:'Tactical'},
    { id:"e_E9W2vsRbQ?list=PLTFsoy_DWCOOvT2L8CzAlgqp0997RZjv2" , title: "THE MYSTERY OF HEROBRINE IN MINECRAFT", channel:'ValorantEsports', category:'Tactical'},
  ]
  
// <iframe width="1013" height="570" src="https://www.youtube.com/embed/dLuLdgBHcWs" title="Cherki&#39;s Brilliant Season So Far | Premier League 25/26 Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// <iframe width="1013" height="570" src="https://www.youtube.com/embed/lL_d84cN1UY" title="Race Highlights | 2026 Australian Grand Prix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  const Sports = [
    {id:"dLuLdgBHcWs", title:'Cherki&#39;s Brilliant Season So Far | Premier League 25/26 Highlights',channel:'ValorantEsports'},
     {id:"ZqwttIdH840", title:'Race Highlights | 2026 Australian Grand Prix',channel:'ValorantEsports'},

  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&family=Exo+2:wght@300;400;600&display=swap');

        :root {
          --bg-deep: #05060d;
          --bg-base: #0a0c16;
          --bg-card: rgba(18, 20, 33, 0.7);
          --pink: #ff1f6a;
          --pink-glow: rgba(255, 31, 106, 0.4);
          --text-1: #ffffff;
          --text-2: #a0a8c0;
          --text-3: #5c627a;
          --nav-h: 70px;
          --side-w: 260px;
          --border: rgba(255, 255, 255, 0.08);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg-deep);
          color: var(--text-1);
          font-family: 'Exo 2', sans-serif;
          overflow-x: hidden;
        }

        /* ── NAVIGATION ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: var(--nav-h); background: rgba(5, 6, 13, 0.9);
          backdrop-filter: blur(15px); border-bottom: 1px solid var(--border);
          display: flex; align-items: center; padding: 0 30px; gap: 40px;
        }

        .logo { font-family: 'Orbitron'; font-weight: 900; font-size: 22px; letter-spacing: 2px; }
        .logo span { color: var(--pink); text-shadow: 0 0 15px var(--pink-glow); }

        .search-container { flex: 1; max-width: 600px; position: relative; }
        .search-container input {
          width: 100%; padding: 10px 15px 10px 45px; background: rgba(255,255,255,0.05);
          border: 1px solid var(--border); border-radius: 8px; color: white; transition: 0.3s;
        }
        .search-container input:focus { border-color: var(--pink); outline: none; background: rgba(255,255,255,0.08); }

        /* ── SIDEBAR ── */
        aside {
          width: var(--side-w); position: fixed; top: var(--nav-h); bottom: 0; left: 0;
          background: var(--bg-base); border-right: 1px solid var(--border);
          padding: 25px 15px; z-index: 900;
        }

        .side-item {
          display: flex; align-items: center; gap: 15px; padding: 12px 20px;
          border-radius: 10px; color: var(--text-2); cursor: pointer; transition: 0.2s;
          margin-bottom: 5px; font-weight: 500;
        }
        .side-item:hover { background: rgba(255, 31, 106, 0.1); color: var(--pink); }
        .side-item.active { background: var(--pink); color: white; box-shadow: 0 5px 15px var(--pink-glow); }

        .side-label {
          font-family: 'Rajdhani'; font-size: 11px; font-weight: 700; color: var(--text-3);
          text-transform: uppercase; letter-spacing: 2px; margin: 25px 0 10px 20px;
        }

        /* ── MAIN CONTENT (The Fix) ── */
        main {
          margin-left: var(--side-w);
          padding: 40px;
          padding-top: calc(var(--nav-h) + 20px);
          min-height: 100vh;
          width: calc(100% - var(--side-w)); /* Forces main to fill remaining width */
        }

        .section-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 30px; border-left: 4px solid var(--pink); padding-left: 20px;
        }

        /* ── GRID SYSTEM (Eliminating white space) ── */
        .video-grid {
          display: grid;
          /* auto-fit stretches the items to fill the row exactly */
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
        }

        .vcard {
          display: flex; flex-direction: column; cursor: pointer;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vcard:hover { transform: translateY(-8px); }

        .vcard-thumb {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
          border-radius: 15px; overflow: hidden; border: 1px solid var(--border);
          background: #151828; margin-bottom: 15px;
        }
        .vcard:hover .vcard-thumb { border-color: var(--pink); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

        .vcard-body { display: flex; gap: 15px; }
        .avatar-circle {
          width: 40px; height: 40px; border-radius: 12px; background: #1a1d30;
          border: 1px solid var(--pink); flex-shrink: 0;
        }

        .vcard-title {
          font-size: 15px; font-weight: 600; line-height: 1.4; color: #fff;
          margin-bottom: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .vcard-meta { font-size: 13px; color: var(--text-3); display: flex; align-items: center; gap: 8px; }

        .live-tag {
          position: absolute; top: 12px; left: 12px; background: var(--pink);
          color: white; padding: 3px 10px; border-radius: 5px; font-size: 10px; font-weight: 800;
        }

        .viewer-tag {
          position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px); color: white; padding: 3px 8px; border-radius: 5px; font-size: 11px;
        }
      `}</style>

      <div className="app-container">
        <nav>
          <div className="logo">GAME<span>FLIX</span></div>
          <div className="search-container">
            <Search size={18} style={{ position: 'absolute', left: '15px', top: '12px', color: 'var(--text-3)' }} />
            <input type="text" placeholder="Search for streams, tournaments, or players..." />
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ textAlign: 'right', lineHeight: '1' }}>
              <p style={{ fontSize: '12px', color: '#ffd84d', fontWeight: 'bold' }}>RADIANT</p>
              <p style={{ fontSize: '10px', color: 'var(--text-3)' }}>JD #NA1</p>
            </div>
            <div style={{ width: '40px', height: '40px', background: 'var(--pink)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>JD</div>
          </div>
        </nav>

  <aside>
        <p className="side-label">Menu</p>
        <div className={`side-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')} >
         <a onClick={()=>{navigate('../Destop')}}><Home size={20} /> Home</a>
        </div>
        <div className="side-item"><a onClick={()=>{navigate('../Valorant')}}><TrendingUp size={20} /> Trending</a></div>
        <div className="side-item"> <a onClick={()=>{navigate('../Destop')}}><Video size={20} /> Live Now</a></div>
        
        <p className="side-label">Pro Channels</p>
        <div className="side-item" onClick={() => navigate('/Valorant')}><Layers size={20} color="#ff4655" /> Valorant Pro</div>
        <div className="side-item" onClick={() => navigate('/GTA')}><Monitor size={20} color="#00d4ff" /> GTA V World</div>
        <div className="side-item" onClick={() => navigate('/Minecraft')}><Trophy size={20} color="#57ff47" /> Minecraft Pro</div>
      </aside>

      <main>
        <div style={{ borderLeft: '4px solid var(--pink)', paddingLeft: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', letterSpacing: '1px' }}>LIVE CHANNELS</h2>
        </div>

        <div className="video-grid">
          {videoData.map((video) => (
            <div key={video.id} className="vcard" style={{ transition: '0.3s' }}>
              <div className="vcard-thumb">
                <div className="live-tag">LIVE</div>
                <div className="viewer-tag"><Eye size={12} style={{marginRight: '5px'}}/> {video.viewers}</div>
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              {/* <iframe width="1013" height="570" src="https://www.youtube.com/embed/fcexQBagpc4?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="NEW GANGSTER IS HERE | GTA V GAMEPLAY #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              {/* <iframe width="1013" height="570" src="https://www.youtube.com/embed/izJMy2lo-Fg?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="MICHAEL KILLED HIS DAUGHTER&#39;S FRIENDS  | GTA V GAMEPLAY #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#1a1d30', border: '1px solid var(--pink)', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '6px', color: '#fff' }}>{video.title}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--text-3)', display: 'flex', gap: '8px' }}>
                    <span style={{color: 'var(--text-2)'}}>{video.channel}</span>
                    <span>•</span>
                    <span>{video.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <main>
        <div style={{ borderLeft: '4px solid var(--pink)', paddingLeft: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', letterSpacing: '1px' }}>Esports</h2>
        </div>

        <div className="video-grid">
          {EsportsVidep.map((video) => (
            <div key={video.id} className="vcard" style={{ transition: '0.3s' }}>
              <div className="vcard-thumb">
                <div className="live-tag">LIVE</div>
                <div className="viewer-tag"><Eye size={12} style={{marginRight: '5px'}}/> {video.viewers}</div>
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#1a1d30', border: '1px solid var(--pink)', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '6px', color: '#fff' }}>{video.title}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--text-3)', display: 'flex', gap: '8px' }}>
                    <span style={{color: 'var(--text-2)'}}>{video.channel}</span>
                    <span>•</span>
                    <span>{video.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <main>
        <div style={{ borderLeft: '4px solid var(--pink)', paddingLeft: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', letterSpacing: '1px' }}>Sports</h2>
        </div>

        <div className="video-grid">
          {Sports.map((video) => (
            <div key={video.id} className="vcard" style={{ transition: '0.3s' }}>
              <div className="vcard-thumb">
                <div className="live-tag">LIVE</div>
                <div className="viewer-tag"><Eye size={12} style={{marginRight: '5px'}}/> {video.viewers}</div>
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              {/* <iframe width="1013" height="570" src="https://www.youtube.com/embed/fcexQBagpc4?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="NEW GANGSTER IS HERE | GTA V GAMEPLAY #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              {/* <iframe width="1013" height="570" src="https://www.youtube.com/embed/izJMy2lo-Fg?list=PL8vL-_f27zDSI0jeUGdZGG-E0B1zWD_J5" title="MICHAEL KILLED HIS DAUGHTER&#39;S FRIENDS  | GTA V GAMEPLAY #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#1a1d30', border: '1px solid var(--pink)', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '6px', color: '#fff' }}>{video.title}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--text-3)', display: 'flex', gap: '8px' }}>
                    <span style={{color: 'var(--text-2)'}}>{video.channel}</span>
                    <span>•</span>
                    <span>{video.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      </div>
    </>
  );
};

export default GTA;