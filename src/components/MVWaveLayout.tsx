'use client';

import React, { useState, useRef } from 'react';

interface RoomData {
  name: string;
  beds: string;
  type: string;
}

interface Tooltip {
  visible: boolean;
  x: number;
  y: number;
  data: RoomData | null;
}

const shipDatabase: Record<string, RoomData> = {
  Conference: { name: 'Conference Room', beds: 'N/A', type: 'Utility Space' },
  WheelHouse: { name: 'Wheel House / Owners Room', beds: '1 Executive Couple Bed', type: 'Special Suite' },
  '201': { name: 'Cabin 201', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '202': { name: 'Cabin 202', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '203': { name: 'Cabin 203', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '204': { name: 'Cabin 204', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '205': { name: 'Cabin 205', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '206': { name: 'Cabin 206', beds: 'Single Bed', type: 'Single Bed Room' },
  '207': { name: 'Cabin 207', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '208': { name: 'Cabin 208', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '209': { name: 'Cabin 209', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '210': { name: 'Cabin 210', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '211': { name: 'Cabin 211', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '212': { name: 'Cabin 212', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '213': { name: 'Cabin 213', beds: 'Single Bed', type: 'Single Bed Room' },
  '214': { name: 'Cabin 214', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '215': { name: 'Cabin 215', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '216': { name: 'Cabin 216', beds: '3 Bed Room', type: 'Bunk Bed Room' },
  '217': { name: 'Cabin 217', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '218': { name: 'Cabin 218', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '101': { name: 'Cabin 101', beds: '4 Bed Room', type: 'Deluxe Family' },
  '102': { name: 'Cabin 102', beds: '4 Bed Room', type: 'Deluxe Family' },
  '103': { name: 'Cabin 103', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '104': { name: 'Cabin 104', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '105': { name: 'Cabin 105', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '106': { name: 'Cabin 106', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '107': { name: 'Cabin 107', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '108': { name: 'Cabin 108', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '109': { name: 'Cabin 109', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '110': { name: 'Cabin 110', beds: 'Couple Bed', type: 'Deluxe Couple' },
  '111': { name: 'Cabin 111', beds: '4 Bed Room', type: 'Deluxe Family' },
  '112': { name: 'Cabin 112', beds: '4 Bed Room', type: 'Deluxe Family' }
};

export default function MVWaveLayout() {
  const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, data: null });
  const tooltipRef = useRef<HTMLDivElement>(null);

  function handleRoomHover(e: React.MouseEvent<HTMLDivElement>, roomId: string) {
    const roomData = shipDatabase[roomId];
    if (roomData) {
      setTooltip({
        visible: true,
        x: e.pageX + 15,
        y: e.pageY + 15,
        data: roomData
      });
    }
  }

  function handleRoomLeave() {
    setTooltip({ visible: false, x: 0, y: 0, data: null });
  }

  function roomClick(id: string) {
    const cabin = shipDatabase[id];
    if (cabin) {
      // Room click handler - alert removed
    }
  }

  return (
    <div className="mv-wave-layout" style={{ width: '100%' }}>
      <style>{`
        :root {
          --bunk-bed-blue: #3b5998;
          --single-bed-pink: #d81b60;
          --deluxe-couple-red: #cc0000;
          --deluxe-family-green: #007e33;
          --guard-yellow: #ffea00;
          --utility-gray: #e0e0e0;
          --open-deck: #e8f5e9;
          --pool-blue: #0099cc;
          --conference-peach: #ffe0b2;
          --text-dark: #212121;
          --border-color: #9e9e9e;
        }

        .mv-wave-layout { font-family: 'Segoe UI', Arial, sans-serif; }
        .mv-wave-layout h1 { margin-bottom: 5px; color: #1a237e; text-transform: uppercase; }
        .subtitle { margin-top: 0; margin-bottom: 20px; color: #555; font-size: 1rem; }

        .deck-title { font-size: 1.1rem; font-weight: bold; margin: 16px 0 8px 0; text-transform: uppercase; width: 100%; border-left: 4px solid #1a237e; padding-left: 8px; }
        .deck-container { display: grid; width: 100%; background-color: #ffffff; border: 2px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden; margin-bottom: 12px; }

        .block { padding: 10px 4px; text-align: center; font-size: 0.7rem; font-weight: 600; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid var(--border-color); color: var(--text-dark); min-height: 50px; box-sizing: border-box; }
        .room { cursor: pointer; transition: transform 0.15s, filter 0.15s; }
        .room:hover { transform: scale(1.01); filter: brightness(0.9); z-index: 5; }
        .room span { font-weight: 800; font-size: 0.8rem; margin-bottom: 2px; display: block; }

        .top-floor { grid-template-columns: 1.5fr 2.5fr 4fr 1.5fr; }
        .pool-deck { background-color: var(--open-deck); display: flex; flex-direction: column; gap: 4px; justify-content: center; }
        .pool { background-color: var(--pool-blue); color: white; padding: 8px; width: 70%; border-radius: 3px; margin: auto; font-size: 0.75rem; font-weight: 700; }
        .conference-section { background-color: var(--conference-peach); }
        .wheel-house { background-color: #b0bec5; }

        .second-floor { grid-template-columns: 2fr repeat(9, 1fr) 1.5fr; }
        .toilet-block { grid-row: span 2; background-color: var(--utility-gray); font-size: 0.7rem; }
        .front-deck-2 { grid-row: span 2; background-color: var(--open-deck); font-size: 0.75rem; }

        .first-floor { grid-template-columns: 1.5fr 1.2fr repeat(7, 1fr) 1.8fr; grid-template-rows: repeat(2, 1fr); }
        .kitchen-section { grid-row: 1 / span 2; grid-column: 1; background-color: var(--utility-gray); display: grid; grid-template-rows: 1fr 1fr; }
        .store-section { grid-row: 1 / span 2; grid-column: 2; background-color: var(--utility-gray); display: grid; grid-template-rows: 1fr 1fr; }
        .playground { grid-row: 1 / span 2; grid-column: 10; background-color: var(--open-deck); font-size: 0.85rem; }

        .bg-bunk { background-color: var(--bunk-bed-blue); color: #fff; }
        .bg-single { background-color: var(--single-bed-pink); color: #fff; }
        .bg-couple { background-color: var(--deluxe-couple-red); color: #fff; }
        .bg-family { background-color: var(--deluxe-family-green); color: #fff; }
        .bg-guard { background-color: var(--guard-yellow); }
        .bg-utility { background-color: var(--utility-gray); }

        #global-tooltip { position: fixed; display: none; background: rgba(33, 33, 33, 0.95); color: #fff; padding: 10px 12px; border-radius: 5px; font-size: 0.75rem; line-height: 1.4; z-index: 9999; pointer-events: none; box-shadow: 0 4px 15px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.15); min-width: 140px; }
        #global-tooltip .tip-title { font-weight: 800; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 3px; margin-bottom: 4px; color: var(--conference-peach); }

        @media (min-width: 640px) {
          .block { min-height: 60px; }
        }
      `}</style>

      <div ref={tooltipRef} id="global-tooltip" style={{ display: tooltip.visible ? 'block' : 'none', left: `${tooltip.x}px`, top: `${tooltip.y}px` }}>
        {tooltip.data && (
          <>
            <div className="tip-title">{tooltip.data.name}</div>
            <strong>Class:</strong> {tooltip.data.type}
            <br />
            <strong>Beds:</strong> {tooltip.data.beds}
          </>
        )}
      </div>

      {/* TOP FLOOR */}
      <div className="deck-title">Top Floor</div>
      <div className="deck-container top-floor">
        <div className="block bg-utility">Stairs / Deck Area</div>
        <div className="block pool-deck">
          <div>Deck Space</div>
          <div className="pool">SWIMMING POOL</div>
          <div>Deck Space</div>
        </div>
        <div className="block room conference-section" data-room="Conference" onMouseMove={(e) => handleRoomHover(e, 'Conference')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('Conference')}>
          <span>CONFERENCE ROOM</span>
        </div>
        <div className="block room wheel-house" data-room="WheelHouse" onMouseMove={(e) => handleRoomHover(e, 'WheelHouse')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('WheelHouse')}>
          <span>WHEEL HOUSE</span>Owners Room
        </div>
      </div>

      {/* SECOND FLOOR */}
      <div className="deck-title">Second Floor</div>
      <div className="deck-container second-floor">
        <div className="block toilet-block">TOILETS &<br />BATHROOMS</div>

        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '210')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('210')}><span>210</span>Bunk Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '211')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('211')}><span>211</span>Bunk Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '212')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('212')}><span>212</span>Bunk Bed</div>
        <div className="block room bg-single" onMouseMove={(e) => handleRoomHover(e, '213')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('213')}><span>213</span>Single Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '214')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('214')}><span>214</span>Bunk Bed</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '215')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('215')}><span>215</span>Deluxe Couple</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '216')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('216')}><span>216</span>Bunk Bed</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '217')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('217')}><span>217</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '218')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('218')}><span>218</span>Deluxe Couple</div>

        <div className="block front-deck-2">Front Balcony /<br />Stairs</div>

        {/* Row 2 */}
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '209')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('209')}><span>209</span>Deluxe Couple</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '208')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('208')}><span>208</span>Bunk Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '207')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('207')}><span>207</span>Bunk Bed</div>
        <div className="block room bg-single" onMouseMove={(e) => handleRoomHover(e, '206')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('206')}><span>206</span>Single Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '205')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('205')}><span>205</span>Bunk Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '204')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('204')}><span>204</span>Bunk Bed</div>
        <div className="block room bg-bunk" onMouseMove={(e) => handleRoomHover(e, '203')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('203')}><span>203</span>Bunk Bed</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '202')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('202')}><span>202</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '201')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('201')}><span>201</span>Deluxe Couple</div>
      </div>

      {/* FIRST FLOOR */}
      <div className="deck-title">First Floor</div>
      <div className="deck-container first-floor">
        {/* ROW 1 */}
        <div className="kitchen-section"><div className="block">Cooker</div><div className="block">Kitchen Area</div></div>
        <div className="store-section"><div className="block">Store</div><div className="block">Cabin Acc. Store</div></div>

        {/* Left & Center Rooms (Row 1) */}
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '107')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('107')}><span>107</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '108')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('108')}><span>108</span>Deluxe Couple</div>
        <div className="block bg-guard">Guard Room</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '109')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('109')}><span>109</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '110')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('110')}><span>110</span>Deluxe Couple</div>

        {/* Deluxe Family Rooms (Row 1) */}
        <div className="block room bg-family" onMouseMove={(e) => handleRoomHover(e, '111')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('111')}><span>111</span>Deluxe Family</div>
        <div className="block room bg-family" onMouseMove={(e) => handleRoomHover(e, '112')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('112')}><span>112</span>Deluxe Family</div>

        {/* Far Right Object spanning both rows */}
        <div className="block playground">Play Ground</div>

        {/* ROW 2 */}
        {/* Left & Center Rooms (Row 2) */}
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '105')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('105')}><span>105</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '106')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('106')}><span>106</span>Deluxe Couple</div>
        <div className="block bg-guard" style={{ fontSize: '0.65rem' }}>Doctors Point &<br />Massage Chair</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '104')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('104')}><span>104</span>Deluxe Couple</div>
        <div className="block room bg-couple" onMouseMove={(e) => handleRoomHover(e, '103')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('103')}><span>103</span>Deluxe Couple</div>

        {/* Deluxe Family Rooms (Row 2) */}
        <div className="block room bg-family" onMouseMove={(e) => handleRoomHover(e, '102')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('102')}><span>102</span>Deluxe Family</div>
        <div className="block room bg-family" onMouseMove={(e) => handleRoomHover(e, '101')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('101')}><span>101</span>Deluxe Family</div>
      </div>
    </div>
  );
}
