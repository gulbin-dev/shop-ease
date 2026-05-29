"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import ToggleThemeButton from "@components/UI/ToggleThemeButton";
import { useAppSelector } from "@utils/redux-toolkit/typed-hooks";
import { LightIcon, DarkIcon } from "@/utils/tabler-icons";

export default function NavLinks({
  updateState,
}: {
  updateState: Dispatch<SetStateAction<boolean>> | undefined;
}) {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <nav>
      <ul className="flex flex-col items-end gap-4 text-size-md">
        <li>
          <Link href="/" onClick={() => updateState?.(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/categories" onClick={() => updateState?.(false)}>
            Categories
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => updateState?.(false)}>
            About
          </Link>
        </li>
        <li>
          <ToggleThemeButton updateState={updateState}>
            {theme === "light" ? (
              <DarkIcon size={24} color="white" />
            ) : (
              <LightIcon size={24} color="white" />
            )}
          </ToggleThemeButton>
        </li>
      </ul>
    </nav>
  );
}
