import { Section } from "./section"
import { NoteBox } from "./note-box"

export function ScopeOfWork() {
  return (
    <>
      {/* Page Title */}
      <div className="pt-16 pb-12 border-b border-rule mb-0">
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-black text-ink leading-[1.1] text-balance">
          TrustWise Website Project
        </h1>
      </div>
      
      <Section number="01" title="Scope of Work">
      {/* Project Overview */}
      <div className="bg-highlight border border-rule p-8 mb-6">
        <h3 className="font-serif text-[1.2rem] font-bold text-ink mb-4">Project Overview</h3>
        <p className="text-[0.9rem] text-ink leading-relaxed mb-4">
          This project includes the update of <strong>six (6) pages</strong> on the TrustWise website. The existing navigation structure, composed of <strong>eight main sections</strong> (e.g., Product, Solutions), will remain unchanged. The scope focuses on refreshing the content of these pages and incorporating new visual assets (images), while preserving the current architecture.
        </p>
        <p className="text-[0.9rem] text-ink leading-relaxed">
          Additionally, the project aims to <strong>restore and reapply the original visual design standards</strong> previously defined by your team. This includes correcting inconsistencies in typography, spacing, and layout introduced by prior modifications, ensuring a cohesive and high-quality user experience across all updated pages.
        </p>
      </div>

      {/* Image Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
        <div className="bg-paper p-7">
          <div className="font-serif text-[3.5rem] font-black leading-none text-accent2">8</div>
          <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted mt-1 mb-3">
            Static Images
          </div>
          <p className="text-[0.82rem] text-muted leading-relaxed">
            Banners, section illustrations, and branded visual assets
          </p>
        </div>
        <div className="bg-paper p-7">
          <div className="font-serif text-[3.5rem] font-black leading-none text-accent2">4</div>
          <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted mt-1 mb-3">
            Dynamic Images
          </div>
          <p className="text-[0.82rem] text-muted leading-relaxed">
            Animated visuals, motion-based assets, and interactive elements
          </p>
        </div>
        <div className="bg-accent2 text-paper p-7 sm:col-span-2 lg:col-span-1">
          <div className="font-serif text-[3.5rem] font-black leading-none text-paper">12</div>
          <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper/50 mt-1 mb-3">
            Total Deliverables
          </div>
          <p className="text-[0.82rem] text-paper/70 leading-relaxed">
            Each with up to 2 revision rounds included
          </p>
        </div>
      </div>

      {/* Scope Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule mt-px">
        <ScopeCard label="Design — Included" title="Visual Update & Restoration">
          <ScopeItem>Update of 6 pages with new content and images</ScopeItem>
          <ScopeItem>Restoration of original visual design standards</ScopeItem>
          <ScopeItem>Typography, spacing, and layout corrections</ScopeItem>
          <ScopeItem>Up to 2 revision rounds per deliverable</ScopeItem>
        </ScopeCard>
        <ScopeCard label="Design — Not Included" title="Out of Scope" excluded>
          <ScopeItem excluded>Full concept changes after approval</ScopeItem>
          <ScopeItem excluded>New design directions post-alignment</ScopeItem>
          <ScopeItem excluded>Copywriting or content creation</ScopeItem>
        </ScopeCard>
        <ScopeCard label="Development — Included" title="Implementation">
          <ScopeItem>Implementation of all approved designs across 6 pages</ScopeItem>
          <ScopeItem>Integration of new content and visual assets</ScopeItem>
          <ScopeItem>Restoration of original layout and typography</ScopeItem>
          <ScopeItem>Responsiveness: desktop, mobile</ScopeItem>
        </ScopeCard>
        <ScopeCard label="Development — Not Included" title="Out of Scope" excluded>
          <ScopeItem excluded>Backend development</ScopeItem>
          <ScopeItem excluded>New feature creation</ScopeItem>
          <ScopeItem excluded>Platform migration</ScopeItem>
        </ScopeCard>
      </div>

      <NoteBox>
        <strong className="text-ink font-medium">Post-delivery content updates:</strong> Up to 1 content update per week for 30 days after delivery. Content must be fully written and provided by Trustwise.ai. Includes text replacement and minor formatting adjustments.
      </NoteBox>
    </Section>
    </>
  )
}

function ScopeCard({ 
  label, 
  title, 
  children, 
  excluded = false 
}: { 
  label: string
  title: string
  children: React.ReactNode
  excluded?: boolean 
}) {
  return (
    <div className={`p-8 ${excluded ? 'bg-highlight' : 'bg-paper'}`}>
      <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-muted mb-4 flex items-center gap-2">
        <span className="inline-block w-5 h-px bg-accent" />
        {label}
      </div>
      <h3 className={`font-serif text-[1.1rem] font-bold mb-4 ${excluded ? 'text-muted' : 'text-ink'}`}>
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {children}
      </ul>
    </div>
  )
}

function ScopeItem({ children, excluded = false }: { children: React.ReactNode; excluded?: boolean }) {
  return (
    <li className="text-[0.88rem] text-ink pl-4 relative leading-relaxed">
      <span className={`absolute left-0 text-[0.7rem] top-[0.15em] ${excluded ? 'text-muted' : 'text-accent'}`}>
        {excluded ? '×' : '→'}
      </span>
      {children}
    </li>
  )
}
