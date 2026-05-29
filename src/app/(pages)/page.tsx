import PromoBannerContainer from "./_components/PromoBannerContainer";
import Hero from "./_components/Hero";
import FeatureProductsContainer from "./_components/FeatureProductsContainer";
import { fetchProducts } from "@server/fetch-products";
import { fetchcategory } from "@server/fetch-category";
import PageContentContainer from "@components/PageContentContainer";
import SectionHeader from "@components/UI/SectionHeader";
import CardCategoryContainer from "@components/CardCategoryContainer";
import { PrimaryButton } from "@components/UI/Button";
import { Suspense } from "react";
import { SecondaryButton } from "@components/UI/Button";
import SearchContainer from "@components/SearchContainer";
import FeaturedLoader from "@/components/UI/Loader/FeaturedLoader";
import CategoryCardLoader from "@/components/UI/Loader/CategoryCardLoader";

export default function HomePage() {
  const getProducts = fetchProducts();

  const getCategories = fetchcategory();
  // since the third party API does not provide sorting or skipping,
  // I have to make a workaround
  const topProductSlice = [0, 6];
  const newProductSlice = [6, 12];
  return (
    <PageContentContainer>
      <section className="max-w-180 pt-1 text-secondary-foreground grid grid-cols-3 grid-flow-row auto-rows-[60px] gap-2 items-center">
        <h1 className="text-size-xl font-bold mt-5 px-3 col-start-1 col-span-3 row-start-1 row-span-2 z-3">
          Top Online Shopping Store with ShopEase
        </h1>
        <SearchContainer />
        <PromoBannerContainer />
        <Hero />
      </section>
      <section className="mt-10">
        <SectionHeader>Top Products</SectionHeader>
        <div className="px-3 mt-4">
          <Suspense fallback={<FeaturedLoader />}>
            <FeatureProductsContainer
              products={getProducts}
              slice={topProductSlice}
            />
          </Suspense>
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader>New Arrivals</SectionHeader>
        <div className="px-3 mt-4">
          <Suspense fallback={<FeaturedLoader />}>
            <FeatureProductsContainer
              products={getProducts}
              slice={newProductSlice}
            />
          </Suspense>
        </div>

        <div className="mt-10">
          <SectionHeader>Categories</SectionHeader>
          <div className="px-3 mt-6">
            <Suspense fallback={<CategoryCardLoader />}>
              <div className="flex flex-col gap-3">
                <CardCategoryContainer category={getCategories} />
                <SecondaryButton>See more</SecondaryButton>
              </div>
            </Suspense>
          </div>
        </div>

        <div className="mt-8 flex flex-col bg-primary border-4 border-secondary text-black dark:text-white rounded-2xl text-size-md mx-3 p-3 tablet:max-w-60 tablet:mx-auto">
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
    </PageContentContainer>
  );
}
