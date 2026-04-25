import T from "./Theme";
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${T.bg0}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
 
  @keyframes float     { from { transform: translateY(0); } to { transform: translateY(-13px); } }
  @keyframes pulse     { 0%,100% { transform: scale(1); opacity:1; } 50% { transform: scale(1.1); opacity:.65; } }
  @keyframes blink     { 0%,100% { opacity:1; } 50% { opacity:0; } }
  @keyframes bounce    { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(-10px); } }
  @keyframes scroll-d  { 0% { transform:translateY(0); opacity:1; } 100% { transform:translateY(11px); opacity:0; } }
 
  .btn-primary {
    display:inline-block; font-family:${T.mono}; font-size:12px; letter-spacing:.1em;
    text-transform:uppercase; padding:14px 36px; background:${T.accent}; color:#fff;
    border-radius:4px; text-decoration:none;
    transition:opacity .2s, transform .2s;
    box-shadow:0 0 28px rgba(74,144,217,.28);
  }
  .btn-primary:hover { opacity:.85; transform:translateY(-2px); }
 
  .btn-outline {
    display:inline-block; font-family:${T.mono}; font-size:12px; letter-spacing:.1em;
    text-transform:uppercase; padding:14px 36px; background:transparent; color:#fff;
    border:1px solid rgba(255,255,255,.2); border-radius:4px; text-decoration:none;
    transition:border-color .2s, transform .2s;
  }
  .btn-outline:hover { border-color:rgba(255,255,255,.45); transform:translateY(-2px); }
 
  .nav-link { color:${T.muted}; text-decoration:none; transition:color .2s; font-family:${T.mono}; font-size:11px; letter-spacing:.12em; text-transform:uppercase; padding-bottom:2px; }
  .nav-link:hover { color:${T.accentLt}; }
  .nav-link.active { color:${T.accentLt}; border-bottom:1px solid ${T.accentLt}; }
 
  .ham { display:block; width:22px; height:2px; background:#fff; border-radius:1px; transition:all .3s ease; }
 
  /* cursor hidden on touch */
  @media (hover:none) { .cursor { display:none !important; } }
  /* mobile nav */
  @media (max-width:767px) { .desktop-links { display:none !important; } .ham-btn { display:flex !important; } }
  @media (min-width:768px) { .mobile-overlay { display:none !important; } .ham-btn { display:none !important; } }
`;

export default CSS;
