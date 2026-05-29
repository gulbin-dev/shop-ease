"use client";
import { use, useRef } from "react";
import { Product, Response } from "@utils/types";
import useCarouselAnimation from "@hooks/useCarouselAnimation";
import { PrimaryButton } from "@components/UI/Button";
import ComponentError from "@components/UI/ComponentError";
import CardProduct from "@components/CardProduct";

export default function FeatureProductsContainer({
  products,
  slice,
}: {
  products: Promise<Response<Product>>;
  slice: number[];
}) {
  const response = use(products);
  const containerRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation({
    containerRef,
    config: {
      shouldAnimateOnTablet: false,
      listOfCards: ".card-product",
      interval: 5000,
    },
  });
  if (response.error.state)
    return (
      <ComponentError
        type={response.error.type}
        status={response.error.status}
        message={response.error.message}
      />
    );
  return (
    <div
      ref={containerRef}
      className="relative pt-px flex overflow-hidden min-h-76.5 tablet:grid tablet:grid-cols-3 tablet:grid-flow-row gap-3"
    >
      {response.data.slice(slice[0], slice[1]).map((product) => (
        <CardProduct
          key={product.id}
          thumbnail={product.images[0]}
          title={product.title}
          price={product.price}
          isFeatured
        >
          <PrimaryButton style="row-start-4">Buy Now</PrimaryButton>
        </CardProduct>
      ))}
    </div>
  );
}
