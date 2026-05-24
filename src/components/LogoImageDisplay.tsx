import Image from "next/image";

const logoProps = {
  width: 215,
  height: 60,
  loading: "eager" as const,
  className: "bg-primary p-2 rounded-r-xl aspect-43/12 object-contain",
};

const logoSrc = {
  light: "/logo-shop-ease.png",
  dark: "/logo-shop-ease-dark.png",
} as const;

export function LogoImageDisplay({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className="relative inline-flex min-h-7.5 p-1">
      <Image
        src={logoSrc.light}
        alt="ShopEase Logo"
        {...logoProps}
        className={`${theme === "light" ? "block" : "hidden"}`}
        aria-hidden={theme !== "light"}
      />
      <Image
        src={logoSrc.dark}
        alt="ShopEase Logo"
        {...logoProps}
        className={` ${theme === "dark" ? "block" : "hidden"}`}
        aria-hidden={theme !== "dark"}
      />
    </div>
  );
}
