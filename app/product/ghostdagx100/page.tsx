import PagePath from "@/components/PageDestination/PagePath";
import AboutProduct from "@/components/Products/AboutProduct/AboutProduct";
import ProductHero from "@/components/Products/ProductHero";
import Products from "@/components/Products/Products";
import { AllProductsAboutData } from "@/lib/products/allAboutData";
import { ProductHeroInfoData } from "@/lib/products/ProductHeroInfo";
import { ProductSliderData } from "@/lib/products/ProductSliderData";

function page() {
  return (
    <main>
      <PagePath pagePath="GhostDAG Payment Card" />
      <ProductHero
        ProductInfoData={ProductHeroInfoData.x100}
        ProductSlider={ProductSliderData.x100}
      />
      <AboutProduct data={AllProductsAboutData.x100} />
      <Products />
    </main>
  );
}

export default page;
