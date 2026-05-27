export default function SectionHeader({ children }: { children: string }) {
  return (
    <div className="relative">
      <h2 className="text-size-xl font-bold pl-3 before:h-1.25 before:w-[35%] before:bg-secondary before:absolute before:-top-1 after:h-1.25 after:w-[25%] after:bg-secondary after:absolute after:-bottom-1 after:right-0">
        {children}
      </h2>
    </div>
  );
}
