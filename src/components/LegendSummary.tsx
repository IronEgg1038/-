
import { motion, AnimatePresence } from 'motion/react';
import { Legend, StateData } from '../data/legends';
import { X, ChevronRight } from 'lucide-react';

interface LegendSummaryProps {
  stateData: StateData | null;
  onClose: () => void;
  onSelectLegend: (legend: Legend) => void;
}

export default function LegendSummary({ stateData, onClose, onSelectLegend }: LegendSummaryProps) {
  if (!stateData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="bg-white w-full max-w-2xl rounded-t-3xl sm:rounded-none sm:h-full sm:absolute sm:right-0 sm:top-0 sm:w-2/5 border-l border-line shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 sm:p-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-widest rounded mb-2 inline-block">Regional Legend</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-ink italic leading-tight">{stateData.name}州</h2>
                <p className="text-stone-400 italic font-light text-sm mt-1">{stateData.name} State</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400"
                title="关闭"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-10 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {stateData.legends.map((legend, idx) => (
                <div 
                  key={legend.id}
                  className="group cursor-pointer"
                  onClick={() => onSelectLegend(legend)}
                >
                   <div className="flex items-center gap-4 mb-3">
                     <span className="text-accent-green font-serif italic text-2xl">0{idx + 1}.</span>
                     <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-accent-green transition-colors">
                        {legend.name.zh}
                        <span className="text-[10px] opacity-40 font-normal uppercase tracking-widest">{legend.name.pt}</span>
                     </h3>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm border border-line">
                        <img 
                          src={legend.imageUrl} 
                          alt={legend.name.pt} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                     </div>
                     <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                        {legend.summary.zh}
                     </p>
                   </div>
                   <div className="flex items-center text-accent-green text-[10px] font-bold uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      了解详情 · Saiba Mais <ChevronRight className="w-3 h-3 ml-1" />
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line">
               <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest leading-relaxed">
                 Seleção de folclore brazileiro <br/> 支持中葡双语查阅
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
