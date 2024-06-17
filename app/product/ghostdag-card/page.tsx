import PagePath from "@/components/PageDestination/PagePath";
import Card from "@/components/Products/card/card";
import DicoverCard from "@/components/Products/card/DicoverCard";
import GetStartedCard from "@/components/Products/card/GetStartedCard";
import WhyLimit from "@/components/Products/card/WhyLimit";
import Products from "@/components/Products/Products";

function page() {
  return (
    <main>
      <PagePath pagePath="GhostDAG Payment Card" />
      <Card />
      <DicoverCard />
      <GetStartedCard />
      <WhyLimit />
      <Products />
    </main>
  );
}

export default page;
