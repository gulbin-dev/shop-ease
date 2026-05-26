"use client";

import Image from "next/image";
import { Category, Response } from "@utils/types";
import { use } from "react";
import Link from "next/link";
import { SecondaryButton } from "@/components/UI/Button";
import ComponentError from "@components/UI/ComponentError";
const CardCategory = ({
  name,
  image,
  slug,
}: {
  name: string;
  image: string;
  slug: string;
}) => {
  return (
    <Link
      href=""
      className="relative rounded-2xl bg-secondary min-h-20 flex flex-col gap-1 pb-2"
    >
      <Image
        src={image}
        alt={name}
        onError={(e) => (e.currentTarget.src = "/image-not-found.webp")}
        width={160}
        height={160}
        className="object-contain rounded-t-2xl"
      />
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
      {response.data.slice(0, 5).map((category: Category) => (
        <CardCategory
          key={category.id}
          name={category.name}
          image={category.image}
          slug={category.slug}
        />
      ))}
      <SecondaryButton>See more</SecondaryButton>
    </div>
  );
}
