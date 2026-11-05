import React, { useState } from 'react';
import { X, Calculator, PackageCheck, Send, ShieldCheck, FileCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOLAR_PRODUCTS } from '../../data/mockData';
import { SolarProduct } from '../../types';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: SolarProduct | null;
  onSuccessToast: (title: string, message: string) => void;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  onSuccessToast
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || SOLAR_PRODUCTS[0].id
  );
  const [volumeMw, setVolumeMw] = useState<number>(1.2);
  const [deliveryDepot, setDeliveryDepot] = useState<string>('Bhiwandi Clean Hub');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentProduct = SOLAR_PRODUCTS.find((p) => p.id === selectedProductId) || SOLAR_PRODUCTS[0];
  
  // Calculate estimated total price in INR (Lakhs / Crores)
  const estimatedCostInr = currentProduct.category === 'module'
    ? (volumeMw * 1000000 * 17.85)
    : (volumeMw * 1000000 * 3.16);

  const formattedCost = estimatedCostInr >= 10000000 
    ? `₹${(estimatedCostInr / 10000000).toFixed(2)} Crores + GST`
    : `₹${(estimatedCostInr / 100000).toFixed(1)} Lakhs + GST`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B8F36B', '#FFEA00', '#FFFFFF']
      });
      onSuccessToast(
        'Tender Dispatched to Indian Depots',
        `3 verified ALMM stockists are reviewing your ${volumeMw} MWp tender.`
      );
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-forest-900 border border-lime/30 shadow-2xl overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-forest-600 via-lime to-solar-yellow" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-warm-muted hover:text-white hover:bg-forest-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-lime/10 text-lime border border-lime/20">
                  <Calculator className="w-3.5 h-3.5" />
                  INSTANT SPOT RFQ TENDER (INR)
                </span>
                <span className="text-xs text-warm-muted font-mono">ALMM List-I Direct</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-warm-white">
                Request Spot Allocation
              </h3>
              <p className="text-xs text-warm-muted mt-0.5 font-mono">
                Lock container-level spot pricing directly with verified Indian manufacturers and port depots.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                    Select Equipment
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-forest-800 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                  >
                    {SOLAR_PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.id}>
                        {prod.brand} — {prod.model} ({prod.pricePerWattInr})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Required Capacity (MWp)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0.1"
                        max="100"
                        step="0.1"
                        value={volumeMw}
                        onChange={(e) => setVolumeMw(parseFloat(e.target.value) || 0.1)}
                        className="w-full px-3 py-2 rounded-lg bg-forest-800 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                      />
                      <span className="absolute right-3 top-2 text-xs font-mono text-warm-muted">MWp</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Target State Depot
                    </label>
                    <select
                      value={deliveryDepot}
                      onChange={(e) => setDeliveryDepot(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                    >
                      <option value="Bhiwandi Clean Hub">Bhiwandi Central Depot (Maharashtra)</option>
                      <option value="Mundra Port Hub">Mundra Port CFS (Gujarat)</option>
                      <option value="Bengaluru Factory Depot">Bengaluru Depot (Karnataka)</option>
                      <option value="NCR ICD Depot">NCR Tughlakabad ICD (Delhi NCR)</option>
                      <option value="Chennai Port Hub">Chennai Port Hub (Tamil Nadu)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-forest-950/70 border border-white/10 font-mono text-xs">
                  <div className="flex items-center justify-between text-warm-muted">
                    <span>Estimated Total Consignment Value:</span>
                    <span className="text-sm font-bold text-lime">{formattedCost}</span>
                  </div>
                  <div className="flex items-center justify-between text-warm-muted mt-2 pt-2 border-t border-white/5">
                    <span>Dispatch Window:</span>
                    <span className="text-white">48 - 72 Hours (e-Way Bill Ready)</span>
                  </div>
                  <div className="flex items-center justify-between text-warm-muted mt-2 pt-2 border-t border-white/5">
                    <span>Compliance:</span>
                    <span className="text-white flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-lime" />
                      ALMM List-I & GST 18% Input Pass-through
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-lg shadow-lime/20 flex items-center justify-center gap-2 transition-all duration-200 text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Indian Stockists...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch RFQ & Receive Instant Quotes</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-2 animate-fadeIn font-mono">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime/40 flex items-center justify-center mx-auto mb-3 text-lime shadow-lg shadow-lime/20">
                <PackageCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-warm-white">Tender Routed to Depots</h3>
              <p className="text-xs text-warm-muted mt-1 max-w-md mx-auto">
                Your tender for <strong className="text-white">{volumeMw} MWp</strong> of <strong className="text-white">{currentProduct.brand} {currentProduct.model}</strong> has been routed to 12 verified Indian depots.
              </p>

              <div className="my-4 p-3.5 rounded-xl bg-forest-950 border border-white/10 text-left text-xs space-y-1.5">
                <div className="flex justify-between text-warm-muted">
                  <span>TENDER_REF:</span>
                  <span className="text-lime">HLS-IN-RFQ-8849</span>
                </div>
                <div className="flex justify-between text-warm-muted">
                  <span>DEPOT_ORIGIN:</span>
                  <span className="text-white">{deliveryDepot}</span>
                </div>
                <div className="flex justify-between text-warm-muted">
                  <span>ESTIMATED_SETTLEMENT:</span>
                  <span className="text-solar-yellow">{formattedCost}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow transition-all text-xs"
              >
                Back to Platform
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
