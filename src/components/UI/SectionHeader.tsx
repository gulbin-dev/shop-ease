export default function SectionHeader({ children }: { children: string }) {
  return (
    <div className="relative before:h-1.25 before:w-[35%] before:bg-secondary before:absolute before:-top-1 after:h-1.25 after:w-[25%] after:bg-secondary after:absolute after:-bottom-1 after:right-0 tablet:before:w-[20%] tablet:after:w-[10%]">
      <h2 className="text-size-xl font-bold pl-3 py-3">{children}</h2>
    </div>
  );
}
