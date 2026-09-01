"use strict";

var _React = React,
  useEffect = _React.useEffect;
var PHOTO_URL = window.matchMedia("(max-width: 767px)").matches ? "/IMG_5455-640.webp" : "/IMG_5455-1200.webp";
var css = "\n      :root { --bone:#F0EBE1;--black:#0C0C0A;--charcoal:#1E1D1A;--teal:#78C8B5;--teal-dim:rgba(120,200,181,0.12);--muted:#6B665B;--rule:rgba(12,12,10,0.14);--safe-b:env(safe-area-inset-bottom,0px);--nh:52px;--th:56px; }\n      body { background:var(--bone);color:var(--black);font-family:'Space Mono',monospace;overflow-x:hidden;-webkit-font-smoothing:antialiased;padding-bottom:calc(var(--th) + var(--safe-b)); }\n      a:focus-visible{outline:3px solid #F15A2A;outline-offset:4px;}\n      @media(min-width:768px){ body{padding-bottom:0} :root{--nh:58px} }\n      .mh{position:fixed;top:0;left:0;right:0;height:var(--nh);z-index:400;background:var(--black);display:flex;align-items:center;justify-content:center;}\n      .mh-name{font-family:'Anton',sans-serif;font-size:1rem;letter-spacing:.12em;color:var(--bone);text-transform:uppercase;text-decoration:none;}\n      .mh-name span{color:var(--teal);}\n      @media(min-width:768px){.mh{display:none;}}\n      .dn{display:none;}\n      @media(min-width:768px){.dn{display:flex;position:fixed;top:0;left:0;right:0;height:var(--nh);z-index:400;background:var(--black);justify-content:space-between;align-items:center;padding:0 2.5rem;}}\n      .dn-logo{color:var(--bone);background:none;border:none;cursor:pointer;padding:0;transition:color .2s;display:flex;align-items:center;text-decoration:none;}\n      .dn-logo:hover{color:var(--teal);}\n      .dn-links{display:flex;gap:2rem;}\n      .dn-btn{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(240,235,225,.58);background:none;border:none;cursor:pointer;padding:0;transition:color .2s;text-decoration:none;}\n      .dn-btn:hover{color:var(--bone);} .dn-btn.active{color:var(--teal);}\n      .tb{position:fixed;bottom:0;left:0;right:0;height:calc(var(--th) + var(--safe-b));padding-bottom:var(--safe-b);background:var(--black);border-top:1px solid rgba(255,255,255,.06);display:flex;z-index:400;}\n      @media(min-width:768px){.tb{display:none;}}\n      .tb-btn{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;background:none;border:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background .15s;text-decoration:none;}\n      .tb-btn:active{background:rgba(255,255,255,.04);}\n      .tb-icon{font-size:.95rem;color:rgba(240,235,225,.52);transition:color .15s;line-height:1;}\n      .tb-label{font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.52);transition:color .15s;}\n      .tb-btn.active .tb-icon,.tb-btn.active .tb-label{color:var(--teal);}\n      .page{padding-top:var(--nh);}\n      .hero{background:var(--black);padding:2rem 1.25rem 2.5rem;position:relative;overflow:hidden;min-height:calc(100svh - var(--nh));display:flex;flex-direction:column;justify-content:space-between;}\n      @media(min-width:768px){.hero{padding:4rem 3rem 3rem;min-height:calc(100vh - var(--nh));}}\n      .hero-bg{display:none;position:absolute;font-family:'Anton',sans-serif;line-height:1;pointer-events:none;user-select:none;letter-spacing:-.03em;}\n      @media(min-width:768px){.hero-bg{display:block;top:1rem;right:2.5rem;font-size:24vw;color:rgba(240,235,225,.08);}}\n      .hero-top{display:flex;justify-content:space-between;align-items:flex-start;opacity:0;animation:fadeIn .5s ease .1s forwards;}\n      .hero-tag-pill{font-family:'Space Mono',monospace;font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);border:1px solid rgba(240,235,225,.4);padding:.3rem .7rem;}\n      .hero-year{font-family:'Space Mono',monospace;font-size:.75rem;letter-spacing:.12em;color:rgba(240,235,225,.5);}\n      .hero-name-block{position:relative;z-index:2;opacity:0;animation:riseIn .8s ease .2s forwards;}\n      .hero-fname{font-family:'Anton',sans-serif;font-size:clamp(5rem,22vw,14rem);line-height:.85;color:var(--bone);text-transform:uppercase;letter-spacing:-.01em;display:block;}\n      .hero-lname{font-family:'Anton',sans-serif;font-size:clamp(5rem,22vw,14rem);line-height:.85;color:var(--teal);text-transform:uppercase;letter-spacing:-.01em;display:block;}\n      .hero-bottom{display:flex;flex-direction:column;gap:1rem;position:relative;z-index:2;opacity:0;animation:riseIn .6s ease .45s forwards;}\n      @media(min-width:768px){.hero-bottom{flex-direction:row;justify-content:space-between;align-items:flex-end;}}\n      .hero-roles{display:flex;flex-direction:column;gap:.35rem;}\n      .hero-role{font-family:'Space Mono',monospace;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(240,235,225,.68);display:flex;align-items:center;gap:.75rem;}\n      .hero-role::before{content:'';display:block;width:18px;height:1px;background:var(--teal);flex-shrink:0;}\n      .hero-scroll-hint{font-family:'Space Mono',monospace;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(240,235,225,.48);display:flex;align-items:center;gap:.5rem;}\n      .hero-scroll-line{width:32px;height:1px;background:rgba(240,235,225,.15);position:relative;overflow:hidden;}\n      .hero-scroll-line::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:var(--teal);animation:scanLine 2s ease 1.5s infinite;}\n      .marquee-strip{background:var(--teal);overflow:hidden;white-space:nowrap;padding:.6rem 0;border-bottom:3px solid var(--black);}\n      .marquee-track{display:inline-block;animation:marquee 18s linear infinite;}\n      .marquee-text{font-family:'Anton',sans-serif;font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;color:var(--black);display:inline-block;padding:0 2rem;}\n      .marquee-sep{display:inline-block;color:rgba(12,12,10,.35);padding:0 .5rem;}\n      .story{padding:2.5rem 1.25rem;border-bottom:3px solid var(--black);}\n      @media(min-width:768px){.story{display:grid;grid-template-columns:1fr 1fr;gap:0;padding:0;}}\n      @media(min-width:768px){.story-left{padding:4rem 3rem;border-right:3px solid var(--black);}}\n      .story-right{margin-top:2rem;}\n      @media(min-width:768px){.story-right{padding:4rem 3rem;margin-top:0;display:flex;flex-direction:column;justify-content:space-between;}}\n      .kicker{font-family:'Space Mono',monospace;font-size:.75rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:1.25rem;display:flex;align-items:center;gap:.75rem;}\n      .kicker::before{content:'';display:block;width:24px;height:2px;background:var(--teal);flex-shrink:0;}\n      .big-headline{font-family:'Anton',sans-serif;font-size:clamp(2.6rem,10vw,5.5rem);line-height:.9;text-transform:uppercase;letter-spacing:-.01em;color:var(--black);margin-bottom:2rem;}\n      .big-headline em{font-style:normal;color:var(--teal);display:block;}\n      .body-copy{font-family:'Instrument Serif',serif;font-size:1.05rem;line-height:1.8;color:var(--charcoal);}\n      .body-copy p+p{margin-top:1.25rem;}\n      .body-copy strong{color:var(--black);font-weight:normal;text-decoration:underline;text-decoration-color:var(--teal);text-underline-offset:3px;}\n      .pull-quote{margin:2rem 0;padding:1.25rem;border-left:4px solid var(--teal);}\n      .pull-quote p{font-family:'Instrument Serif',serif;font-size:1.2rem;font-style:italic;color:var(--black);line-height:1.45;}\n      .story-stat-stack{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:2rem;}\n      @media(min-width:768px){.story-stat-stack{flex-direction:column;gap:0;margin-top:0;}}\n      .story-stat{flex:1;min-width:80px;}\n      @media(min-width:768px){.story-stat{padding:2rem 0;border-bottom:1px solid var(--rule);min-width:unset;} .story-stat:first-child{padding-top:0;} .story-stat:last-child{border-bottom:none;padding-bottom:0;}}\n      .stat-n{font-family:'Anton',sans-serif;font-size:clamp(2.2rem,8vw,4rem);line-height:1;color:var(--teal);}\n      .stat-d{font-family:'Space Mono',monospace;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:.3rem;line-height:1.9;}\n      .fan-band{background:var(--black);padding:2.5rem 1.25rem;border-bottom:3px solid var(--teal);}\n      @media(min-width:768px){.fan-band{padding:4rem 3rem;display:grid;grid-template-columns:1fr auto;gap:4rem;align-items:end;}}\n      .fan-headline{font-family:'Anton',sans-serif;font-size:clamp(2.4rem,9vw,5rem);line-height:.88;text-transform:uppercase;color:var(--bone);letter-spacing:-.01em;margin-bottom:1.5rem;}\n      .fan-headline em{color:var(--teal);font-style:normal;}\n      .fan-body{font-family:'Instrument Serif',serif;font-size:1rem;line-height:1.8;color:rgba(240,235,225,.55);max-width:480px;margin-bottom:2rem;}\n      .fan-link{display:inline-flex;align-items:center;gap:.75rem;font-family:'Space Mono',monospace;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;color:var(--black);background:var(--teal);text-decoration:none;padding:.75rem 1.25rem;transition:background .2s;}\n      .fan-link:hover{background:#9DDBCD;} .fan-link::after{content:' \u2192';}\n      .fan-right{display:none;}\n      @media(min-width:768px){.fan-right{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;}}\n      .fan-big-num{font-family:'Anton',sans-serif;font-size:7rem;line-height:1;color:rgba(240,235,225,.06);letter-spacing:-.02em;text-align:right;}\n      .music-spotlight{background:#F4EBDD;border-bottom:3px solid var(--black);overflow:hidden;}\n      @media(min-width:768px){.music-spotlight{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);}}\n      .music-copy{padding:3rem 1.25rem;display:flex;flex-direction:column;justify-content:center;}\n      @media(min-width:768px){.music-copy{padding:5rem 3rem;border-right:3px solid var(--black);}}\n      .music-kicker{font-family:'Space Mono',monospace;font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#F15A2A;margin-bottom:1.4rem;}\n      .music-title{font-family:'Anton',sans-serif;font-size:clamp(3.7rem,13vw,7.4rem);line-height:.84;letter-spacing:-.015em;text-transform:uppercase;color:var(--black);margin-bottom:1.75rem;}\n      .music-title em{display:block;font-family:'Instrument Serif',serif;font-weight:400;font-size:.68em;line-height:.9;text-transform:none;color:#F15A2A;}\n      .music-dek{font-family:'Instrument Serif',serif;font-size:clamp(1.15rem,2.2vw,1.45rem);line-height:1.5;color:var(--charcoal);max-width:620px;margin-bottom:1.1rem;}\n      .music-proof{font-family:'Space Mono',monospace;font-size:.65rem;line-height:1.8;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);max-width:580px;margin-bottom:2rem;}\n      .music-actions{display:flex;gap:.75rem;align-items:center;flex-wrap:wrap;}\n      .music-cta{display:inline-flex;align-items:center;gap:.7rem;background:var(--black);color:var(--bone);font-family:'Space Mono',monospace;font-size:.7rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;text-decoration:none;padding:.95rem 1.25rem;transition:transform .2s,background .2s;}\n      .music-cta:hover{background:#F15A2A;transform:translateY(-2px);}\n      .music-cta::after{content:'\u2192';font-size:1rem;}\n      .music-listen{font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.11em;text-transform:uppercase;color:var(--black);text-decoration:none;border-bottom:1px solid var(--black);padding:.4rem 0;}\n      .music-art{position:relative;min-height:500px;background:var(--black);display:flex;align-items:center;justify-content:center;padding:3.5rem 1.5rem;overflow:hidden;}\n      @media(min-width:768px){.music-art{min-height:680px;padding:4rem;}}\n      .music-art::before,.music-art::after{content:'';position:absolute;border:1px dashed rgba(244,235,221,.16);border-radius:50%;width:75%;aspect-ratio:1;}\n      .music-art::after{width:53%;}\n      .music-catalog{position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;display:flex;justify-content:space-between;font-family:'Space Mono',monospace;font-size:.55rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(244,235,221,.42);}\n      .music-fan{position:relative;width:min(72vw,370px);aspect-ratio:1;animation:musicFloat 5s ease-in-out infinite;z-index:1;}\n      .music-blade{position:absolute;left:50%;top:50%;width:25%;height:48%;transform-origin:50% 0%;border:3px solid #F4EBDD;border-radius:0 0 42% 42%;background:#F15A2A;}\n      .music-blade:nth-child(1){transform:translate(-50%,0) rotate(0deg);}\n      .music-blade:nth-child(2){transform:translate(-50%,0) rotate(90deg);background:#78C8B5;}\n      .music-blade:nth-child(3){transform:translate(-50%,0) rotate(180deg);background:#F6C94C;}\n      .music-blade:nth-child(4){transform:translate(-50%,0) rotate(270deg);}\n      .music-hub{position:absolute;left:50%;top:50%;width:28%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:#F4EBDD;border:4px solid var(--black);box-shadow:0 0 0 3px #F4EBDD;z-index:2;}\n      .music-hub::after{content:'';position:absolute;inset:31%;border-radius:50%;background:#F15A2A;}\n      .music-album-count{position:absolute;right:1.5rem;bottom:1.4rem;text-align:right;color:#F4EBDD;font-family:'Anton',sans-serif;font-size:clamp(3.8rem,11vw,6rem);line-height:.75;z-index:2;}\n      .music-album-count span{display:block;font-family:'Space Mono',monospace;font-size:.55rem;line-height:1;letter-spacing:.16em;text-transform:uppercase;color:rgba(244,235,221,.48);margin-top:.7rem;}\n      @keyframes musicFloat{0%,100%{transform:rotate(-3deg) scale(1)}50%{transform:rotate(3deg) scale(1.025)}}\n      @media(prefers-reduced-motion:reduce){.music-fan{animation:none;}}\n      .building{border-bottom:3px solid var(--black);}\n      .building-hd{padding:1.75rem 1.25rem;border-bottom:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center;background:var(--black);}\n      @media(min-width:768px){.building-hd{padding:2rem 3rem;}}\n      .building-hd-title{font-family:'Anton',sans-serif;font-size:clamp(1.6rem,6vw,2.8rem);text-transform:uppercase;color:var(--bone);letter-spacing:-.01em;}\n      .building-hd-title em{color:var(--teal);font-style:normal;}\n      .building-hd-num{font-family:'Space Mono',monospace;font-size:.75rem;letter-spacing:.14em;color:rgba(240,235,225,.2);}\n      @media(min-width:768px){.building-cards{display:grid;grid-template-columns:repeat(3,1fr);}}\n      .b-card{padding:1.75rem 1.25rem;border-bottom:1px solid var(--rule);transition:background .2s;display:block;color:inherit;text-decoration:none;}\n      .b-card:last-child{border-bottom:none;}\n      @media(min-width:768px){.b-card{padding:2.5rem 3rem;border-bottom:none;border-right:1px solid var(--rule);} .b-card:last-child{border-right:none;} .b-card:hover{background:var(--teal-dim);}}\n      .b-card-num{font-family:'Anton',sans-serif;font-size:3rem;color:rgba(12,12,10,.06);line-height:1;margin-bottom:.5rem;}\n      .b-card-tag{font-family:'Space Mono',monospace;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);margin-bottom:.6rem;}\n      .b-card-title{font-family:'Anton',sans-serif;font-size:1.5rem;text-transform:uppercase;color:var(--black);margin-bottom:.6rem;}\n      .b-card-desc{font-family:'Instrument Serif',serif;font-size:.9rem;line-height:1.75;color:var(--muted);}\n      .b-card-action{display:inline-block;margin-top:1.25rem;font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--black);border-bottom:1px solid var(--black);padding-bottom:.2rem;}\n      .footer{background:var(--black);padding:2rem 1.25rem;display:flex;flex-direction:column;gap:1.5rem;}\n      @media(min-width:768px){.footer{display:grid;grid-template-columns:1fr 1fr;padding:2.5rem 3rem;align-items:end;}}\n      .footer-name{font-family:'Anton',sans-serif;font-size:1.6rem;text-transform:uppercase;color:var(--bone);}\n      .footer-name span{color:var(--teal);}\n      .footer-sub{font-family:'Space Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.58);margin-top:.35rem;}\n      .footer-right{display:flex;flex-direction:column;gap:.75rem;}\n      @media(min-width:768px){.footer-right{align-items:flex-end;}}\n      .footer-links{list-style:none;display:flex;gap:1.5rem;flex-wrap:wrap;}\n      .footer-links a{font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.58);text-decoration:none;transition:color .2s;}\n      .footer-links a:hover{color:var(--teal);}\n      .footer-copy{font-family:'Space Mono',monospace;font-size:.65rem;letter-spacing:.1em;color:rgba(240,235,225,.48);}\n      .inner-hd{background:var(--black);padding:2rem 1.25rem 1.75rem;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid var(--teal);}\n      @media(min-width:768px){.inner-hd{padding:3rem;}}\n      .inner-title{font-family:'Anton',sans-serif;font-size:clamp(3rem,14vw,7rem);line-height:.88;text-transform:uppercase;color:var(--bone);letter-spacing:-.01em;}\n      .inner-title em{color:var(--teal);font-style:normal;}\n      .inner-meta{font-family:'Space Mono',monospace;font-size:.42rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.25);white-space:nowrap;}\n      .notice{background:var(--teal-dim);border-bottom:1px solid rgba(240,235,225,.2);padding:.6rem 1.25rem;display:flex;align-items:center;gap:.6rem;}\n      @media(min-width:768px){.notice{padding:.6rem 3rem;}}\n      .notice-dot{width:5px;height:5px;border-radius:50%;background:var(--teal);flex-shrink:0;animation:blink 2s infinite;}\n      .notice-txt{font-family:'Space Mono',monospace;font-size:.38rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);}\n      .notice-txt b{color:var(--teal);font-weight:normal;}\n      .post-row{padding:1.5rem 1.25rem;border-bottom:1px solid var(--rule);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background .15s;}\n      .post-row:active{background:var(--teal-dim);}\n      @media(min-width:768px){.post-row{display:grid;grid-template-columns:160px 1fr 2rem;gap:2.5rem;align-items:center;padding:2rem 3rem;} .post-row:hover{background:var(--teal-dim);} .post-row:hover .pr-arrow{color:var(--teal);}}\n      .pr-meta{display:flex;gap:1rem;align-items:center;margin-bottom:.5rem;}\n      @media(min-width:768px){.pr-meta{flex-direction:column;align-items:flex-start;gap:.3rem;margin-bottom:0;}}\n      .pr-date{font-family:'Space Mono',monospace;font-size:.4rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);}\n      .pr-cat{font-family:'Space Mono',monospace;font-size:.38rem;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);}\n      .pr-body{display:flex;flex-direction:column;gap:.4rem;}\n      .pr-title{font-family:'Anton',sans-serif;font-size:1.3rem;text-transform:uppercase;color:var(--black);line-height:1.1;}\n      .pr-excerpt{font-family:'Instrument Serif',serif;font-size:.88rem;line-height:1.65;color:var(--muted);}\n      .pr-arrow{font-size:1rem;color:rgba(12,12,10,.2);transition:color .2s;}\n      .post-back{padding:1rem 1.25rem;border-bottom:1px solid var(--rule);background:var(--black);}\n      @media(min-width:768px){.post-back{padding:1rem 3rem;}}\n      .back-btn{font-family:'Space Mono',monospace;font-size:.42rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.4);background:none;border:none;cursor:pointer;padding:0;transition:color .2s;}\n      .back-btn:hover{color:var(--teal);}\n      .post-body{padding:2rem 1.25rem 3rem;}\n      @media(min-width:768px){.post-body{padding:3.5rem 4rem;max-width:760px;}}\n      .post-meta-row{display:flex;gap:1rem;align-items:center;margin-bottom:1.5rem;}\n      .post-title{font-family:'Anton',sans-serif;font-size:clamp(2rem,9vw,4rem);text-transform:uppercase;color:var(--black);line-height:.92;letter-spacing:-.01em;margin-bottom:2rem;}\n      .post-copy{font-family:'Instrument Serif',serif;font-size:1rem;line-height:2;color:var(--charcoal);}\n      .post-copy p+p{margin-top:1.5rem;}\n      .gallery-filters{padding:1rem 1.25rem;border-bottom:1px solid var(--rule);display:flex;align-items:center;gap:.5rem;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;background:var(--black);}\n      .gallery-filters::-webkit-scrollbar{display:none;}\n      @media(min-width:768px){.gallery-filters{padding:1rem 3rem;}}\n      .f-label{font-family:'Space Mono',monospace;font-size:.4rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.3);white-space:nowrap;margin-right:.25rem;}\n      .f-pill{font-family:'Space Mono',monospace;font-size:.38rem;letter-spacing:.12em;text-transform:uppercase;padding:.38rem .8rem;border:1px solid rgba(240,235,225,.12);background:none;color:rgba(240,235,225,.35);cursor:pointer;white-space:nowrap;transition:all .15s;}\n      .f-pill.active{border-color:var(--teal);color:var(--teal);background:rgba(240,235,225,.1);}\n      .photo-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--black);}\n      @media(min-width:768px){.photo-grid{grid-template-columns:repeat(3,1fr);}}\n      .photo-cell{aspect-ratio:1;background:var(--charcoal);position:relative;overflow:hidden;cursor:pointer;}\n      @media(min-width:768px){.photo-cell{aspect-ratio:4/3;} .photo-cell:hover .photo-inner{transform:scale(1.04);} .photo-cap{opacity:0;transform:translateY(4px);transition:all .25s;} .photo-cell:hover .photo-cap{opacity:1;transform:none;}}\n      .photo-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;transition:transform .4s ease;}\n      .photo-ph{font-family:'Space Mono',monospace;font-size:.35rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,235,225,.15);text-align:center;}\n      .photo-cap{position:absolute;bottom:0;left:0;right:0;padding:.75rem .9rem;background:linear-gradient(to top,rgba(12,12,10,.85) 0%,transparent 100%);opacity:1;}\n      .photo-cap-label{font-family:'Anton',sans-serif;font-size:.9rem;text-transform:uppercase;color:var(--bone);line-height:1;}\n      .photo-cap-sub{font-family:'Space Mono',monospace;font-size:.32rem;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-top:.2rem;}\n      .reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}\n      .reveal.visible{opacity:1;transform:none;}\n      @keyframes fadeIn{from{opacity:0}to{opacity:1}}\n      @keyframes riseIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\n      @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}\n      @keyframes scanLine{0%{left:-100%}100%{left:100%}}\n      @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n      @media(prefers-reduced-motion:reduce){\n        html{scroll-behavior:auto;}\n        .hero-top,.hero-name-block,.hero-bottom,.music-fan,.marquee-track,.hero-scroll-line::after,.notice-dot{animation:none!important;opacity:1!important;transform:none!important;}\n        .reveal{opacity:1!important;transform:none!important;transition:none!important;}\n      }\n    \n.photo-block{margin-bottom:2rem;}@media(min-width:768px){.photo-block{margin-bottom:2.5rem;}}.photo-portrait{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:center top;display:block;border:3px solid var(--black);}\n      ";
css += "\n@media(max-width:767px){.photo-portrait{aspect-ratio:4/3;object-position:center 14%;}}";
function useReveal() {
  useEffect(function () {
    var obs = new IntersectionObserver(function (es) {
      return es.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, {
      threshold: .08
    });
    setTimeout(function () {
      return document.querySelectorAll('.reveal').forEach(function (el) {
        return obs.observe(el);
      });
    }, 60);
    return function () {
      return obs.disconnect();
    };
  }, []);
}
var MARQUEE_TEXT = ["Nathan Frampton", "Fanimation", "Lightovation", "Zionsville", "Ceiling Fan Music"];
var ARTICLES = [{
  n: "01",
  tag: "Ceiling Fans · May 2026",
  title: "Why Your Hotel Room Needs a Ceiling Fan",
  desc: "Why hotels keep overlooking one of the simplest tools for better sleep, comfort and lower energy use.",
  href: "https://www.linkedin.com/pulse/why-your-hotel-room-needs-ceiling-fan-nathan-frampton-iuauf?trk=public_post"
}, {
  n: "02",
  tag: "Supply Chains · April 2026",
  title: "What Hormuz Just Taught Us",
  desc: "An operator’s view of energy independence, critical infrastructure and the cost of supply-chain exposure.",
  href: "https://www.linkedin.com/pulse/what-hormuz-just-taught-us-nathan-frampton-yyujc?trk=public_post"
}, {
  n: "03",
  tag: "Global Trade · November 2025",
  title: "The Power of Free Trade",
  desc: "What Hong Kong’s history says about open markets, clear rules and economic opportunity.",
  href: "https://www.linkedin.com/pulse/power-free-trade-how-hong-kong-proved-point-nathan-frampton-zzhpc?trk=public_post"
}];
var Writing = function Writing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "building",
    id: "writing",
    "aria-labelledby": "writing-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "building-hd"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "building-hd-title",
    id: "writing-title"
  }, "Selected ", /*#__PURE__*/React.createElement("em", null, "writing.")), /*#__PURE__*/React.createElement("div", {
    className: "building-hd-num"
  }, "03 / LinkedIn")), /*#__PURE__*/React.createElement("div", {
    className: "building-cards"
  }, ARTICLES.map(function (a) {
    return /*#__PURE__*/React.createElement("a", {
      className: "b-card reveal",
      href: a.href,
      target: "_blank",
      rel: "noopener noreferrer",
      key: a.n
    }, /*#__PURE__*/React.createElement("div", {
      className: "b-card-num",
      "aria-hidden": "true"
    }, a.n), /*#__PURE__*/React.createElement("div", {
      className: "b-card-tag"
    }, a.tag), /*#__PURE__*/React.createElement("h3", {
      className: "b-card-title"
    }, a.title), /*#__PURE__*/React.createElement("p", {
      className: "b-card-desc"
    }, a.desc), /*#__PURE__*/React.createElement("span", {
      className: "b-card-action"
    }, "Read on LinkedIn \u2192"));
  })));
};
var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-name"
  }, "Nathan ", /*#__PURE__*/React.createElement("span", null, "Frampton")), /*#__PURE__*/React.createElement("div", {
    className: "footer-sub"
  }, "Central Indiana \xB7 President & CEO \xB7 Fanimation")), /*#__PURE__*/React.createElement("div", {
    className: "footer-right"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:nathan@nathanframpton.com"
  }, "Email")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#writing"
  }, "Writing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/music/"
  }, "Music")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.fanimation.com",
    target: "_blank",
    rel: "noreferrer"
  }, "Fanimation")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/nathanframpton",
    target: "_blank",
    rel: "noreferrer"
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-copy"
  }, "\xA9 2026 Nathan Frampton")));
};
var MusicSpotlight = function MusicSpotlight() {
  return /*#__PURE__*/React.createElement("section", {
    className: "music-spotlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "music-copy reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "music-kicker"
  }, "\xA7 04 \u2014 Music"), /*#__PURE__*/React.createElement("h2", {
    className: "music-title"
  }, "Ceiling fan", /*#__PURE__*/React.createElement("em", null, "music.")), /*#__PURE__*/React.createElement("p", {
    className: "music-dek"
  }, "Four albums in 2026. All four are about ceiling fans."), /*#__PURE__*/React.createElement("p", {
    className: "music-proof"
  }, "Rock, pop, funk, cumbia and slow jams."), /*#__PURE__*/React.createElement("div", {
    className: "music-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "music-cta",
    href: "/music/"
  }, "Explore the music"), /*#__PURE__*/React.createElement("a", {
    className: "music-listen",
    href: "https://open.spotify.com/artist/6mdg7lW5KmhtJJPmtvrVoT",
    target: "_blank",
    rel: "noreferrer"
  }, "Listen on Spotify"))), /*#__PURE__*/React.createElement("div", {
    className: "music-art reveal",
    "aria-label": "Four colorful ceiling fan blades representing four albums"
  }, /*#__PURE__*/React.createElement("div", {
    className: "music-catalog"
  }, /*#__PURE__*/React.createElement("span", null, "Nathan Frampton / 2026"), /*#__PURE__*/React.createElement("span", null, "Audio airflow system")), /*#__PURE__*/React.createElement("div", {
    className: "music-fan",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "music-blade"
  }), /*#__PURE__*/React.createElement("span", {
    className: "music-blade"
  }), /*#__PURE__*/React.createElement("span", {
    className: "music-blade"
  }), /*#__PURE__*/React.createElement("span", {
    className: "music-blade"
  }), /*#__PURE__*/React.createElement("span", {
    className: "music-hub"
  })), /*#__PURE__*/React.createElement("div", {
    className: "music-album-count"
  }, "04", /*#__PURE__*/React.createElement("span", null, "Albums / streaming everywhere"))));
};
var HomePage = function HomePage() {
  useReveal();
  var marquee = [].concat(MARQUEE_TEXT, MARQUEE_TEXT);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg",
    "aria-hidden": "true"
  }, "F"), /*#__PURE__*/React.createElement("div", {
    className: "hero-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-tag-pill"
  }, "nathanframpton.com"), /*#__PURE__*/React.createElement("div", {
    className: "hero-year"
  }, "Indiana")), /*#__PURE__*/React.createElement("div", {
    className: "hero-name-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-fname"
  }, "Nathan"), /*#__PURE__*/React.createElement("span", {
    className: "hero-lname"
  }, "Frampton")), /*#__PURE__*/React.createElement("div", {
    className: "hero-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-roles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-role"
  }, "President & CEO \xB7 Fanimation"), /*#__PURE__*/React.createElement("div", {
    className: "hero-role"
  }, "Second-generation fan maker \xB7 Makes music about them")), /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll-hint"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll-line"
  }), "Scroll"))), /*#__PURE__*/React.createElement("div", {
    className: "marquee-strip",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, marquee.map(function (t, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "marquee-text"
    }, t, /*#__PURE__*/React.createElement("span", {
      className: "marquee-sep"
    }, "\xB7"));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-left reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "\xA7 01 \u2014 Origin"), /*#__PURE__*/React.createElement("h2", {
    className: "big-headline"
  }, "Family", /*#__PURE__*/React.createElement("br", null), "business.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Since"), /*#__PURE__*/React.createElement("br", null), "1984."), /*#__PURE__*/React.createElement("div", {
    className: "body-copy"
  }, /*#__PURE__*/React.createElement("p", null, "In 1984, my father Tom left Casablanca Fan Company and started Fanimation in his Pasadena garage. Several designs he bought back from Casablanca became our first products."), /*#__PURE__*/React.createElement("p", null, "I joined in 1990 at age 12. Today I serve as President & CEO from our Zionsville, Indiana, headquarters, which also houses an ", /*#__PURE__*/React.createElement("strong", null, "antique ceiling fan museum"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "story-right reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-block"
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO_URL,
    alt: "Nathan Frampton",
    className: "photo-portrait"
  })), /*#__PURE__*/React.createElement("div", {
    className: "story-stat-stack"
  }, [{
    n: "1984",
    d: "Fanimation founded"
  }, {
    n: "1990",
    d: "Joined the family business at age 12"
  }, {
    n: "TODAY",
    d: "President & CEO"
  }].map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "story-stat",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-n"
    }, s.n), /*#__PURE__*/React.createElement("div", {
      className: "stat-d"
    }, s.d.split("\n").map(function (l, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, l, /*#__PURE__*/React.createElement("br", null));
    })));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fan-band reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "fan-headline"
  }, "Fanimation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Ceiling fans"), /*#__PURE__*/React.createElement("br", null), "since 1984."), /*#__PURE__*/React.createElement("p", {
    className: "fan-body"
  }, "Fanimation has designed ceiling fans since 1984. Today I lead the company from its headquarters in Zionsville, Indiana."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.fanimation.com",
    className: "fan-link",
    target: "_blank",
    rel: "noreferrer"
  }, "Visit Fanimation")), /*#__PURE__*/React.createElement("div", {
    className: "fan-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fan-big-num"
  }, "EST."), /*#__PURE__*/React.createElement("div", {
    className: "fan-big-num",
    style: {
      color: "rgba(240,235,225,0.12)"
    }
  }, "1984"))), /*#__PURE__*/React.createElement("section", {
    className: "story",
    style: {
      borderBottom: "3px solid var(--black)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-left reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "\xA7 02 \u2014 Beyond the Company"), /*#__PURE__*/React.createElement("h2", {
    className: "big-headline"
  }, "Beyond", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Fanimation.")), /*#__PURE__*/React.createElement("div", {
    className: "body-copy"
  }, /*#__PURE__*/React.createElement("p", null, "I served on the board of the American Lighting Association and have spent more than a decade on its Government Affairs Committee, where I continue to serve. I also serve on the ALA Nominating Committee."), /*#__PURE__*/React.createElement("p", null, "I chaired the Lighting Board of Governors at Dallas Market Center, where I led the rebranding of its residential lighting market as ", /*#__PURE__*/React.createElement("strong", null, "Lightovation"), ". I remain a member of that board."), /*#__PURE__*/React.createElement("p", null, "In 2014, I chaired Citizens for a Better Zionsville, the campaign to reorganize Zionsville and Perry Township and establish an elected mayor. The measure earned 60% voter approval, created the first mayor in Zionsville's history, and was later upheld by the Indiana Supreme Court."), /*#__PURE__*/React.createElement("p", null, "I've also served on the Boone County Economic Development Corporation, the Boone County Convention & Visitors Bureau, the Zionsville Redevelopment Commission, and the Zionsville Chamber board."))), /*#__PURE__*/React.createElement("div", {
    className: "story-right reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-stat-stack"
  }, [{
    n: "2015",
    d: "Led the Lightovation rebrand"
  }, {
    n: "2014",
    d: "Chaired the Zionsville reorganization campaign"
  }, {
    n: "UPHELD",
    d: "Reorganization affirmed by the Indiana Supreme Court"
  }].map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "story-stat",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-n"
    }, s.n), /*#__PURE__*/React.createElement("div", {
      className: "stat-d"
    }, s.d.split("\n").map(function (l, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, l, /*#__PURE__*/React.createElement("br", null));
    })));
  })))), /*#__PURE__*/React.createElement(Writing, null), /*#__PURE__*/React.createElement(MusicSpotlight, null), /*#__PURE__*/React.createElement(Footer, null));
};
var NAV = [{
  key: "home",
  label: "Home",
  icon: "\u2302",
  href: "/"
}, {
  key: "music",
  label: "Music",
  icon: "\u266B",
  href: "/music/"
}];
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    className: "mh"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mh-name",
    href: "/",
    "aria-label": "Nathan Frampton home"
  }, "Nathan ", /*#__PURE__*/React.createElement("span", null, "Frampton"))), /*#__PURE__*/React.createElement("nav", {
    className: "dn",
    "aria-label": "Primary navigation"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dn-logo",
    href: "/",
    "aria-label": "Nathan Frampton home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M4%204h4.5v16.5L18%204h4.5v24H18V11.5L8.5%2028H4V4zm18.5%200H27v11h-4.5V4z%22%20fill%3D%22%2523F0EBE1%22%2F%3E%3C%2Fsvg%3E",
    alt: "",
    style: {
      width: "28px",
      height: "28px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dn-links"
  }, NAV.map(function (l) {
    return /*#__PURE__*/React.createElement("a", {
      key: l.key,
      className: "dn-btn" + (l.key === "home" ? " active" : ""),
      href: l.href,
      "aria-current": l.key === "home" ? "page" : undefined
    }, l.label);
  }))), /*#__PURE__*/React.createElement(HomePage, null), /*#__PURE__*/React.createElement("nav", {
    className: "tb",
    "aria-label": "Mobile navigation"
  }, NAV.map(function (l) {
    return /*#__PURE__*/React.createElement("a", {
      key: l.key,
      className: "tb-btn" + (l.key === "home" ? " active" : ""),
      href: l.href,
      "aria-current": l.key === "home" ? "page" : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "tb-icon",
      "aria-hidden": "true"
    }, l.icon), /*#__PURE__*/React.createElement("span", {
      className: "tb-label"
    }, l.label));
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render( /*#__PURE__*/React.createElement(App, null));
