import { ReactNode } from "react"

interface NoteBoxProps {
  children: ReactNode
}

export function NoteBox({ children }: NoteBoxProps) {
  return (
    <div className="bg-highlight border-l-[3px] border-accent px-6 py-5 mt-6 text-[0.85rem] text-muted leading-relaxed">
      {children}
    </div>
  )
}
