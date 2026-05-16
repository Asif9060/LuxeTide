import MVWave2Layout from '@/src/components/MVWave2Layout';
import MVWaveLayout from '@/src/components/MVWaveLayout';
import RiverCruiseLayout from '@/src/components/RiverCruiseLayout';

export const metadata = {
  title: 'Layouts | LuxeTide'
};

export default function LayoutsPage() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <section className="py-20">
        <div className="luxury-container">
          <div className="max-w-3xl space-y-3">
            <span className="editorial-label text-gold">Layouts</span>
            <h1 className="text-4xl sm:text-5xl font-heading text-white">Ship Layouts & Deck Plans</h1>
            <p className="text-sm text-slate-400">Browse deck plans and layout images for each ship. Click any card to open the full image.</p>
          </div>

          {/* MV The Wave 2 Layout */}
          <div className="pt-10">
            <div className="rounded-2xl border border-cyan-400/40 bg-cyan-950/15 overflow-hidden">
              <div className="px-6 py-4 border-b border-cyan-400/30 bg-cyan-500/10 flex items-center justify-between gap-3">
                <h3 className="text-lg font-heading text-cyan-100">MV The Wave 2</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200 bg-cyan-500/20 border border-cyan-300/30 px-3 py-1 rounded-full">Ship 01</span>
              </div>
              <div className="p-6">
                <MVWave2Layout />
              </div>
            </div>
          </div>

          {/* MV The Wave Layout */}
          <div className="pt-12">
            <div className="rounded-2xl border border-rose-400/40 bg-rose-950/15 overflow-hidden">
              <div className="px-6 py-4 border-b border-rose-400/30 bg-rose-500/10 flex items-center justify-between gap-3">
                <h3 className="text-lg font-heading text-rose-100">MV The Wave</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-200 bg-rose-500/20 border border-rose-300/30 px-3 py-1 rounded-full">Ship 02</span>
              </div>
              <div className="p-6">
                <MVWaveLayout />
              </div>
            </div>
          </div>

          {/* The River Cruise Layout */}
          <div className="pt-12">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-950/15 overflow-hidden">
              <div className="px-6 py-4 border-b border-emerald-400/30 bg-emerald-500/10 flex items-center justify-between gap-3">
                <h3 className="text-lg font-heading text-emerald-100">The River Cruise</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200 bg-emerald-500/20 border border-emerald-300/30 px-3 py-1 rounded-full">Ship 03</span>
              </div>
              <div className="p-6">
                <RiverCruiseLayout />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
