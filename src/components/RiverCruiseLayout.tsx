'use client';

import React, { useState, useRef } from 'react';

interface RoomData {
  name: string;
  capacity: string;
  beds: string;
  amenities: string;
}

interface Tooltip {
  visible: boolean;
  x: number;
  y: number;
  data: RoomData | null;
}

const roomSpecs: Record<string, RoomData> = {
  '212': { name: 'Room 212', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '207': { name: 'Room 207', capacity: '4 Persons (2+2)', beds: 'Deluxe Family Bed', amenities: 'Attached Bath' },
  '200': { name: 'Room 200', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '209': { name: 'Room 209', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '210': { name: 'Room 210', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '211': { name: 'Room 211', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '206': { name: 'Room 206', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '205': { name: 'Room 205', capacity: '4 Persons (2+2)', beds: 'Deluxe Family Bed', amenities: 'Attached Bath' },
  '204': { name: 'Room 204', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '202': { name: 'Room 202', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '203': { name: 'Room 203', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '201': { name: 'Room 201', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '307': { name: 'Room 307', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '308': { name: 'Room 308', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '309': { name: 'Room 309', capacity: '4 Persons (2+2)', beds: 'Deluxe Family Bed', amenities: 'Attached Bath' },
  '310': { name: 'Room 310', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '311': { name: 'Room 311', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '312': { name: 'Room 312', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '306': { name: 'Room 306', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '305': { name: 'Room 305', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '304': { name: 'Room 304', capacity: '4 Persons (2+2)', beds: 'Deluxe Family Bed', amenities: 'Attached Bath' },
  '303': { name: 'Room 303', capacity: '3 Persons (2+1)', beds: 'Bunk Bed System', amenities: 'Attached Bath' },
  '302': { name: 'Room 302', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' },
  '301': { name: 'Room 301', capacity: '2 Persons', beds: 'Deluxe Couple Bed', amenities: 'Attached Bath' }
};

export default function RiverCruiseLayout() {
  const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, data: null });
  const tooltipRef = useRef<HTMLDivElement>(null);

  function handleRoomHover(e: React.MouseEvent<HTMLDivElement>, roomId: string) {
    const roomData = roomSpecs[roomId];
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
    const cabin = roomSpecs[id];
    if (cabin) {
      // Room click handler - alert removed
    }
  }

  return (
    <div className="river-cruise-layout" style={{ width: '100%' }}>
      <style>{`
        :root {
          --green-cabin: #2e7d32;
          --blue-cabin: #3949ab;
          --magenta-cabin: #c2185b;
          --library-purple: #1a237e;
          --wheelhouse-plum: #880e4f;
          --kitchen-yellow: #fbc02d;
          --utility-gray: #e0e0e0;
          --white-space: #ffffff;
          --text-light: #ffffff;
          --text-dark: #212121;
          --border-ship: #1b5e20;
        }

        .river-cruise-layout { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

        .deck-wrapper { width: 100%; margin-bottom: 28px; position: relative; }
        .deck-header { font-size: 1.05rem; font-weight: bold; color: #212121; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ccc; padding-bottom: 4px; }
        .deck-info-badge { font-size: 0.85rem; background-color: #424242; color: #fff; padding: 2px 10px; border-radius: 12px; }

        .deck-hull { display: grid; background-color: var(--white-space); border: 4px solid var(--border-ship); border-radius: 8px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); overflow: hidden; padding: 8px; box-sizing: border-box; }

        .grid-cell { border: 1px solid #757575; padding: 8px 3px; text-align: center; font-size: 0.65rem; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 70px; box-sizing: border-box; line-height: 1.2; }

        .clickable-cabin { cursor: pointer; transition: transform 0.15s ease, filter 0.15s ease; }
        .clickable-cabin:hover { transform: scale(1.02); filter: brightness(0.9); z-index: 10; }
        .grid-cell span { font-size: 0.75rem; font-weight: 800; display: block; margin-bottom: 2px; }

        .floor-1st { grid-template-columns: 2.2fr repeat(6, 1fr); grid-gap: 4px; }
        .library-block { grid-row: span 2; background-color: var(--library-purple); color: var(--text-light); font-size: 1rem; }

        .floor-2nd { grid-template-columns: 0.5fr repeat(6, 1fr) 1.2fr; grid-gap: 4px; }
        .stairs-block { grid-row: span 2; background-color: var(--utility-gray); background-image: repeating-linear-gradient(90deg, transparent, transparent 4px, #757575 4px, #757575 6px); }
        .wheelhouse-block { grid-row: span 2; background-color: var(--wheelhouse-plum); color: var(--text-light); font-size: 0.85rem; }

        .floor-3rd { grid-template-columns: 3.5fr 1.2fr 0.5fr 6fr; grid-gap: 6px; }
        .open-space { background-color: #f1f8e9; font-size: 0.9rem; border: 2px dashed #7cb342; position: relative; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #558b2f; }
        .kitchen-block { background-color: var(--kitchen-yellow); font-size: 1rem; color: var(--text-dark); border: 2px solid #f57f17; }
        .dining-room { background-color: #e3f2fd; font-size: 1rem; border: 2px solid #1e88e5; display: flex; flex-direction: column; gap: 6px; justify-content: center; align-items: center; }
        .dining-seats { font-size: 0.6rem; letter-spacing: 1px; opacity: 0.7; }

        .c-green { background-color: var(--green-cabin); color: var(--text-light); }
        .c-blue { background-color: var(--blue-cabin); color: var(--text-light); }
        .c-magenta { background-color: var(--magenta-cabin); color: var(--text-light); }

        #global-tooltip { position: fixed; display: none; background: rgba(33, 33, 33, 0.95); color: #fff; padding: 10px 12px; border-radius: 5px; font-size: 0.75rem; line-height: 1.3; z-index: 9999; pointer-events: none; box-shadow: 0 4px 15px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.15); min-width: 140px; }
        #global-tooltip .tip-title { font-weight: 800; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 3px; margin-bottom: 4px; color: #ffe082; }

        @media (min-width: 640px) {
          .grid-cell { min-height: 75px; }
        }
      `}</style>

      <div ref={tooltipRef} id="global-tooltip" style={{ display: tooltip.visible ? 'block' : 'none', left: `${tooltip.x}px`, top: `${tooltip.y}px` }}>
        {tooltip.data && (
          <>
            <div className="tip-title">{tooltip.data.name}</div>
            <strong>Setup:</strong> {tooltip.data.beds}
            <br />
            <strong>Capacity:</strong> {tooltip.data.capacity}
            <br />
            <strong>Features:</strong> {tooltip.data.amenities}
          </>
        )}
      </div>

      {/* 1ST FLOOR */}
      <div className="deck-wrapper">
        <div className="deck-header">
          <span>1st Floor</span>
          <span className="deck-info-badge">12 Rooms / 32 Sleeping Beds</span>
        </div>
        <div className="deck-hull floor-1st">
          <div className="grid-cell library-block">Library</div>

          {/* ROW 1 */}
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '212')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('212')}><span>Room No. 212</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-blue" onMouseMove={(e) => handleRoomHover(e, '207')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('207')}><span>Room No. 207</span>Deluxe Family Bed<br />2+2=4 Persons</div>
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '200')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('200')}><span>Room No. 200</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '209')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('209')}><span>Room No. 209</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '210')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('210')}><span>Room No. 210</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '211')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('211')}><span>Room No. 211</span>Deluxe Couple Bed<br />2 Persons</div>

          {/* ROW 2 */}
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '206')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('206')}><span>Room No. 206</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-blue" onMouseMove={(e) => handleRoomHover(e, '205')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('205')}><span>Room No. 205</span>Deluxe Family Bed<br />2+2=4 Persons</div>
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '204')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('204')}><span>Room No. 204</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '202')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('202')}><span>Room No. 202</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '203')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('203')}><span>Room No. 203</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '201')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('201')}><span>Room No. 201</span>Deluxe Couple Bed<br />2 Persons</div>
        </div>
      </div>

      {/* 2ND FLOOR */}
      <div className="deck-wrapper">
        <div className="deck-header">
          <span>2nd Floor</span>
          <span className="deck-info-badge">12 Rooms / 30 Sleeping Beds</span>
        </div>
        <div className="deck-hull floor-2nd">
          <div className="grid-cell stairs-block"></div>

          {/* ROW 1 */}
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '307')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('307')}><span>Room No. 307</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '308')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('308')}><span>Room No. 308</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-blue" onMouseMove={(e) => handleRoomHover(e, '309')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('309')}><span>Room No. 309</span>Deluxe Family Bed<br />2+2=4 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '310')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('310')}><span>Room No. 310</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '311')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('311')}><span>Room No. 311</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '312')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('312')}><span>Room No. 312</span>Deluxe Couple Bed<br />2 Persons</div>

          <div className="grid-cell wheelhouse-block">Wheel House<br />Master Bridge</div>

          {/* ROW 2 */}
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '306')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('306')}><span>Room No. 306</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '305')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('305')}><span>Room No. 305</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-blue" onMouseMove={(e) => handleRoomHover(e, '304')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('304')}><span>Room No. 304</span>Deluxe Family Bed<br />2+2=4 Persons</div>
          <div className="grid-cell clickable-cabin c-magenta" onMouseMove={(e) => handleRoomHover(e, '303')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('303')}><span>Room No. 303</span>Bunk Bed<br />2+1=3 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '302')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('302')}><span>Room No. 302</span>Deluxe Couple Bed<br />2 Persons</div>
          <div className="grid-cell clickable-cabin c-green" onMouseMove={(e) => handleRoomHover(e, '301')} onMouseLeave={handleRoomLeave} onClick={() => roomClick('301')}><span>Room No. 301</span>Deluxe Couple Bed<br />2 Persons</div>
        </div>
      </div>

      {/* 3RD FLOOR */}
      <div className="deck-wrapper">
        <div className="deck-header">
          <span>3rd Floor</span>
          <span className="deck-info-badge">Communal / Dining Deck</span>
        </div>
        <div className="deck-hull floor-3rd">
          <div className="grid-cell open-space">Open Space</div>
          <div className="grid-cell kitchen-block">Kitchen</div>
          <div className="grid-cell stairs-block"></div>
          <div className="grid-cell dining-room">
            <div className='text-black'>Dining Room</div>
            <div className="dining-seats">🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑</div>
            <div className="dining-seats">🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑🪑</div>
          </div>
        </div>
      </div>
    </div>
  );
}
