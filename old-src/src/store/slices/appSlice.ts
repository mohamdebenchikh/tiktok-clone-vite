import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    isLoading: boolean;
    loadingMessage: string;
}

interface NavigationPayload {
    message?: string;
}

const initialState: AppState = {
    isLoading: false,
    loadingMessage: "Loading...",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setLoadingMessage: (state, action: PayloadAction<string>) => {
            state.loadingMessage = action.payload;
        },
        startNavigation: (state, action: PayloadAction<NavigationPayload | undefined>) => {
            state.isLoading = true;
            state.loadingMessage = action.payload?.message || "Loading...";
        },
        finishNavigation: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    setLoading,
    setLoadingMessage,
    startNavigation,
    finishNavigation
} = appSlice.actions;

export default appSlice.reducer;

// Selectors
export const selectIsLoading = (state: { app: AppState }) => state.app.isLoading;
export const selectLoadingMessage = (state: { app: AppState }) => state.app.loadingMessage;