import { CalendarDays, CircleCheckBig, PhoneCall, Ticket } from 'lucide-react';
import SuitePackageInfoSection from '@/src/components/SuitePackageInfoSection';
import ScrollReveal from '@/src/components/ScrollReveal';

const bookingSteps = [
  {
    step: 'Step: 1',
    title: 'Choose your plan',
    icon: Ticket,
    accent: 'from-blue-50 to-indigo-100'
  },
  {
    step: 'Step: 2',
    title: 'Call/Chat with agent',
    icon: PhoneCall,
    accent: 'from-blue-50 to-violet-100'
  },
  {
    step: 'Step: 3',
    title: 'Make your payment',
    icon: CalendarDays,
    accent: 'from-blue-50 to-sky-100'
  },
  {
    step: 'Step: 4',
    title: 'Collect your ticket',
    icon: CircleCheckBig,
    accent: 'from-blue-50 to-fuchsia-100'
  }
];

const scheduleRows = [
  {
    trip: 'Trip -1',
    departure: 'Fri, Oct 24, 2025',
    departureTime: '6:00 AM',
    returnDate: 'Sun, Oct 26, 2025',
    returnTime: '4:30 PM'
  },
  {
    trip: 'Trip -2',
    departure: 'Fri, Oct 31, 2025',
    departureTime: '6:00 AM',
    returnDate: 'Sun, Nov 2, 2025',
    returnTime: '4:30 PM'
  },
  {
    trip: 'Trip -3',
    departure: 'Fri, Nov 7, 2025',
    departureTime: '6:00 AM',
    returnDate: 'Sun, Nov 9, 2025',
    returnTime: '4:30 PM'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 text-slate-300 overflow-x-hidden">
      <section className="relative overflow-hidden bg-midnight border-b border-white/5 py-20 sm:py-24">
        <div className="luxury-container relative z-10 space-y-12 sm:space-y-16">
          <ScrollReveal className="flex flex-col items-center gap-5 text-center max-w-3xl mx-auto">
            <span className="editorial-label text-gold">Ticket Booking Process</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading text-white leading-tight">
              Services <span className="italic-accent text-gold">For Your Voyage</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed">
              A refined booking flow and sailing schedule designed to match the rest of the LuxeTide experience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6 items-start">
            {bookingSteps.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 120}
                className="relative flex flex-col items-center text-center"
              >
                <div className="absolute left-1/2 top-20 hidden w-full -translate-x-1/2 lg:block">
                  {index < bookingSteps.length - 1 && (
                    <div className="mx-auto h-0 border-t border-dashed border-gold/40 w-[70%]" />
                  )}
                </div>

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 ring-1 ring-white/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-slate-950/80 text-gold">
                    <item.icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gold/70">{item.step}</p>
                  <h2 className="text-2xl sm:text-3xl font-heading text-white">{item.title}</h2>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep-space py-20 sm:py-24 border-t border-white/5">
        <div className="luxury-container relative z-10 space-y-10 sm:space-y-14">
          <ScrollReveal className="space-y-4 text-center max-w-4xl mx-auto">
            <span className="editorial-label">Upcoming Schedule</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading text-white leading-tight">
              Symphony Of The Wave
            </h2>
            <p className="text-lg sm:text-2xl font-light text-slate-300 tracking-wide">
              Khulna - Sundarbans - Khulna
            </p>
            <p className="text-sm sm:text-base italic text-gold/80">
              Schedule may change with tidal state
            </p>
          </ScrollReveal>

          <ScrollReveal className="luxury-card overflow-hidden rounded-sm" delay={80}>
            <div className="bg-slate-950 px-6 py-8 sm:px-10 sm:py-10 text-center border-b border-white/5">
              <span className="editorial-label text-gold">Schedule</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-heading text-white">October 2025</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-230 w-full border-collapse text-center">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-5 text-sm sm:text-lg font-semibold tracking-[0.2em] border-r border-white/10">TRIP</th>
                    <th className="px-6 py-5 text-sm sm:text-lg font-semibold tracking-[0.2em] border-r border-white/10">DEPARTURE</th>
                    <th className="px-6 py-5 text-sm sm:text-lg font-semibold tracking-[0.2em] border-r border-white/10">TIME</th>
                    <th className="px-6 py-5 text-sm sm:text-lg font-semibold tracking-[0.2em] border-r border-white/10">RETURN</th>
                    <th className="px-6 py-5 text-sm sm:text-lg font-semibold tracking-[0.2em]">TIME</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-950">
                  {scheduleRows.map((row, index) => (
                    <ScrollReveal key={row.trip} as="tr" delay={index * 90} className="border-t border-white/5">
                      <td className="px-6 py-7 text-lg font-medium text-white border-r border-white/5">{row.trip}</td>
                      <td className="px-6 py-7 text-lg text-slate-300 border-r border-white/5">{row.departure}</td>
                      <td className="px-6 py-7 text-lg text-gold border-r border-white/5 font-medium">{row.departureTime}</td>
                      <td className="px-6 py-7 text-lg text-slate-300 border-r border-white/5">{row.returnDate}</td>
                      <td className="px-6 py-7 text-lg text-gold font-medium">{row.returnTime}</td>
                    </ScrollReveal>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SuitePackageInfoSection />
    </div>
  );
}