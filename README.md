# TikTok Clone - React + TypeScript + Vite

A modern TikTok clone built with React, TypeScript, and Vite. This project features a complete mobile-first UI with modular components, responsive design, and interactive functionality.

## 🚀 Features

### 📱 Pages & Navigation
- **Profile Page** - User profile with avatar, stats, bio, and video grid
- **Balance Page** - Wallet and earnings management
- **Balance Details** - Detailed balance information
- **Transaction History** - Transaction filtering and history
- **TikTok Studio** - Creator tools and analytics

### 🎨 UI Components
- **Responsive Design** - Mobile-first approach with desktop support
- **Fixed Navigation** - Sticky header and bottom navigation
- **Smooth Scrolling** - Custom ScrollArea implementation
- **Interactive Tabs** - Dynamic tab switching with state management
- **Video Thumbnails** - Custom SVG thumbnail components

### 🔧 Technical Features
- **Modular Architecture** - Components split into logical folders
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first styling with custom components
- **Lucide Icons** - Modern icon library integration
- **State Management** - React hooks for component state

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # Shadcn/ui components
│   ├── profile/                # Profile page components
│   │   ├── header.tsx
│   │   ├── bottom-navigation.tsx
│   │   ├── profile-avatar.tsx
│   │   ├── profile-info.tsx
│   │   ├── profile-stats.tsx
│   │   ├── profile-bio.tsx
│   │   ├── profile-actions.tsx
│   │   ├── profile-tabs.tsx
│   │   ├── video-grid.tsx
│   │   ├── profile-header-section.tsx
│   │   └── profile-content-section.tsx
│   ├── balance/                # Balance page components
│   │   ├── balance-header.tsx
│   │   ├── balance-title.tsx
│   │   ├── live-rewards-notification.tsx
│   │   ├── balance-card.tsx
│   │   ├── first-recharge-package.tsx
│   │   ├── monetization-section.tsx
│   │   ├── services-section.tsx
│   │   └── balance-content.tsx
│   └── tiktok-studio/          # TikTok Studio components
│       ├── studio-header.tsx
│       ├── studio-tabs.tsx
│       ├── analytics-section.tsx
│       ├── studio-promotion.tsx
│       ├── studio-tools.tsx
│       ├── monetization-section.tsx
│       ├── trending-posts.tsx
│       └── studio-content.tsx
├── icons/
│   └── default-thumbnail.tsx   # Custom SVG components
├── pages/
│   ├── profile.tsx
│   ├── balance.tsx
│   ├── balance-details.tsx
│   ├── transaction-history.tsx
│   └── tiktok-studio.tsx
└── App.tsx
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Heroicons** - Additional icon set

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd tiktok-clone-vite
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Component Features

### Profile Components
- **Dynamic Tabs** - Interactive tab switching (Posts, Private, Reposts, Bookmarks, Likes)
- **Video Grid** - 24 video thumbnails with play counts
- **User Stats** - Following, Followers, Likes counters
- **Profile Actions** - TikTok Studio and Balance buttons

### Balance Components
- **Live Rewards** - Notification cards with dismiss functionality
- **Balance Card** - USD balance and coin display with gradients
- **Monetization** - LIVE Rewards and Campaigns sections
- **Services** - Transactions, Identity verification, Help & feedback

### TikTok Studio Components
- **Analytics** - Post views, Net followers, Likes with trend indicators
- **Trending Posts** - 6 posts grid with realistic engagement data
- **Monetization Programs** - Services+, Creator rewards, LIVE Rewards, Creator Marketplace
- **Tools** - Account check, Creator Academy, Promote, Benefits

### Transaction History
- **Dynamic Filtering** - Filter by All, Rewards, Revenue, Purchase, Refund
- **Monthly Grouping** - Transactions organized by month
- **Real Data** - 11 sample transactions with realistic amounts and dates

## 🎨 Design Features

- **Mobile-First** - Optimized for mobile devices
- **Responsive** - Works on desktop and tablet
- **Dark/Light Mode** - Consistent theming
- **Smooth Animations** - Hover effects and transitions
- **Professional UI** - TikTok-inspired design language

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Components

1. Create component in appropriate folder under `src/components/`
2. Export from the component file
3. Import and use in parent components
4. Follow the established naming conventions

## 📄 License

This project is for educational purposes only.
