import { createContext, useContext, useState, type ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage: string;
  setLoading: (loading: boolean) => void;
  setLoadingMessage: (message: string) => void;
  startNavigation: (message?: string) => void;
  finishNavigation: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const startNavigation = (message: string = "Loading...") => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const finishNavigation = () => {
    setIsLoading(false);
  };

  const value = {
    isLoading,
    loadingMessage,
    setLoading,
    setLoadingMessage,
    startNavigation,
    finishNavigation,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
