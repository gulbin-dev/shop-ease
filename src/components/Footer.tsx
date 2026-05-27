"use client";

import { LogoImageDisplay } from "./LogoImageDisplay";
import { useAppSelector } from "@/utils/redux-toolkit/typed-hooks";

export default function Footer() {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <footer data-theme={theme} className="bg-secondary text-white">
      <div className="bg-primary w-fit p-1 rounded-br-2xl">
        <LogoImageDisplay theme={theme} />
      </div>

      <div className="mt-2 px-3">
        <p className="">
          This e-commerce website is for demonstration only. Made by frontend
          developer Joshua Glenn R. Gulbin.
        </p>
      </div>
      <p> &copy; ShopEase 2026.All Rights Reserved.</p>
    </footer>
  );
}
