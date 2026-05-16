"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/src/components/ui/dialog";
import { PremiumButton, PremiumInput } from "@/src/components/PremiumUI";

interface ShipBookingDialogProps {
  shipName: string;
  triggerLabel?: string;
  triggerClassName?: string;
}

export default function ShipBookingDialog({
  shipName,
  triggerLabel = "Book This Ship",
  triggerClassName = ""
}: ShipBookingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        className={`gold-button inline-flex items-center justify-center gap-2 ${triggerClassName}`}
      >
        {triggerLabel}
      </DialogTrigger>
      <DialogContent className="bg-slate-950 border border-white/10 text-slate-200 w-full max-w-2xl p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="editorial-label">Booking Request</span>
            <h3 className="text-3xl font-heading text-white">Reserve {shipName}</h3>
            <p className="text-sm text-slate-400">
              Share your travel details and our concierge team will confirm availability.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PremiumInput placeholder="Full name" className="h-12" />
            <PremiumInput type="tel" placeholder="Phone number" className="h-12" />
            <PremiumInput type="email" placeholder="Email address" className="h-12 md:col-span-2" />
            <PremiumInput type="date" placeholder="Preferred date" className="h-12" />
            <PremiumInput type="number" placeholder="Guests" className="h-12" />
            <textarea
              placeholder="Special requests or cabin preferences"
              className="md:col-span-2 min-h-30 bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-600"
            />
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
              <PremiumButton className="h-12 flex-1">Submit Request</PremiumButton>
              <PremiumButton variant="outline" className="h-12 flex-1">
                Talk To Concierge
              </PremiumButton>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
