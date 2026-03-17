import React, { useEffect, useState } from 'react';

// --- CSS Animacije za živi VU Metar ---
const VUMeterStyles = () => (
  <style>
    {`
      @keyframes vuBounce1 {
        0%, 100% { clip-path: inset(80% 0 0 0); }
        20% { clip-path: inset(10% 0 0 0); }
        40% { clip-path: inset(50% 0 0 0); }
        60% { clip-path: inset(5% 0 0 0); }
        80% { clip-path: inset(30% 0 0 0); }
      }
      @keyframes vuBounce2 {
        0%, 100% { clip-path: inset(75% 0 0 0); }
        25% { clip-path: inset(15% 0 0 0); }
        50% { clip-path: inset(40% 0 0 0); }
        75% { clip-path: inset(2% 0 0 0); }
      }
      .animate-vu-1 { animation: vuBounce1 1s infinite ease-in-out alternate; }
      .animate-vu-2 { animation: vuBounce2 1.25s infinite ease-in-out alternate-reverse; }
    `}
  </style>
);

const Knob = ({ sizePx = 32, color = 'bg-gray-800', indicatorColor = 'bg-white' }) => {
  const [rotation, setRotation] = useState(0);
  const handleTurn = () => setRotation(prev => prev + (Math.random() * 80 - 40));

  return (
    <div 
      onClick={handleTurn}
      className={`rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.6)] border-2 border-gray-600 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-gray-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] ${color}`}
      style={{ 
        width: `${sizePx}px`, 
        height: `${sizePx}px`,
        fontSize: `${sizePx / 8}px`,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <div 
        className={`rounded-sm ${indicatorColor} shadow-sm`}
        style={{ 
          width: `${sizePx * 0.04}px`, 
          height: `${sizePx * 0.12}px`,
          marginTop: `-${sizePx * 0.06}px`
        }}
      ></div>
    </div>
  );
};

const Button = ({ sizePx = 40, color = 'bg-gray-800', label = '', textColor = 'text-white', borderColor = 'border-gray-500', blink = false }) => {
  const [active, setActive] = useState(false);
  
  return (
    <div 
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      className={`rounded-full shadow-inner border-2 flex items-center justify-center cursor-pointer transition-all duration-75 
        ${active ? 'scale-90 brightness-150 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'hover:scale-105 hover:bg-gray-700 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]'} 
        ${blink && !active ? 'animate-pulse' : ''} 
        ${color} ${borderColor}`}
      style={{ width: `${sizePx}px`, height: `${sizePx}px`, fontSize: `${sizePx / 6}px` }}
    >
      {label && <span className={`font-bold ${textColor} ${active ? 'brightness-150' : ''}`}>{label}</span>}
    </div>
  );
};

const Pad = ({ sizePx = 56 }) => {
  const [active, setActive] = useState(false);
  
  return (
    <div 
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      className={`mx-auto rounded-sm cursor-pointer transition-all duration-75 
        ${active 
          ? 'bg-[rgba(212,175,55,1)] scale-90 border-[rgba(255,255,255,0.9)] shadow-[0_0_20px_rgba(212,175,55,1),inset_0_0_10px_rgba(255,255,255,0.5)]' 
          : 'bg-gray-900 border-2 border-[rgba(212,175,55,0.6)] hover:border-[rgba(212,175,55,1)] hover:bg-[rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1'}`}
      style={{ width: `${sizePx}px`, height: `${sizePx * 0.85}px` }}
    />
  );
};

const Fader = ({ type = 'vertical', heightPx = 128, sizePx = 24 }) => {
  const [active, setActive] = useState(false);
  
  return (
    <div 
      className={`bg-black rounded-sm border-2 border-gray-800 flex items-center justify-center relative shadow-[inset_0_0_10px_rgba(0,0,0,1)]`}
      style={{ 
        width: type === 'vertical' ? `${sizePx * 0.25}px` : `${heightPx}px`,
        height: type === 'vertical' ? `${heightPx}px` : `${sizePx * 0.33}px`
      }}
    >
      <div 
        className={`bg-gray-800 absolute`}
        style={{ 
          width: type === 'vertical' ? '2px' : '100%',
          height: type === 'vertical' ? '100%' : '2px'
        }}
      />
      <div 
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onMouseLeave={() => setActive(false)}
        className={`bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-500 rounded-sm cursor-pointer transition-transform duration-100 z-10 flex justify-center items-center
          ${active ? 'scale-95 brightness-125' : 'hover:scale-110 shadow-lg'}`}
        style={{ 
          width: type === 'vertical' ? `${sizePx}px` : `${sizePx * 0.25}px`,
          height: type === 'vertical' ? `${sizePx * 0.25}px` : `${sizePx}px`
        }}
      >
        <div 
          className="bg-white/80"
          style={{ 
            width: type === 'vertical' ? `${sizePx * 0.8}px` : '2px',
            height: type === 'vertical' ? '2px' : `${sizePx * 0.8}px`
          }}
        />
      </div>
    </div>
  );
};

const JogWheel = ({ sizePx = 224 }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div 
      onClick={() => setIsPlaying(!isPlaying)}
      className={`rounded-full border-4 border-gray-800 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-500 
        ${isPlaying ? 'shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-[spin_2.5s_linear_infinite]' : 'hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'} 
        bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 relative`}
      style={{ width: `${sizePx*1.2}px`, height: `${sizePx*1.2}px` }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      
      <div 
        className="rounded-full border-2 border-gray-600 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-10"
        style={{ width: `${sizePx * 0.71}px`, height: `${sizePx * 0.71}px` }}
      >
        <div 
          className="rounded-full border border-gray-500 flex items-center justify-center bg-gray-800 shadow-inner"
          style={{ width: `${sizePx * 0.28}px`, height: `${sizePx * 0.28}px` }}
        >
          <div 
            className={`rounded-full bg-black transition-colors duration-300 ${isPlaying ? 'bg-red-500/20' : ''}`}
            style={{ width: `${sizePx * 0.1}px`, height: `${sizePx * 0.1}px` }}
          />
        </div>
      </div>
    </div>
  );
};

// --- LIJEVI I DESNI DECK ---
const Deck = ({ number, sizePx }: { number: number; sizePx: number }) => (
  <div 
    key={number} 
    className="flex-1 flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-gray-700 relative"
    style={{ padding: `${sizePx * 0.06}px`, fontSize: `${sizePx / 35}px` }}
  >
    <div className='relative'>
        <div className="absolute top-0 left-0 right-0">
            <div className='flex justify-between items-start'>
                <div className="flex space-x-3">
                    <Button sizePx={sizePx * 0.14} label="FX" />
                    <Button sizePx={sizePx * 0.14} label="CH" />
                    <Button sizePx={sizePx * 0.14} label="IN" />
                    <Knob sizePx={sizePx * 0.11} />
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 mb-2 font-bold tracking-widest">TEMPO</span>
                    <Fader type="vertical" heightPx={sizePx * 0.24} sizePx={sizePx * 0.1} />
                </div>
            </div>
        </div>
    </div>

    <div className="flex justify-between items-center mb-3 mt-7">
      <div className="flex-1 flex justify-center">
        <JogWheel sizePx={sizePx * 0.6} />
      </div>
    </div>

    <div className='flex justify-between items-end border-t border-gray-700 pt-3 space-x-3'>
        <div className="flex flex-col space-y-2">
            {/* Blinking CUE i SYNC za realizam */}
            <Button sizePx={sizePx * 0.10} label="SYNC" borderColor="border-red-900" textColor="text-red-500" />
            <Button sizePx={sizePx * 0.18} label="CUE" borderColor="border-orange-800" textColor="text-orange-500" blink={true} />
            <Button sizePx={sizePx * 0.18} label="▶/II" borderColor="border-green-800" textColor="text-green-500" />
        </div>
    
        <div>
            {/* Dinamički gap za labele */}
            <div 
              className="grid grid-cols-4 text-[rgba(212,175,55,1)] font-bold text-center tracking-wider"
              style={{ 
                gap: `${sizePx * 0.05}px`, // Dinamički razmak umjesto gap-3
                marginBottom: `${sizePx * 0.03}px`,
                fontSize: `${sizePx * 0.040}px` // Opcionalno: tekst labela se također blago smanjuje
              }}
            >
                <span>HOT CUE</span>
                <span>FX FADE</span>
                <span>PAD FX</span>
                <span>SAMPLER</span>
            </div>
            
            {/* Dinamički gap za same padove */}
            <div 
              className="grid grid-cols-4"
              style={{ gap: `${sizePx * 0.05}px` }} // Dinamički razmak umjesto gap-3
            >
                {[...Array(8)].map((_, i) => (
                    <Pad key={i} sizePx={sizePx * 0.18} />
                ))}
            </div>
        </div>
    </div>
  </div>
);

// --- CENTRALNA MIKSETA ---
const Mixer = ({ sizePx = 288 }: { sizePx?: number }) => (
  <div 
    className="flex flex-col border-l border-r border-black shadow-2xl bg-gradient-to-b from-gray-900 to-black z-10"
    style={{ width: `${sizePx}px`, padding: `${sizePx * 0.06}px`, fontSize: `${sizePx / 35}px` }}
  >
    <div className="flex justify-between px-2 mb-3">
      <div className="flex flex-col items-center space-y-1 pt-4 text-gray-400 font-semibold">
        <span>TRIM</span><Knob sizePx={sizePx * 0.09} />
        <span>HI</span><Knob sizePx={sizePx * 0.09} />
        <span>MID</span><Knob sizePx={sizePx * 0.09} />
        <span>LOW</span><Knob sizePx={sizePx * 0.09} />
        <span className="text-blue-400">FILTER</span><Knob sizePx={sizePx * 0.1} indicatorColor="bg-blue-400" />
      </div>
    
      <div className="flex flex-col items-center space-y-2">
        <div className="flex justify-center mb-2">
            <div className="flex flex-col items-center">
            <span className="text-gray-500 mb-1 font-bold">BROWSE</span>
            <Knob sizePx={sizePx * 0.16} indicatorColor="bg-gray-400" />
            </div>
        </div>
        <div className="flex flex-col items-center pt-2 mt-4 text-gray-400 font-semibold">
          <span className='mb-1'>MASTER</span>
          <Knob sizePx={sizePx * 0.1} indicatorColor="bg-red-500" />
        </div>
        <div className="flex flex-col items-center pt-2 text-gray-400 font-semibold">
          <span className='mb-1'>PHONES</span>
          <Knob sizePx={sizePx * 0.1} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-1 pt-4 text-gray-400 font-semibold">
        <span>TRIM</span><Knob sizePx={sizePx * 0.09} />
        <span>HI</span><Knob sizePx={sizePx * 0.09} />
        <span>MID</span><Knob sizePx={sizePx * 0.09} />
        <span>LOW</span><Knob sizePx={sizePx * 0.09} />
        <span className="text-blue-400">FILTER</span><Knob sizePx={sizePx * 0.1} indicatorColor="bg-blue-400" />
      </div>
    </div>

    <div className="flex justify-between px-6 mb-5 items-end">
      <Fader type="vertical" heightPx={sizePx * 0.3} sizePx={sizePx * 0.1} />
      
      {/* Živi LED VU Metar */}
      <div 
        className="bg-black rounded-sm border border-gray-800 flex justify-center space-x-1 p-1 shadow-inner relative overflow-hidden"
        style={{ width: `${sizePx * 0.12}px`, height: `${sizePx * 0.3}px` }}
      >
        <div className="w-2 bg-gradient-to-t from-green-500 via-yellow-400 to-red-500 rounded-sm opacity-90 animate-vu-1" />
        <div className="w-2 bg-gradient-to-t from-green-500 via-yellow-400 to-red-500 rounded-sm opacity-90 animate-vu-2" />
      </div>
      
      <Fader type="vertical" heightPx={sizePx * 0.3} sizePx={sizePx * 0.1} />
    </div>

    <div className="flex justify-center mt-2">
      <Fader type="horizontal" heightPx={sizePx * 0.7} sizePx={sizePx * 0.12} />
    </div>
  </div>
);

// --- GLAVNI KONTROLER KONTEJNER ---
export default function DJControllerApp() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      
      const REQUIRED_WIDTH = 650; 
      const SAFE_PADDING = 1;

      if (screenWidth < REQUIRED_WIDTH + SAFE_PADDING) {
        setScale((screenWidth - SAFE_PADDING) / REQUIRED_WIDTH);
      } else {
        setScale(1);
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <VUMeterStyles />
      <div className="bg-black p-2 md:p-3 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_100px_rgba(212,175,55,0.05)] border-b-4 md:border-b-8 border-gray-800 ring-1 ring-gray-800 inline-flex overflow-hidden">
        <div className="flex overflow-hidden rounded-xl">
          <Deck number={1} sizePx={150 * scale} />
          <Mixer sizePx={160 * scale} />
          <Deck number={2} sizePx={150 * scale} />
        </div>
      </div>
    </div>
  );
}
