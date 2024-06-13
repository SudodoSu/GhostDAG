import About from "@/components/About/About";
import CoreAttributes from "@/components/CoreAttributes/CoreAttributes";
import DevReleases from "@/components/DevReleases/DevReleases";
import HeroSection from "@/components/HeaderSection/HeroSection";
import PoweredBy from "@/components/PoweredBy/PoweredBy";
import Presale from "@/components/Presale/Presale";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import YoutubeSection from "@/components/YoutubeSection/YoutubeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Presale />
      <DevReleases />
      <YoutubeSection />
      <About />
      <PoweredBy />
      <CoreAttributes />
      <Tokenomics />
    </main>
  );
}
