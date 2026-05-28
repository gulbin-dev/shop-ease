import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeaturedLoader() {
  return (
    <div className="min-h-76.5">
      <div className="min-h-37.5">
        <Skeleton width="100%" height="100%" />
      </div>
      <h2 style={{ marginTop: "12px" }}>
        <Skeleton width="50%" />
      </h2>
      <p>
        <Skeleton count={2} width="20%" />
      </p>
      <p>
        <Skeleton count={2} width="30%" />
      </p>
      <Skeleton w- />
    </div>
  );
}
