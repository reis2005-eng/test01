import { Section } from "./section"
import { NoteBox } from "./note-box"

export function DeliveryPhases() {
  return (
    <Section number="02" title="Delivery Phases">
      <div className="flex flex-col lg:flex-row gap-px bg-rule border border-rule">
        <Phase 
          number="01" 
          title="4 Static Images" 
          description="First batch of static visual assets for review and approval"
          isLast={false}
        />
        <Phase 
          number="02" 
          title="4 Static Images" 
          description="Second batch of static assets — triggers 40% milestone payment"
          isLast={false}
        />
        <Phase 
          number="03" 
          title="4 Dynamic Images" 
          description="Animated and motion-based visual assets — final design phase"
          isLast={true}
        />
      </div>
      
      <NoteBox>
        <strong className="text-ink font-medium">Approval protocol:</strong> Each phase must be fully delivered, reviewed, and approved before the next phase begins. An asset is considered approved upon explicit client confirmation, or if no feedback is received within <strong className="text-ink font-medium">48 hours</strong> of delivery.
      </NoteBox>
    </Section>
  )
}

function Phase({ 
  number, 
  title, 
  description, 
  isLast 
}: { 
  number: string
  title: string
  description: string
  isLast: boolean
}) {
  return (
    <div className="flex-1 bg-paper p-6 md:p-8 relative">
      {/* Arrow connector */}
      {!isLast && (
        <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent text-base z-10 bg-paper px-1">
          →
        </span>
      )}
      <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-3">
        Phase {number}
      </div>
      <h3 className="font-serif text-base font-bold mb-2">{title}</h3>
      <p className="text-[0.82rem] text-muted">{description}</p>
      <div className="mt-4 flex flex-col gap-1">
        <StepItem>Deliver</StepItem>
        <StepItem>Review</StepItem>
        <StepItem>Approve</StepItem>
      </div>
    </div>
  )
}

function StepItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.78rem] text-ink flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-rule border-[1.5px] border-muted shrink-0" />
      {children}
    </div>
  )
}
