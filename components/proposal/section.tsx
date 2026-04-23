"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface SectionProps {
  number: string
  title: string
  children: ReactNode
}

export function Section({ number, title, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`border-b border-rule py-16 transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="flex items-baseline gap-6 mb-10">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent min-w-[40px]">
          {number}
        </span>
        <h2 className="font-serif text-[1.8rem] font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
