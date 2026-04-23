import { Section } from "./section"

export function PostDelivery() {
  return (
    <Section number="07" title="Post-Delivery Support">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {/* Included */}
        <div className="bg-paper p-8">
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-muted mb-4 flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-accent" />
            30-Day Support — Included
          </div>
          <h3 className="font-serif text-[1.1rem] font-bold mb-4">{"What's Covered"}</h3>
          <ul className="flex flex-col gap-2">
            <SupportItem>Bug fixes and minor visual adjustments</SupportItem>
            <SupportItem>Up to 1 content update per week</SupportItem>
            <SupportItem>Text replacement and minor formatting changes</SupportItem>
          </ul>
        </div>

        {/* Not Included */}
        <div className="bg-highlight p-8">
          <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-muted mb-4 flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-accent" />
            After 30 Days
          </div>
          <h3 className="font-serif text-[1.1rem] font-bold text-muted mb-4">Ongoing Maintenance</h3>
          <ul className="flex flex-col gap-2">
            <SupportItem excluded>Maintenance available as a separate retainer</SupportItem>
            <SupportItem excluded>Additional updates billed at standard hourly rate</SupportItem>
            <SupportItem excluded>New features scoped and quoted separately</SupportItem>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function SupportItem({ children, excluded = false }: { children: React.ReactNode; excluded?: boolean }) {
  return (
    <li className="text-[0.88rem] text-ink pl-4 relative leading-relaxed">
      <span className={`absolute left-0 text-[0.7rem] top-[0.15em] ${excluded ? 'text-muted' : 'text-accent'}`}>
        {excluded ? '×' : '→'}
      </span>
      {children}
    </li>
  )
}
