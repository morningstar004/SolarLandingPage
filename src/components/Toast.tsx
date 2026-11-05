import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';
        
        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-xl transition-all duration-300 transform translate-y-0 ${
              isSuccess
                ? 'bg-forest-900/95 border-lime/40 text-warm-white shadow-lime/10'
                : isWarning
                ? 'bg-forest-900/95 border-solar-yellow/40 text-warm-white shadow-solar-yellow/10'
                : 'bg-forest-900/95 border-white/20 text-warm-white'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-lime" />}
              {isWarning && <AlertCircle className="w-5 h-5 text-solar-yellow" />}
              {!isSuccess && !isWarning && <Info className="w-5 h-5 text-sky-400" />}
            </div>

            <div className="flex-1 pr-2">
              <h4 className="text-sm font-semibold tracking-tight text-white">{toast.title}</h4>
              <p className="text-xs text-warm-muted mt-0.5 leading-relaxed">{toast.message}</p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="shrink-0 text-warm-muted/60 hover:text-white transition-colors p-1 -mr-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
