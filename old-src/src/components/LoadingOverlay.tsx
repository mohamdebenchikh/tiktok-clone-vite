import { useIsLoading } from "../store/hooks";
import Loading from "./Loading.tsx";

const LoadingOverlay = () => {
  const isLoading = useIsLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-white z-50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
