"use client";

import React from 'react';

export default function MVWave2Layout() {
  function cabinClick(cabinNumber: string) {
    // Room click handler - alert removed
  }

  return (
    <div className="mv-wave2-layout" style={{ width: '100%' }}>
      <style>{`
        :root {
          --infinity-royal: #0f3075;
          --lounge-peach: #fbc79a;
          --captain-room: #e6b89c;
          --vip-triple: #fbc79a;
          --infinity-presidential: #b199c9;
          --panorama-king: #00b0f0;
          --panorama-deluxe: #7ec0ee;
          --panorama-triple: #d9e1f2;
          --panorama-quadruple: #ffff00;
          --lobby-bg: #ffffff;
          --text-dark: #000000;
        }

        .mv-wave2-layout { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .mv-wave2-layout h1 { color: #000; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .deck-title { font-size: 1rem; font-weight: bold; margin: 10px 0 6px 0; text-align: center; width: 100%; border-bottom: 2px solid #ccc; padding-bottom: 5px; }
        .deck-container { display: grid; width: 100%; grid-gap: 3px; background-color: #7f8c8d; padding: 5px; margin-bottom: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
        .cabin { padding: 10px 5px; text-align: center; font-size: 0.75rem; font-weight: 600; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; transition: transform 0.15s, filter 0.15s; color: var(--text-dark); min-height: 48px; border: 1px solid rgba(0,0,0,0.08); }
        .cabin:hover { transform: scale(1.02); filter: brightness(0.95); z-index: 10; }
        .cabin span { font-weight: 800; font-size: 0.85rem; margin-bottom: 2px; }

        /* Top Floor Layout */
        .top-floor { grid-template-columns: 1fr 4fr 1fr; }
        .royal-suites { display: grid; grid-template-rows: 1fr 1fr; grid-gap: 3px; }
        .lounge { background-color: var(--lounge-peach); font-size: 1.05rem; }
        .captain { background-color: var(--captain-room); font-size: 0.95rem; }

        /* Second Floor Layout */
        .second-floor { grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(2, 1fr); }
        .lobby-block { grid-row: 1 / span 2; grid-column: 2; background-color: var(--lobby-bg); font-size: 1.05rem; cursor: default; }
        .lobby-block:hover { transform: none; filter: none; }

        /* First Floor Layout */
        .first-floor { grid-template-columns: repeat(8, 1fr); }

        /* Cabin Colors */
        .c-royal { background-color: var(--infinity-royal); color: #fff; }
        .c-presidential { background-color: var(--infinity-presidential); }
        .c-vip-triple { background-color: var(--vip-triple); }
        .c-king { background-color: var(--panorama-king); color: #fff; }
        .c-deluxe { background-color: var(--panorama-deluxe); }
        .c-triple { background-color: var(--panorama-triple); }
        .c-quad { background-color: var(--panorama-quadruple); }

        @media (min-width: 640px) {
          .deck-container { padding: 8px; }
          .cabin { min-height: 64px; }
        }
      `}</style>

      <div className="deck-title">Top Floor ➔</div>
      <div className="deck-container top-floor" style={{ gridTemplateColumns: '1fr 4fr 1fr' }}>
        <div className="royal-suites">
          <div className="cabin c-royal" onClick={() => cabinClick('401')}><span>401</span>Infinity Royal Suite</div>
          <div className="cabin c-royal" onClick={() => cabinClick('402')}><span>402</span>Infinity Royal Suite</div>
        </div>
        <div className="cabin lounge" onClick={() => cabinClick('Lounge')}>Lounge / Conference Room</div>
        <div className="cabin captain" onClick={() => cabinClick('Captain Room')}>Captain Room</div>
      </div>

      <div className="deck-title">Second Floor ➔</div>
      <div className="deck-container second-floor" style={{ gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(2,1fr)' }}>
        <div className="cabin c-vip-triple" onClick={() => cabinClick('01')}><span>01</span>VIP-Panorama Triple Suite</div>
        <div className="cabin lobby-block">Lobby</div>
        <div className="cabin c-king" onClick={() => cabinClick('312')}><span>312</span>Panorama King Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('311')}><span>311</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('310')}><span>310</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('309')}><span>309</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('308')}><span>308</span>Panorama Deluxe Suite</div>
        <div className="cabin c-triple" onClick={() => cabinClick('307')}><span>307</span>Panorama Triple Suite</div>

        <div className="cabin c-presidential" onClick={() => cabinClick('02')}><span>02</span>Infinity Presidential Suite</div>
        <div className="cabin c-king" onClick={() => cabinClick('301')}><span>301</span>Panorama King Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('302')}><span>302</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('303')}><span>303</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('304')}><span>304</span>Panorama Deluxe Suite</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('305')}><span>305</span>Panorama Deluxe Suite</div>
        <div className="cabin c-quad" onClick={() => cabinClick('306')}><span>306</span>Panorama Quadruple Duplex Suite</div>
      </div>

      <div className="deck-title">First Floor ➔</div>
      <div className="deck-container first-floor" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
        <div className="cabin c-deluxe" onClick={() => cabinClick('216')}><span>216</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('215')}><span>215</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('214')}><span>214</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('213')}><span>213</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('212')}><span>212</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('211')}><span>211</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('210')}><span>210</span>Panorama Deluxe</div>
        <div className="cabin c-triple" onClick={() => cabinClick('209')}><span>209</span>Panorama Triple</div>

        <div className="cabin c-deluxe" onClick={() => cabinClick('201')}><span>201</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('202')}><span>202</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('203')}><span>203</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('204')}><span>204</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('205')}><span>205</span>Panorama Deluxe</div>
        <div className="cabin c-deluxe" onClick={() => cabinClick('206')}><span>206</span>Panorama Deluxe</div>
        <div className="cabin c-quad" onClick={() => cabinClick('207')}><span>207</span>Panorama Quadruple</div>
        <div className="cabin c-triple" onClick={() => cabinClick('208')}><span>208</span>Panorama Triple</div>
      </div>
    </div>
  );
}
