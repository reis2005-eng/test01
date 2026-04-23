export function ValidityBanner() {
  return (
    <div className="bg-ink text-paper px-6 md:px-12 py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t-[3px] border-accent">
      <div>
        <h2 className="font-serif text-[2rem] font-bold text-paper text-balance">
          Ready to move forward?
        </h2>
        <p className="text-paper/60 text-[0.88rem] max-w-[380px] leading-relaxed mt-2">
          This proposal outlines a clear, structured path to a stronger Trustwise.ai. All timelines, deliverables, and terms are defined — let&apos;s get started.
        </p>
      </div>
      <div className="lg:text-right shrink-0">
        <div className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-accent mb-4">
          Valid for 7 days from submission
        </div>
        <a 
          href="mailto:hello@trustwise.ai" 
          className="inline-block bg-accent text-white font-mono text-[0.75rem] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#a84f22] transition-colors"
        >
          Accept Proposal →
        </a>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-rule px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted">
      <span>Trustwise.ai — Website Redesign Agreement</span>
      <span>Confidential · Not for distribution</span>
      <span>$5,040 · 84 hours · 3 phases</span>
    </footer>
  )
}
