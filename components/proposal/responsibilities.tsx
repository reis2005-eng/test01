import { Section } from "./section"

export function Responsibilities() {
  return (
    <Section number="06" title="Responsibilities">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {/* Client */}
        <div className="bg-paper p-10">
          <h3 className="font-serif text-[1.1rem] font-bold mb-4">Trustwise.ai</h3>
          <ul className="flex flex-col gap-3 mt-4">
            <ResponsibilityItem>Provide all content: text, assets, and references</ResponsibilityItem>
            <ResponsibilityItem>Deliver feedback within agreed timelines (24 hours)</ResponsibilityItem>
            <ResponsibilityItem>Approve deliverables at each phase before work continues</ResponsibilityItem>
            <ResponsibilityItem>Supply fully written copy for all content updates</ResponsibilityItem>
          </ul>
        </div>

        {/* Provider */}
        <div className="bg-accent2 text-paper p-10">
          <h3 className="font-serif text-[1.1rem] font-bold text-paper mb-4">Service Provider</h3>
          <ul className="flex flex-col gap-3 mt-4">
            <ResponsibilityItem dark>Deliver assets within agreed timelines per phase</ResponsibilityItem>
            <ResponsibilityItem dark>Maintain visual quality and brand consistency throughout</ResponsibilityItem>
            <ResponsibilityItem dark>Implement all approved materials accurately</ResponsibilityItem>
            <ResponsibilityItem dark>Provide 30-day post-delivery support</ResponsibilityItem>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function ResponsibilityItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={`text-[0.88rem] pl-5 relative leading-relaxed ${dark ? 'text-paper/75' : 'text-ink'}`}>
      <span className={`absolute left-0 text-[0.75rem] top-[0.1em] ${dark ? 'text-paper/40' : 'text-accent'}`}>
        ✓
      </span>
      {children}
    </li>
  )
}
