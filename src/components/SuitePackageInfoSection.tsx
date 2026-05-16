"use client";

const packageIncludes = [
  "All meals during the trip",
  "All activities inside the forest as per itinerary",
  "Mineral water for drinking during the trip",
  "Forest fees & permission",
  "Armed forest guard from the forest department",
  "An accompanied experience Guide during the trip"
];

const packageNotes = [
  "All the prices are only for Bangladeshi and below 3years age child complementary and the baby who are over 3years to 7 years can share bed with guardians only food cost will be paid 7000tk.",
  "Every foreign national is required to pay 10,500 BDT for government forest revenue."
];

const packageExcludes = ["Drinks both hard & soft", "Items of personal nature"];

const thingsToCarry = [
  "Snicker shoes for walking",
  "Hat/Cap for sun protection",
  "Sun-burn lotion",
  "Binoculars,",
  "Emergency Medicine",
  "Teletalk sim"
];

const responsibilityParagraphs = [
  "We will be responsible for the operation of the tours and excursions as mentioned in our brochure under the normal situation. So, for personal accident, sickness, loss of baggage during the tour, delay or cancellation of air flight, any political problem resulting in unusual situation to conduct a tour, etc. we shall not be directly responsible. While Contrary, will be responsible to extend all possible assistance in overcoming those problems. But the guest must pay any extra cost incurred due to these problems. We reserve the right to withdraw or amend any tour should condition warrant such action. Should such situation arise, a refund of money will be subject to negotiation.",
  "We reserve the rights to accept or refuse any participant as a member of the tour."
];

const viewport = { once: true, amount: 0.2 };

export default function SuitePackageInfoSection() {
  return (
    <section className="py-20 bg-midnight border-t border-white/5">
      <div className="luxury-container max-w-5xl space-y-10">
        <div className="space-y-8">
          <div className="space-y-4 rounded-none border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-heading text-white">Package Includes</h2>
            <ul className="list-disc space-y-2 pl-6 text-base text-slate-200">
              {packageIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-none border border-blue-500/20 bg-blue-500/10 p-6 sm:p-8">
            <h3 className="text-2xl font-heading text-blue-200">Note:</h3>
            <ul className="list-disc space-y-3 pl-6 text-base font-semibold text-blue-100">
              {packageNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-none border border-red-500/20 bg-red-500/10 p-6 sm:p-8">
            <h3 className="text-2xl font-heading text-red-300">Package Exclude</h3>
            <ul className="list-disc space-y-2 pl-6 text-base text-red-100">
              {packageExcludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-none border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-2xl font-heading text-blue-200">Things to Carry</h3>
            <p className="text-base text-slate-300 leading-relaxed">
              It will be colder in Sundarban than Dhaka during the winter. So, carry warm Jackets to protect from cold.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-blue-200">
              {thingsToCarry.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-none border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-2xl font-heading text-red-400 text-center">Responsibility</h3>
            {responsibilityParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}