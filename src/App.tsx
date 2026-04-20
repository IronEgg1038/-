import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BrazilMap from './components/BrazilMap';
import LegendSummary from './components/LegendSummary';
import LegendDetail from './components/LegendDetail';
import ShareDialog from './components/ShareDialog';
import { legendsData, Legend, highlightedStates } from './data/legends';
import { Map as MapIcon, Sparkles, Share2 } from 'lucide-react';

export default function App() {
  const [selectedStateName, setSelectedStateName] = useState<string | null>(null);
  const [activeLegend, setActiveLegend] = useState<Legend | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const selectedStateData = selectedStateName ? legendsData[selectedStateName] : null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-paper text-ink selection:bg-accent-gold selection:text-white">
      {/* Header Navigation */}
      <nav className="absolute top-0 left-0 w-full h-20 border-b border-line flex items-center justify-between px-6 sm:px-12 bg-white/50 backdrop-blur-sm z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent-green rounded-full flex items-center justify-center text-white font-bold shadow-sm">B</div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            巴西传说地图 <span className="text-stone-400 font-serif italic text-sm ml-2 hidden sm:inline">Lendas do Brasil</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden sm:flex gap-8 text-sm font-bold uppercase tracking-widest">
            <span className="text-accent-green border-b-2 border-accent-green py-1">主页</span>
            <span className="text-stone-400 hover:text-stone-600 transition-colors py-1 cursor-not-allowed">文化背景</span>
          </div>
          
          <button 
            onClick={() => setIsShareOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-paper hover:bg-stone-100 border border-line rounded-full transition-all active:scale-95 shadow-sm"
          >
            <Share2 className="w-4 h-4 text-accent-green" />
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">分享</span>
          </button>
        </div>
      </nav>

      {/* Main View: Map Container */}
      <main className="relative w-full h-full flex flex-col pt-20">
        <div className="absolute top-24 left-0 right-0 z-20 flex flex-col items-center pointer-events-none px-6 text-center">
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-1"
          >
            <h2 className="text-2xl sm:text-4xl font-serif italic text-stone-700">点击州份探索秘闻</h2>
            <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">Amazonas, Maranhão, Bahia, Minas Gerais, São Paulo</p>
          </motion.div>
        </div>

        <BrazilMap 
          selectedState={selectedStateName}
          onStateClick={(name) => setSelectedStateName(name)} 
        />

        <footer className="absolute bottom-10 left-0 right-0 flex flex-col items-center pointer-events-none px-6">
           <div className="bg-white/80 backdrop-blur-md border border-line px-4 py-2 rounded-full flex items-center gap-4 text-[10px] sm:text-xs pointer-events-auto shadow-sm">
             <div className="flex items-center gap-2">
               <span className="w-3 h-3 border border-stone-400 bg-stone-100 rounded-sm" />
               <span className="text-stone-500 uppercase tracking-tighter">其他州份</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 border border-ink bg-accent-gold rounded-sm" />
                <span className="text-ink font-bold uppercase tracking-tighter">活跃传说州</span>
             </div>
           </div>
        </footer>
      </main>

      {/* Decorative background element */}
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-5 pointer-events-none hidden sm:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 10 V90 M10 50 H90" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {selectedStateName && (
          <LegendSummary 
            stateData={selectedStateData}
            onClose={() => setSelectedStateName(null)}
            onSelectLegend={(legend) => setActiveLegend(legend)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeLegend && (
          <LegendDetail 
            legend={activeLegend}
            onBack={() => setActiveLegend(null)}
          />
        )}
      </AnimatePresence>

      <ShareDialog 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
