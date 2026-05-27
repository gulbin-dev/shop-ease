import Link from "next/link";

export const PrimaryButton = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) => {
  return (
    <Link
      href=""
      className={`not-first:place-self-center px-3 py-1 text-size-md font-bold bg-accent-pink text-white rounded-2xl ${style}`}
    >
      {children}
    </Link>
  );
};

export const SecondaryButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Link
      href=""
      className="place-self-center px-3 py-1 text-size-md font-bold bg-primary border-4 text-center border-secondary rounded-2xl $"
    >
      {children}
    </Link>
  );
};
