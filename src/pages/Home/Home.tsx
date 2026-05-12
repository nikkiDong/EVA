import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import SmartPillars from './components/SmartPillars'
import ServicePreviewCards from './components/ServicePreviewCards'
import TestimonialBar from './components/TestimonialBar'
import CTABanner from './components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicePreviewCards />
      <SmartPillars />
      <TestimonialBar />
      <CTABanner />
    </>
  )
}
