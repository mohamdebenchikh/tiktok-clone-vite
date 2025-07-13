import { useNavigate } from "react-router";
import { useLoading } from "@/contexts/loading-context";

interface NavigateOptions {
  message?: string;
  delay?: number;
  state?: any;
}

export const useNavigateWithLoading = () => {
  const navigate = useNavigate();
  const { startNavigation, finishNavigation } = useLoading();

  const navigateWithLoading = (to: string, options: NavigateOptions = {}): void => {
    const {
      message = "Loading...",
      delay = 600,
      state
    } = options;

    // Start loading state
    startNavigation(message);

    // Navigate after a short delay to show the loading screen
    setTimeout(() => {
      navigate(to, state ? { state } : {});

      // Finish loading after a short delay to allow the page to mount
      setTimeout(() => {
        finishNavigation();
      }, 200);
    }, delay);
  };

  return navigateWithLoading;
};
