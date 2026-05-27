import Image from "next/image";
import { Category } from "@utils/types";
import { use } from "react";
import Link from "next/link";
import { SecondaryButton } from "@/components/UI/Button";
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
      className="relative rounded-2xl bg-secondary min-h-20 flex gap-1"
    >
      <Image
        src={image}
        alt={name}
        width={160}
        height={160}
        className="object-contain rounded-l-2xl"
      />
      <h3 className="text-size-lg mt-3 font-bold text-white text-end">
        {name}
      </h3>
    </Link>
  );
};

export default function CardCategoryContainer({
  category,
}: {
  category: Promise<Category[]>;
}) {
  const categories = use(category);
  console.log(categories);
  return (
    <div className="flex flex-col gap-3">
      {categories.slice(0, 3).map((category: Category) => (
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
