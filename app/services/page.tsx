import ServiceHero from "@/components/ServiceHero"
import SecurityServices from "@/components/services/SecurityServices"
import ElectricalServices from "@/components/services/ElectricalServices"
import MechanicalServices from "@/components/services/MechanicalServices"
import DomesticServices from "@/components/services/DomesticServices"
import CallToAction from "@/components/CallToAction"

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <SecurityServices />
      <ElectricalServices />
      <MechanicalServices />
      <DomesticServices />
      <CallToAction />
    </>
  )
}

