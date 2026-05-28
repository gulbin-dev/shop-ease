import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategoryCardLoader() {
  return (
    <div className="w-32 h-26 bg-gray-200 animate-pulse">
      <div className="min-h-20">
        <Skeleton width="100%" height="100%" />
      </div>
      <h3>
        <Skeleton width="30%" />
      </h3>
    </div>
  );
}
