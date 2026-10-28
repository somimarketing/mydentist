import { BottomCTA } from "@/components/site/bottom-cta";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ImageReveal } from "@/components/site/image-reveal";
import { Pricing } from "@/components/site/pricing";
import { Reveal } from "@/components/site/reveal";
import { ShowcaseCards } from "@/components/site/showcase-cards";
import { SkipToContent } from "@/components/site/skip-to-content";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Testimonials } from "@/components/site/testimonials";
import { ToolsCarousel } from "@/components/site/tools-carousel";
import { TrustedBy } from "@/components/site/trusted-by";
import { MobileCta } from "@/components/ui/mobile-cta";

/**
 * MyDentist, San Carlos.
 *
 * Built on the AI-SaaS template, rebuilt to the brand. Three things were cut
 * rather than restyled, because no amount of colour would have made them
 * true: the WebGL fluid cursor and ambient gradient (decoration standing in
 * for an image the clinic actually has), the invented competitor bar charts,
 * and the wall of fabricated client logos.
 *
 * Section order answers the questions a patient asks, in the order they ask
 * them: who are you, what is this like, what does it cost, who says so, what
 * about my case, where are you.
 */
export default function Page() {
  return (
    <SmoothScroll>
      <SkipToContent />
      <Header />
      <main id="main-content" className="w-full pb-[84px] md:pb-0">
        <Hero />
        <Reveal />
        <ImageReveal />
        <ToolsCarousel />
        <ShowcaseCards />
        <TrustedBy />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
      <MobileCta />
    </SmoothScroll>
  );
}
