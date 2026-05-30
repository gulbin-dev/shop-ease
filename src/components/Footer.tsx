"use client";

import { LogoImageDisplay } from "./LogoImageDisplay";
import { useAppSelector } from "@/utils/redux-toolkit/typed-hooks";
import { GithubIcon, WebsiteIcon, LinkedInIcon } from "@/utils/tabler-icons";
import Link from "next/link";

const IconSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="bg-accent-pink p-1 block text-white rounded-2xl"
      aria-hidden
    >
      {children}
    </span>
  );
};
export default function Footer() {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <footer
      data-theme={theme}
      className="bg-secondary text-white transition-colors duration-300"
    >
      <div className="w-full justify-self-center max-w-180">
        {" "}
        <div className="bg-primary p-1 w-fit rounded-br-2xl desktop:rounded-b-2xl">
          <LogoImageDisplay theme={theme} />
        </div>
        <div className="mt-2 px-3">
          <p className="text-size-sm">
            This e-commerce website is for demonstration only. Made by frontend
            developer Joshua Glenn R. Gulbin.
          </p>
        </div>
        <ul className="flex gap-2.5 pl-3 pt-3">
          <li>
            <Link href="/" aria-label="Visit my portfolio website">
              <IconSpan>
                <WebsiteIcon size={38} />
              </IconSpan>
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Visit my Github profile">
              <IconSpan>
                <GithubIcon size={38} />
              </IconSpan>
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Visit my LinkedIn profile">
              <IconSpan>
                <LinkedInIcon size={38} />
              </IconSpan>
            </Link>
          </li>
        </ul>
        <p className="text-size-sm text-center p-3">
          {" "}
          &copy; ShopEase 2026.All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
