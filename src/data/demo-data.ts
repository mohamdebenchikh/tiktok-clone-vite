// Demo data for TikTok clone application

export const demoUser = {
  id: 1,
  username: "johndoe",
  displayName: "John Doe",
  email: "john.doe@example.com",
  avatar: "/src/assets/react.svg",
  bio: "Content creator | Tech enthusiast | Coffee lover ☕",
  verified: true,
  followers: 125600,
  following: 489,
  likes: 2840000,
  posts: 156,
  balance: {
    amount: "1,234.56",
    currency: "USD",
    withdrawable: "1,234.56",
  },
};

export const demoBalance = {
  amount: "1,234.56",
  currency: "USD",
  withdrawable: "1,234.56",
  totalEarnings: "5,678.90",
  thisMonth: "234.56",
  lastMonth: "567.89",
};

export const demoTransactions = [
  {
    id: 1,
    type: "income",
    amount: "+$25.00",
    description: "Creator Fund Rewards",
    date: "Dec 15, 2024",
    status: "completed",
    orderId: "12345678901234567890123456-A",
  },
  {
    id: 2,
    type: "withdrawal",
    amount: "-$100.00",
    description: "PayPal Withdrawal",
    date: "Dec 10, 2024",
    status: "processing",
    orderId: "12345678901234567890123457-B",
  },
  {
    id: 3,
    type: "income",
    amount: "+$15.50",
    description: "Live Gifts",
    date: "Dec 8, 2024",
    status: "completed",
    orderId: "12345678901234567890123458-C",
  },
];

export const demoVideos = [
  {
    id: 1,
    title: "Amazing cooking hack! 🍳",
    thumbnail: "/src/assets/react.svg",
    views: 125600,
    likes: 8900,
    comments: 234,
    shares: 89,
    date: "2024-12-15",
    duration: "0:32",
    status: "Qualified",
  },
  {
    id: 2,
    title: "Day in my life as a developer",
    thumbnail: "/src/assets/react.svg",
    views: 89400,
    likes: 5600,
    comments: 178,
    shares: 45,
    date: "2024-12-12",
    duration: "1:24",
    status: "Disqualified",
  },
  {
    id: 3,
    title: "Quick fitness routine 💪",
    thumbnail: "/src/assets/react.svg",
    views: 234000,
    likes: 12000,
    comments: 567,
    shares: 234,
    date: "2024-12-10",
    duration: "0:58",
    status: "Qualified",
  },
];

export const demoRewardAnalytics = [
  {
    id: 1,
    title: "Amazing cooking hack! 🍳",
    thumbnail: "/src/assets/react.svg",
    date: "Dec 15, 2024",
    program: "Creator Fund",
    status: "Qualified",
    estRewards: "$25.00",
    videoViews: "125.6K",
  },
  {
    id: 2,
    title: "Day in my life as a developer",
    thumbnail: "/src/assets/react.svg",
    date: "Dec 12, 2024",
    program: "Creator Fund",
    status: "Disqualified",
    estRewards: "$0.00",
    videoViews: "89.4K",
  },
  {
    id: 3,
    title: "Quick fitness routine 💪",
    thumbnail: "/src/assets/react.svg",
    date: "Dec 10, 2024",
    program: "Creator Fund",
    status: "Qualified",
    estRewards: "$35.50",
    videoViews: "234K",
  },
];

export const demoStudioData = {
  totalViews: "1.2M",
  totalLikes: "45.6K",
  followers: "12.5K",
  profileViews: "234K",
  recentPosts: demoVideos.slice(0, 3),
  analytics: {
    views: { current: 125600, change: "+12.5%" },
    likes: { current: 8900, change: "+8.2%" },
    shares: { current: 234, change: "+15.3%" },
    comments: { current: 567, change: "+5.7%" },
  },
};

export const demoWithdrawInfo = [
  "Available for withdrawal",
  "Processing time: 1-3 business days",
];

export const demoPrimaryBadge = {
  text: "Primary",
  backgroundColor: "#22C55E",
  textColor: "#FFFFFF",
};

// Additional demo data for monetization
export const demoMonetizationPrograms = [
  {
    id: 1,
    name: "Creator Fund",
    description: "Earn money based on your video performance",
    status: "enrolled",
    earnings: "$234.56",
    icon: "💰",
  },
  {
    id: 2,
    name: "Live Gifts",
    description: "Receive virtual gifts during live streams",
    status: "available",
    earnings: "$0.00",
    icon: "🎁",
  },
  {
    id: 3,
    name: "Video Gifts",
    description: "Get tips from viewers on your videos",
    status: "pending",
    earnings: "$0.00",
    icon: "💝",
  },
];
