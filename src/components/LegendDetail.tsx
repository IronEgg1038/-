
import { motion } from 'motion/react';
import { Legend } from '../data/legends';
import { ArrowLeft, BookOpen, Globe } from 'lucide-react';

interface LegendDetailProps {
  legend: Legend;
  onBack: () => void;
}

export default function LegendDetail({ legend, onBack }: LegendDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 z-[60] bg-paper overflow-y-auto"
    >
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 p-6 pointer-events-none flex justify-between items-center">
        <button 
          onClick={onBack}
          className="p-4 bg-white hover:bg-stone-100 rounded-full transition-all border border-line pointer-events-auto shadow-md"
        >
          <ArrowLeft className="w-6 h-6 text-stone-600" />
        </button>
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 border border-line rounded-full pointer-events-auto hidden sm:block">
           <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Mythology Explorer / 巴西神话</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto pb-24 px-6">
        {/* Banner with Frame Look */}
        <div className="w-full aspect-[21/9] relative overflow-hidden rounded-2xl border border-line shadow-2xl bg-white mb-16">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={legend.imageUrl} 
            alt={legend.name.pt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <h1 className="text-5xl sm:text-8xl font-serif font-bold text-white mb-4 drop-shadow-2xl italic">
                  {legend.name.zh}
                </h1>
                <p className="text-white/80 font-bold tracking-[0.4em] text-xs sm:text-base uppercase">
                  {legend.name.pt}
                </p>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-16">
          {/* Main Content Area */}
          <div className="space-y-20">
            {/* Story Section */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl font-bold italic text-ink shrink-0">传说故事</h2>
                <div className="h-[1px] bg-line flex-grow" />
                <span className="text-[10px] uppercase tracking-widest text-stone-400">A Lenda</span>
              </div>
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-accent-green uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-accent-green" />
                    简体中文 / Mandarin
                  </div>
                  <p className="text-xl sm:text-2xl text-stone-700 leading-relaxed font-light">
                    {legend.content.zh}
                  </p>
                </div>
                
                <div className="space-y-6 pt-10 border-t border-line/50 border-dashed">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-stone-300" />
                    Português / Portuguese
                  </div>
                  <p className="text-lg text-stone-400 leading-relaxed italic font-serif">
                    {legend.content.pt}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="space-y-12">
            <div>
              <div className="flex items-center gap-3 text-ink mb-6 border-b border-line pb-2">
                <Globe className="w-4 h-4 text-accent-green" />
                <h3 className="font-bold text-sm tracking-widest uppercase">文化背景</h3>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                  {legend.culturalBackground.zh}
                </p>
                <div className="pt-4 border-t border-line">
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {legend.culturalBackground.pt}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent-green/5 p-6 rounded-2xl border border-accent-green/10">
               <BookOpen className="w-6 h-6 text-accent-green mb-4" />
               <h4 className="font-bold text-sm mb-2 text-accent-green uppercase">民俗笔记</h4>
               <p className="text-stone-500 text-xs leading-relaxed">
                 这些传说代代相传，既是教育后代的寓言，也是对巴西这片土地多元文化的致敬。
               </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-16 bg-white border-t border-line flex flex-col items-center gap-6">
        <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center text-white font-bold">B</div>
        <div className="text-center">
            <p className="font-serif italic text-stone-700">Explorando o Imaginário Brasileiro</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-2">© 2026 Brazil Mythology Project</p>
        </div>
      </footer>
    </motion.div>
  );
}
