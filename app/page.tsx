import { Header } from "@/components/proposal/header"
import { ScopeOfWork } from "@/components/proposal/scope-of-work"
import { DeliveryPhases } from "@/components/proposal/delivery-phases"
import { Timeline } from "@/components/proposal/timeline"
import { Investment } from "@/components/proposal/investment"
import { PaymentSchedule } from "@/components/proposal/payment-schedule"
import { Responsibilities } from "@/components/proposal/responsibilities"
import { PostDelivery } from "@/components/proposal/post-delivery"
import { ValidityBanner, Footer } from "@/components/proposal/validity-banner"

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-[1100px] mx-auto px-6 md:px-12">
        <ScopeOfWork />
        <DeliveryPhases />
        <Timeline />
        <Investment />
        <PaymentSchedule />
        <Responsibilities />
        <PostDelivery />
      </main>
      
      <ValidityBanner />
      <Header />
      <Footer />
    </div>
  )
}
