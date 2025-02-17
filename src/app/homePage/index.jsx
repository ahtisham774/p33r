import { BenefitsSection } from '../../components/homePage/BenefitsSection'
import { CallToAction } from '../../components/homePage/CallToAction'
import { Contact } from '../../components/homePage/Contact'
import Container from '../../components/homePage/Container'
import { ExplorerSection } from '../../components/homePage/ExplorerSection'
import FAQTabs from '../../components/homePage/FAQ'
import { FeaturesBanner } from '../../components/homePage/FeatureBanner'
import { FeaturesGrid } from '../../components/homePage/FeaturesGrid'
import { Footer } from '../../components/homePage/Footer'
import { Hero } from '../../components/homePage/Hero'
import { MainBanner } from '../../components/homePage/MainBanner'
import { MobilePreview } from '../../components/homePage/MobilePreview'
import { Navbar } from '../../components/homePage/Navbar'
import NewsLetter from '../../components/homePage/NewLetter'
import { Testimonials } from '../../components/homePage/Testimonials'


const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center w-full bg-white'>
      <Container>
        <Navbar />
        <Hero />
        <FeaturesBanner />
      </Container>
      <MainBanner />
      <Container>
        <FeaturesGrid />
        <MobilePreview />
        <ExplorerSection />
        <BenefitsSection />
        <Testimonials />
        <CallToAction />
      </Container>
      <FAQTabs />
      <Container>
        <Contact />
        <NewsLetter />
        <Footer />
      </Container>
    </div>
  )
}

export default HomePage