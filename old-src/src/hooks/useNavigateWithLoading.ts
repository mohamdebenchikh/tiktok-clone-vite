import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startNavigation, finishNavigation } from "../store/slices/appSlice";
import type { AppDispatch } from "../store/index";

interface NavigateOptions {
    message?: string;
    delay?: number;
    state?: any;
}

export const useNavigateWithLoading = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const navigateWithLoading = (to: string, options: NavigateOptions = {}): void => {
        const {
            message = "Loading...",
            delay = 600,
            state
        } = options;

        // Start loading state
        dispatch(startNavigation({
            message
        }));

        // Navigate after a short delay to show the loading screen
        setTimeout(() => {
            navigate(to, state ? {
                state
            } : {});

            // Finish loading after a short delay to allow the page to mount
            setTimeout(() => {
                dispatch(finishNavigation());
            }, 200);
        }, delay);
    };

    return navigateWithLoading;
};