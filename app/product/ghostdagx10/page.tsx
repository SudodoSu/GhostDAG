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
      <PagePath pagePath="GhostDAG X10" />
      <ProductHero
        ProductInfoData={ProductHeroInfoData.x10}
        ProductSlider={ProductSliderData.x10}
      />
      <AboutProduct data={AllProductsAboutData.x10} />
      <Products />
    </main>
  );
}

export default page;
