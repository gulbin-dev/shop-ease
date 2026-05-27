"use client";

import { useState } from "react";
import Image from "next/image";
import { RatingIcon } from "@utils/tabler-icons";

interface CardProductProp {
  thumbnail: string;
  title: string;
  price: number;
  children?: React.ReactNode;
  isFeatured?: boolean;
}

export default function CardProduct({
  thumbnail,
  title,
  price,
  children,
  isFeatured,
}: CardProductProp) {
  const [imgSrc, setImgSrc] = useState(thumbnail);

  const sourceNormalizer = imgSrc.includes("https")
    ? imgSrc
    : imgSrc.includes("image-not-found.webp")
      ? imgSrc
      : `https://${imgSrc}`;

  return (
    <div
      className={`card-product flex flex-col ${isFeatured ? "absolute inset-0 tablet:relative" : "relative"}`}
    >
      <div className={`relative ${isFeatured ? "min-h-37.5" : "min-h-25"}`}>
        <Image
          src={sourceNormalizer}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            setImgSrc("/image-not-found.webp");
          }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover mx-auto max-h-37.5 rounded-t-2xl`}
        />
      </div>
      <div
        className={`bg-secondary p-3 text-white grid grid-rows-[auto_auto_1fr_auto] rounded-b-2xl gap-1.5 ${isFeatured ? "min-h-38" : "min-h-24 "}`}
      >
        <h3
          className={`row-start-1 font-bold line-clamp-2 ${isFeatured ? "text-size-md" : "text-size-sm"}`}
        >
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

        {children}
      </div>
    </div>
  );
}
