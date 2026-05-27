"use client";

import Link from "next/link";
import { CartIcon } from "@/utils/tabler-icons";
import { useAppSelector } from "@/utils/redux-toolkit/typed-hooks";
import { LogoImageDisplay } from "./LogoImageDisplay";

export default function Header() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <header
      data-theme={theme}
      className="w-full max-h-12.5 text-white bg-secondary"
    >
      <div className="flex gap-3 justify-between items-center max-w-180">
        {" "}
        <Link href="/" className="col-start-1 col-span-3 bg-primary min-w-22">
          <LogoImageDisplay theme={theme} />
        </Link>
        <div className="mr-3 grid grid-cols-[min-content_min-content] gap-1.5 items-center">
          {" "}
          <button className="col-start-1 p-1.5 place-center ">
            <CartIcon stroke={2} size={24} />
          </button>
          <button className="col-start-2 flex flex-col gap-0.75 p-1.5 place-center">
            <span className=" bg-accent-pink h-0.5 w-3 block"></span>
            <span className=" bg-accent-pink h-0.5 w-3 block"></span>
            <span className=" bg-accent-pink h-0.5 w-3 block"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
