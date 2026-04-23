import { Section } from "./section"

export function Timeline() {
  return (
    <Section number="03" title="Timeline">
      {/* Total Timeline Banner */}
      <div className="bg-highlight border border-rule p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted">Total Estimated Time</span>
            <h3 className="font-serif text-[1.5rem] font-bold text-ink mt-1">5 to 7 Business Days</h3>
          </div>
          <p className="text-[0.85rem] text-muted max-w-md leading-relaxed">
            Timeline depends on review speed. Additional revisions may extend the schedule. Content must be provided on time to keep the deadline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {/* Design Phase */}
        <div className="bg-paper p-8">
          <span className="inline-block bg-accent text-white font-mono text-[0.65rem] tracking-[0.1em] px-3 py-1 mb-4">
            1–2 Business Days / Phase
          </span>
          <h3 className="font-serif text-[1.1rem] font-bold mb-3">Design Phase</h3>
          <ul className="flex flex-col gap-2 mt-3">
            <TimelineItem>1 to 2 business days per phase, dependent on feedback speed</TimelineItem>
            <TimelineItem>Client must provide feedback within 24 hours of delivery</TimelineItem>
            <TimelineItem>Delays in feedback automatically extend the project timeline</TimelineItem>
            <TimelineItem>Content must be provided to keep the deadline on track</TimelineItem>
          </ul>
        </div>

        {/* Development Phase */}
        <div className="bg-ink text-paper p-8">
          <span className="inline-block bg-white/10 text-paper/70 font-mono text-[0.65rem] tracking-[0.1em] px-3 py-1 mb-4">
            2–3 Business Days
          </span>
          <h3 className="font-serif text-[1.1rem] font-bold text-paper mb-3">Development Phase</h3>
          <ul className="flex flex-col gap-2 mt-3">
            <TimelineItem dark>2 to 3 business days of development work</TimelineItem>
            <TimelineItem dark>Begins only after final design approval is received</TimelineItem>
            <TimelineItem dark>Development will be completed as the final step after all designs are approved</TimelineItem>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function TimelineItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={`text-[0.85rem] pl-5 relative leading-relaxed ${dark ? 'text-paper/65' : 'text-ink'}`}>
      <span className="absolute left-0 text-accent text-[0.7rem]">—</span>
      {children}
    </li>
  )
}
