"use client";

import { useAppSelector } from "@utils/redux-toolkit/typed-hooks";

export default function PageContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <main
      data-theme={theme}
      className="bg-primary text-secondary-foreground pb-10 flex flex-col items-center transition-colors duration-300"
    >
      {children}
    </main>
  );
}
