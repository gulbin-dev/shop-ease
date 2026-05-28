"use client";

import Image from "next/image";
import { Category, Response } from "@utils/types";
import { use } from "react";
import Link from "next/link";
import ComponentError from "@components/UI/ComponentError";
import { useState } from "react";
import { sourceNormalizer } from "@utils/image-source-normalizer";
import useImageSourceChecker from "@hooks/useImageSourceChecker";
const CardCategory = ({
  name,
  image,
  slug,
}: {
  name: string;
  image: string;
  slug: string;
}) => {
  const [imgSrc, setImgSrc] = useState(image);
  const [isSvg, setIsSvg] = useState(false);
  useImageSourceChecker({ src: imgSrc, setIsSvg });
  const imageSource = sourceNormalizer(imgSrc);
  return (
    <Link
      href=""
      className="relative rounded-2xl bg-secondary flex flex-col gap-1 pb-2"
    >
      <div className="relative min-h-20">
        <Image
          src={imageSource}
          alt={name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            setImgSrc("/image-not-found.webp");
          }}
          fill
          unoptimized={isSvg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-2xl min-h-20"
        />
      </div>

      <h3 className="text-size-sm  font-bold text-white text-center">{name}</h3>
    </Link>
  );
};

export default function CardCategoryContainer({
  category,
}: {
  category: Promise<Response<Category>>;
}) {
  const response = use(category);

  if (response.error.state)
    return (
      <ComponentError
        type={response.error.type}
        status={response.error.status}
        message={response.error.message}
      />
    );
  return (
    <div className="grid grid-cols-2 grid-auto-rows gap-3">
      {response.data.slice(0, 6).map((category: Category) => (
        <CardCategory
          key={category.id}
          name={category.name}
          image={category.image}
          slug={category.slug}
        />
      ))}
    </div>
  );
}
