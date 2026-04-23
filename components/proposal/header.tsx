export function Header() {
  return (
    <header className="border-b-2 border-ink animate-[fadeIn_0.8s_ease_forwards]">
      {/* Header Meta */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-rule font-mono text-[0.7rem] tracking-[0.15em] uppercase text-muted">
        <span>Project Scope &amp; Agreement</span>
        <span className="bg-accent text-white px-3 py-1 text-[0.65rem] tracking-[0.1em]">
          Confidential
        </span>
        <span className="hidden md:inline">Prepared for Trustwise.ai</span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Hero Left */}
        <div className="px-6 md:px-12 py-16 lg:border-r border-rule flex flex-col justify-between">
          <div>
            <div className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent mb-6">
              Website Redesign Proposal
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight">
              Your new
              <br />
              <em className="italic text-accent">website,</em>
              <br />
              built with
              <br />
              care.
            </h1>
            <p className="text-[0.9rem] text-muted max-w-[340px] mt-6 leading-relaxed">
              A structured, phased approach to redesigning Trustwise.ai — delivering visual consistency, stronger brand alignment, and a seamless user experience.
            </p>
          </div>
        </div>

        {/* Hero Right */}
        <div className="px-6 md:px-12 py-16 bg-ink text-paper flex flex-col justify-center gap-6 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.3)_0%,transparent_70%)]" />
          
          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 relative z-10">
            <div className="flex flex-col gap-1">
              <div className="font-serif text-[2.8rem] font-bold text-paper leading-none">82</div>
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper/50">
                Total Hours
              </div>
            </div>
            <div className="w-px bg-paper/15 self-stretch" />
            <div className="flex flex-col gap-1">
              <div className="font-serif text-[2.8rem] font-bold text-paper leading-none">12</div>
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper/50">
                Deliverables
              </div>
            </div>
            <div className="w-px bg-paper/15 self-stretch" />
            <div className="flex flex-col gap-1">
              <div className="font-serif text-[2.8rem] font-bold text-paper leading-none">3</div>
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper/50">
                Phases
              </div>
            </div>
          </div>

          {/* Total Box */}
          <div className="border border-paper/15 p-6 relative z-10">
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-paper/40 mb-2">
              Total Project Investment
            </div>
            <div className="font-serif text-[3.2rem] font-black text-paper leading-none">
              $4,920
            </div>
            <div className="text-[0.8rem] text-paper/50 mt-1">
              At <span className="text-accent">$60/hour</span> · 82 hours total
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
