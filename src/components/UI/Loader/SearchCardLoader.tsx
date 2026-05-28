import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = () => {
  return (
    <div className="bg-gray-200 h-full max-h-49 relative">
      <div className="min-h-25">
        <Skeleton className="h-25" width="100%" />
      </div>
      <div className="pt-3 px-3 flex flex-col gap-2.5">
        <Skeleton width="100%" />
        <Skeleton width="45%" />

        <Skeleton width="45%" />
      </div>
    </div>
  );
};
export default function SearchCardLoader() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
