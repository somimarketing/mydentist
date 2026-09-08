import { Header1 } from "@/components/ui/header";
import { MobileCta } from "@/components/ui/mobile-cta";
import Hero9 from "@/components/blocks/hero-9";
import SocialProof8 from "@/components/blocks/social-proof-8";
import Features7 from "@/components/blocks/features-7";
import HowItWorks6 from "@/components/blocks/how-it-works-6";
import Comparison2 from "@/components/blocks/comparison-2";
import Showcase6 from "@/components/blocks/showcase-6";
import Stats11 from "@/components/blocks/stats-11";
import About1 from "@/components/blocks/about-1";
import SocialProof16 from "@/components/blocks/social-proof-16";
import Pricing1 from "@/components/blocks/pricing-1";
import Faq4 from "@/components/blocks/faq-4";
import Cta2 from "@/components/blocks/cta-2";
import Contact3 from "@/components/blocks/contact-3";
import Footer2 from "@/components/blocks/footer-2";

/**
 * MyDentist, San Carlos
 *
 * Composed with the React Bits Landing Builder, harmonized into the
 * MyDentist design system.
 *
 * The wrapper below sets `--rb-section-min-h: 0px`, which lets content
 * sections take their natural height instead of each filling the viewport.
 * Remove it and every section reverts to full-screen, which is the correct
 * behaviour when a block is used on its own.
 */
export default function Page() {
  return (
    <>
      <Header1 />
      <main
        className="w-full pb-[84px] md:pb-0"
        style={{ "--rb-section-min-h": "0px" } as React.CSSProperties}
      >
        <Hero9 />
        <SocialProof8 />
        <Features7 />
        <HowItWorks6 />
        <Comparison2 />
        <Showcase6 />
        <Stats11 />
        <About1 />
        <SocialProof16 />
        <Pricing1 />
        <Faq4 />
        <Cta2 />
        <Contact3 />
        <Footer2 />
      </main>
      <MobileCta />
    </>
  );
}
