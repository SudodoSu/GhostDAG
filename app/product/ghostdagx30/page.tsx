import PagePath from "@/components/PageDestination/PagePath";
import AboutProduct from "@/components/Products/AboutProduct/AboutProduct";
import ProductHero from "@/components/Products/ProductHero";
import Products from "@/components/Products/Products";
import { AllProductsAboutData } from "@/lib/products/allAboutData";

function page() {
  return (
    <main>
      <PagePath pagePath="GhostDAG Payment Card" />
      <ProductHero />
      <AboutProduct data={AllProductsAboutData.x30} />
      <Products />
    </main>
  );
}

export default page;
