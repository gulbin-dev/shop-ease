"use client";
import { use, useRef } from "react";
import { Product, Response } from "@utils/types";
import Image from "next/image";
import useCarouselAnimation from "@hooks/useCarouselAnimation";
import { RatingIcon } from "@utils/tabler-icons";
import { PrimaryButton } from "@/components/UI/Button";
import { Suspense } from "react";
import ComponentError from "@components/UI/ComponentError";

interface CardProductProp {
  thumbnail: string;
  title: string;
  price: number;
}

const CardProduct = ({ thumbnail, title, price }: CardProductProp) => {
  console.log(thumbnail);

  const sourceNormalizer = thumbnail.includes("https")
    ? thumbnail
    : `https://${thumbnail}`;

  return (
    <div className="card-product absolute inset-0 flex flex-col tablet:relative">
      <Image
        src={sourceNormalizer}
        alt={title}
        onError={(e) => (e.currentTarget.src = "/image-not-found.webp")}
        width={272}
        height={300}
        className="object-cover mx-auto max-h-37.5 min-h-37.5"
      />
      <div className="bg-secondary p-3 min-h-38 text-white grid grid-rows-[auto_auto_1fr_auto] gap-1.5 rounded-2xl">
        <h3 className="row-start-1 text-size-md font-bold line-clamp-2">
          {title}
        </h3>
        <p className="row-start-2 flex items-center gap-2">
          <span className="flex gap-0.5">
            <RatingIcon size={16} color="yellow" />
            <RatingIcon size={16} color="yellow" />
            <RatingIcon size={16} color="yellow" />
            <RatingIcon size={16} color="yellow" />
            <RatingIcon size={16} color="yellow" />
          </span>
          <span className="font-bold">5</span>
        </p>
        <div className="row-start-3  flex gap-5 max-w-[90%] relative">
          <span className="font-bold text-size-md">${price}</span>
        </div>

        <PrimaryButton style="row-start-4">Buy Now</PrimaryButton>
      </div>
    </div>
  );
};

export default function ProductsContainer({
  products,
  slice,
}: {
  products: Promise<Response<Product>>;
  slice: number[];
}) {
  const response = use(products);
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(response);
  useCarouselAnimation({
    containerRef,
    listOfCards: ".card-product",
    interval: 5000,
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
      className="relative pt-px flex overflow-hidden min-h-81 tablet:grid tablet:grid-cols-5 tablet:grid-flow-row gap-3"
    >
      {response.data.slice(slice[0], slice[1]).map((product) => (
        <Suspense key={product.id} fallback={<div>Loading...</div>}>
          <CardProduct
            key={product.id}
            thumbnail={product.images[0]}
            title={product.title}
            price={product.price}
          />
        </Suspense>
      ))}
    </div>
  );
}
