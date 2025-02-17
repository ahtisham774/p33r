"use client"
import {Navbar} from "../../components/landingPage/Navbar";
import {Hero} from "../../components/landingPage/Hero";
import {FeaturesBanner} from "../../components/landingPage/FeaturesBanner";
import {FeaturesGrid} from "../../components/landingPage/FeaturesGrid";
import {MainBanner} from "../../components/landingPage/MainBanner";
import {MobilePreview} from "../../components/landingPage/MobilePreview";
import {ExplorerSection} from "../../components/landingPage/ExplorerSection";
import {BenefitsSection} from "../../components/landingPage/BenefitsSection";
import {Testimonials} from "../../components/landingPage/Testimonials";
import {CallToAction} from "../../components/landingPage/CallToAction";
import {FAQ} from "../../components/landingPage/FAQ";
import {Contact} from "../../components/landingPage/Contact";
import {Footer} from "../../components/landingPage/Footer";




const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center px-4 md:px-6 w-full lg:px-16 bg-white'>
    <Navbar />
    <Hero />
    <FeaturesBanner />
    <MainBanner />
    <FeaturesGrid />
    <MobilePreview />
    <ExplorerSection />
    <BenefitsSection />
    <Testimonials />
    <CallToAction />
    <FAQ />
    <Contact />
    <Footer />
  </div>
  )
}

export default LandingPage