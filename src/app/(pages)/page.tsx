import { SearchIcon } from "@utils/tabler-icons";
import PromoBannerContainer from "./_components/PromoBannerContainer";
import Hero from "./_components/Hero";
import ProductsContainer from "./_components/ProductsContainer";
import { fetchProducts } from "@server/fetch-products";
import { fetchcategory } from "@server/fetch-category";
import PageContentContainer from "@components/PageContentContainer";
import ToggleThemeButton from "./_components/ToggleThemeButton";
import SectionHeader from "@components/UI/SectionHeader";
import CardCategoryContainer from "@components/UI/CardCategoryContainer";
import { PrimaryButton } from "@/components/UI/Button";
export default function HomePage() {
  const getProducts = fetchProducts();
  const getCategories = fetchcategory();
  // since the third party API does not provide sorting or skipping,
  // I have to make a workaround
  const topProductSlice = [0, 5];
  const newProductSlice = [5, 10];
  return (
    <PageContentContainer>
      <section className="px-3 max-w-180 pt-1 text-secondary-foreground">
        <h1 className="text-size-xl font-bold mt-2">
          Top Online Shopping Store with ShopEase
        </h1>
        <button className="flex gap-1.5 bg-accent-pink rounded-2xl text-black text-size-sm px-3 py-1 min-w-[80vw] mt-4 text-start">
          <SearchIcon size={20} stroke={2} /> Black T-shirt
        </button>

        <PromoBannerContainer />
        <Hero />
      </section>
      <section className="mt-10">
        <SectionHeader>Top Products</SectionHeader>
        <div className="px-3 mt-4">
          <ProductsContainer products={getProducts} slice={topProductSlice} />
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader>New Arrivals</SectionHeader>
        <div className="px-3 mt-4">
          <ProductsContainer products={getProducts} slice={newProductSlice} />
        </div>

        <div className="mt-10">
          <SectionHeader>Categories</SectionHeader>
          <div className="px-3 mt-4 ">
            <CardCategoryContainer category={getCategories} />
          </div>
        </div>

        <div className="mt-10 flex flex-col bg-primary border-4 border-secondary text-black dark:text-white rounded-2xl text-size-md mx-3 p-3">
          <p>
            Get Alerted Before the Best Deals{" "}
            <span className="text-secondary dark:text-accent-yellow font-bold">
              SELL OUT
            </span>
            .
          </p>
          <PrimaryButton style="mt-3">Subscribe</PrimaryButton>
        </div>
      </section>

      {/* <ToggleThemeButton>Toggle Theme</ToggleThemeButton> */}
    </PageContentContainer>
  );
}
