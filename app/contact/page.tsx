import ContactHero from "@/components/ContactHero"
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import MapLocation from "@/components/MapLocation"
import cms from "@/lib/cms"

export default function ContactPage() {
  const { hero, contactInfo, mapLocation } = cms.pages.contact

  return (
    <>
      <ContactHero data={hero} />
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <ContactInfo data={contactInfo} />
          <MapLocation data={mapLocation} />
        </div>
      </div>
    </>
  )
}

