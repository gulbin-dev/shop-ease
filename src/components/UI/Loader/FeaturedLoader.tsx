import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeaturedLoader() {
  return (
    <div className="max-h-76.5 h-full mt-4 bg-blue-800 pb-4">
      <Skeleton width="100%" className="min-h-37.5" />
      <Skeleton width="100%" className="my-1.5 min-h-5" />
      <Skeleton count={1} width="75%" className="my-1.5" />
      <Skeleton count={1} width="30%" className="my-1.5" />
      <Skeleton count={1} width="45%" className="min-h-5 my-1.5" />
    </div>
  );
}
