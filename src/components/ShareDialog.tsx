
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { useState } from 'react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareDialog({ isOpen, onClose }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink/60 backdrop-blur-md" onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white max-w-sm w-full rounded-3xl p-8 shadow-2xl relative border border-line"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-accent-green" />
              </div>
              
              <h3 className="text-2xl font-serif italic font-bold text-ink mb-2">扫码分享</h3>
              <p className="text-stone-400 text-sm mb-8">邀请好友一起探索巴西神秘传说</p>

              <div className="bg-white p-4 rounded-2xl border-2 border-accent-gold/20 shadow-inner mb-8">
                <QRCodeSVG 
                  value={shareUrl} 
                  size={180}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: "https://www.google.com/favicon.ico", // Minimal placeholder
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </div>

              <div className="w-full space-y-4">
                 <button 
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-line hover:bg-stone-50 transition-all font-bold text-sm tracking-widest uppercase active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">已复制链接</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>复制页面链接</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-stone-400 uppercase tracking-tighter">
                  手机微信长按识别 · 或者让朋友直接扫码
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
