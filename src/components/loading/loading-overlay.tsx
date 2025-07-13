import { useLoading } from "@/contexts/loading-context";
import Loading from "./loading";

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white z-50">
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
