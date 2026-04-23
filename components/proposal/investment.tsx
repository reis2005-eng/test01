import { Section } from "./section"
import { NoteBox } from "./note-box"

export function Investment() {
  return (
    <Section number="04" title="Investment & Hours">
      <table className="w-full border-collapse border border-rule">
        <thead>
          <tr>
            <th className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted text-left px-5 py-3 border-b border-rule bg-highlight">
              Service
            </th>
            <th className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted text-left px-5 py-3 border-b border-rule bg-highlight">
              Hours
            </th>
            <th className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted text-left px-5 py-3 border-b border-rule bg-highlight">
              Rate
            </th>
            <th className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted text-left px-5 py-3 border-b border-rule bg-highlight">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-5 py-4 text-[0.88rem] border-b border-rule align-top">
              Design — 6 pages, 12 visual assets, restoration of original design standards
            </td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">46 hrs</td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">$60/hr</td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">$2,760</td>
          </tr>
          <tr>
            <td className="px-5 py-4 text-[0.88rem] border-b border-rule align-top">
              Development — implementation across 6 pages, typography and layout corrections
            </td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">36 hrs</td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">$60/hr</td>
            <td className="px-5 py-4 font-mono text-[0.85rem] border-b border-rule align-top">$2,160</td>
          </tr>
          <tr className="bg-ink text-paper">
            <td className="px-5 py-4 font-serif text-base font-bold">
              Total Project Investment
            </td>
            <td className="px-5 py-4 font-mono text-base font-bold">82 hrs</td>
            <td className="px-5 py-4 font-mono text-base font-bold">$60/hr</td>
            <td className="px-5 py-4 font-mono text-base font-bold">$4,920</td>
          </tr>
        </tbody>
      </table>
      
      <NoteBox>
        <strong className="text-ink font-medium">Additional work:</strong> Any work outside the defined scope — extra revisions, new image requests, structural changes, copywriting — is billed at $60/hour and requires written agreement before proceeding.
      </NoteBox>
    </Section>
  )
}
