import DevReleases from "@/components/DevReleases/DevReleases";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Presale from "@/components/Presale/Presale";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <Presale />
      <DevReleases />
    </main>
  );
}
