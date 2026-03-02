import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import WhyEVA from './components/WhyEVA'
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
      <WhyEVA />
      <SmartPillars />
      <TestimonialBar />
      <CTABanner />
    </>
  )
}
