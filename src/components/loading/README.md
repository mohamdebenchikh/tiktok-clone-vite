# Loading Components

This directory contains the loading functionality recreated from the old src using Tailwind CSS instead of CSS and React Context instead of Redux.

## Components

### `loading.tsx`
The main loading component that displays the TikTok loading image centered on a white background.

### `loading-overlay.tsx`
A conditional overlay that shows the loading component when the loading state is active.

## Context

### `loading-context.tsx`
Provides loading state management using React Context API instead of Redux.

## Hooks

### `use-navigate-with-loading.ts`
A custom hook that provides navigation with loading states, similar to the old `useNavigateWithLoading` hook.

## Usage

### Basic Navigation with Loading

```tsx
import { useNavigateWithLoading } from "@/hooks/use-navigate-with-loading";

function MyComponent() {
  const navigateWithLoading = useNavigateWithLoading();

  const handleClick = () => {
    navigateWithLoading("/target-page", { 
      message: "Loading Page...",
      delay: 600 // optional, defaults to 600ms
    });
  };

  return <button onClick={handleClick}>Navigate</button>;
}
```

### Manual Loading Control

```tsx
import { useLoading } from "@/contexts/loading-context";

function MyComponent() {
  const { setLoading, startNavigation, finishNavigation } = useLoading();

  const handleManualLoading = () => {
    startNavigation("Custom loading message...");
    
    // Do some async work
    setTimeout(() => {
      finishNavigation();
    }, 2000);
  };

  return <button onClick={handleManualLoading}>Start Loading</button>;
}
```

## Routes

The loading page is available at `/loading` route for direct access.

## Features

- ✅ Same visual appearance as old loading component
- ✅ Tailwind CSS instead of inline styles
- ✅ React Context instead of Redux
- ✅ TypeScript support
- ✅ Customizable loading messages
- ✅ Configurable delay timing
- ✅ Full-screen overlay support
