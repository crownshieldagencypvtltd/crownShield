import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import WhyChooseUs from "@/components/WhyChooseUs"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import FaqSection from "@/components/FaqSection"
import CallToAction from "@/components/CallToAction"
import cms from "@/lib/cms"

export default function Home() {
  return (
    <>
      <Hero data={cms.pages.home.hero} />
      <ServicesOverview data={cms.pages.home.services} />
      <WhyChooseUs data={cms.pages.home.whyChooseUs} />
      <Stats data={cms.pages.home.stats} />
      <Testimonials data={cms.pages.home.testimonials} />
      <FaqSection data={cms.pages.home.faq} />
      <CallToAction data={cms.shared.callToAction} />
    </>
  )
}

