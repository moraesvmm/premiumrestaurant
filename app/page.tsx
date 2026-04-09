import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Menu from "@/components/sections/Menu"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Experience from "@/components/sections/Experience"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <WhyChooseUs />
      <Experience />
      <CTA />
      <Footer />
    </main>
  )
}
