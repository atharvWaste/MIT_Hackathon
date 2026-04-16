import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Share2, ThumbsUp } from 'lucide-react';

const Watch = ()=>{

  const { state } = useLocation();
  const navigate = useNavigate();

  // Fallback if someone lands here directly
  const videoId    = state?.videoId   || '';
  const title      = state?.title     || 'Untitled';
  const channel    = state?.channel   || 'Unknown';
  const category   = state?.category  || '';
  const viewers    = state?.viewers   || '';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&family=Exo+2:wght@300;400;600&display=swap');

        :root {
          --bg-deep: #05060d;
          --bg-base: #0a0c16;
          --pink: #ff1f6a;
          --pink-glow: rgba(255, 31, 106, 0.4);
          --text-1: #ffffff;
          --text-2: #a0a8c0;
          --text-3: #5c627a;
          --border: rgba(255, 255, 255, 0.08);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg-deep); color: var(--text-1); font-family: 'Exo 2', sans-serif; }

        .watch-page {
          min-height: 100vh;
          background: var(--bg-deep);
          padding: 30px 40px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          color: var(--text-2);
          padding: 10px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-family: 'Rajdhani';
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 30px;
          transition: 0.2s;
        }
        .back-btn:hover { border-color: var(--pink); color: var(--pink); }

        .player-wrapper {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .player-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid rgba(255, 31, 106, 0.3);
          box-shadow: 0 0 60px rgba(255, 31, 106, 0.15);
          background: #000;
        }

        .player-frame iframe {
          width: 100%;
          height: 100%;
          display: block;
        }

        .video-info {
          margin-top: 25px;
        }

        .video-title {
          font-family: 'Orbitron';
          font-size: 22px;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .video-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .channel-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #1a1d30;
          border: 2px solid var(--pink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron';
          font-size: 16px;
          font-weight: 900;
          color: var(--pink);
        }

        .channel-name {
          font-family: 'Rajdhani';
          font-size: 18px;
          font-weight: 700;
          color: var(--text-1);
        }

        .category-tag {
          font-size: 12px;
          color: var(--text-3);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .action-btns {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.05);
          color: var(--text-2);
          cursor: pointer;
          font-family: 'Rajdhani';
          font-weight: 700;
          font-size: 14px;
          transition: 0.2s;
        }
        .action-btn:hover { border-color: var(--pink); color: var(--pink); }
        .action-btn.primary {
          background: var(--pink);
          border-color: var(--pink);
          color: white;
          box-shadow: 0 4px 20px var(--pink-glow);
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--pink);
          color: white;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-left: 10px;
        }

        .viewers-info {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-2);
          font-size: 14px;
        }
      `}</style>

      <div className="watch-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> BACK
        </button>

        <div className="player-wrapper">
          {/* ── VIDEO PLAYER ── */}
          <div className="player-frame">
            <iframe
src={`https://www.youtube.com/embed/${videoId}${videoId.includes('?') ? '&' : '?'}autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* ── VIDEO INFO ── */}
          <div className="video-info">
            <h1 className="video-title">
              {title}
              <span className="live-badge">● LIVE</span>
            </h1>

            <div className="video-meta">
              <div className="channel-row">
                <div className="avatar">{channel?.[0] || '?'}</div>
                <div>
                  <div className="channel-name">{channel}</div>
                  <div className="category-tag">{category}</div>
                </div>
                {viewers && (
                  <div className="viewers-info" style={{ marginLeft: '20px' }}>
                    <Eye size={14} /> {viewers} watching
                  </div>
                )}
              </div>

              <div className="action-btns">
                <button className="action-btn primary">
                  <ThumbsUp size={14} /> Like
                </button>
                <button className="action-btn">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch 