import { Section } from "./section"
import { NoteBox } from "./note-box"

export function PaymentSchedule() {
  return (
    <Section number="05" title="Payment Schedule">
      <div className="flex flex-col md:flex-row border border-rule overflow-hidden">
        <PaymentStep 
          tag="On Start" 
          percentage="40%" 
          amount="$1,968" 
          when="Due at project kickoff, before work begins"
        />
        <PaymentStep 
          tag="After Phase 2" 
          percentage="40%" 
          amount="$1,968" 
          when="Due upon approval of Phase 2 deliverables"
        />
        <PaymentStep 
          tag="Before Delivery" 
          percentage="20%" 
          amount="$984" 
          when="Final payment before handoff and launch"
          isLast
        />
      </div>
      
      <NoteBox>
        <strong className="text-ink font-medium">Important:</strong> Work will pause if any payment is delayed beyond the agreed milestone. Continued progress is contingent on payments being made on schedule.
      </NoteBox>
    </Section>
  )
}

function PaymentStep({ 
  tag, 
  percentage, 
  amount, 
  when, 
  isLast = false 
}: { 
  tag: string
  percentage: string
  amount: string
  when: string
  isLast?: boolean
}) {
  return (
    <div className={`flex-1 p-6 md:p-8 ${!isLast ? 'border-b md:border-b-0 md:border-r border-rule' : ''}`}>
      <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3">
        {tag}
      </div>
      <div className="font-serif text-[3rem] font-black leading-none text-accent2">
        {percentage}
      </div>
      <div className="font-mono text-base text-ink font-medium mt-1 mb-1">
        {amount}
      </div>
      <div className="text-[0.8rem] text-muted leading-relaxed">
        {when}
      </div>
    </div>
  )
}
