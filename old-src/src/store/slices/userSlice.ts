import { createSlice } from "@reduxjs/toolkit";
import {
    getDefaultAvatar,
    getDefaultVideoThumbnail
} from "../../utils/imageUtils";

interface UserState {
    user: {
        name: string;
        handle: string;
    };
    balance: {
        amount: string;
        currency: string;
        estimatedRewards: string;
        contentRewardsDiamonds: string;
        contentRewardsAmount: string;
        monthlyEarnings: string;
        incomeStatus: string;
        incomeTitle: string;
    };
    withdrawMoney: {
        infoLines: string[];
        primaryBadge: {
            text: string;
            backgroundColor: string;
            textColor: string;
        };
    };
    coins: string;
    transactions: any[];
    profile: {
        avatar: string;
        following: string;
        followers: string;
        likes: string;
        bio: string;
        email: string;
        videos: any[];
    };
    notifications: {
        friends: number;
        inbox: number;
        friendAvatar: string;
    };
    analytics: any;
    latestPost: any;
    monetization: any;
    trendingPosts: any[];
    studioNotification: {
        title: string;
        subtitle: string;
        downloadText: string;
        iconImage: string | null;
    };
    rewardAnalytics: any[];
}

const initialState: UserState = {
    user: {
        name: "Adil El Awni",
        handle: "@adilelawni",
    },
    balance: {
        amount: "1234.56",
        currency: "USD",
        estimatedRewards: "0.00",
        contentRewardsDiamonds: "0",
        contentRewardsAmount: "0.00",
        monthlyEarnings: "0.00",
        incomeStatus: "To be retired",
        incomeTitle: "Income+",
    },
    withdrawMoney: {
        infoLines: [
            "Minimum withdrawal amount: $1.00 USD",
            "Maximum withdrawal amount: $100,000.00 USD",
            "Funds should arrive in 1 business day",
        ],
        primaryBadge: {
            text: "Primary",
            backgroundColor: "#e8f4f0",
            textColor: "#668b84",
        },
    },
    coins: "42",
    transactions: [{
            id: "1",
            title: "Programme de Récompenses pour les créateurs",
            amount: "0.02",
            status: "Completed",
            transactionType: "Rewards",
            activityType: "Income+",
            created: "06/30/2024 1:31:08 AM",
            transactionId: "b2c_trans_300073860871970347976360",
            date: "06/30",
            category: "Rewards",
            month: "Jun 2024",
        },
        {
            id: "2",
            title: "Programme de Récompenses pour les créateurs",
            amount: "8.12",
            status: "Completed",
            transactionType: "Rewards",
            activityType: "Income+",
            created: "05/30/2024 2:45:12 AM",
            transactionId: "b2c_trans_300073860871970347976361",
            date: "05/30",
            category: "Rewards",
            month: "May 2024",
        },
        {
            id: "3",
            title: "Programme de Récompenses pour les créateurs",
            amount: "6.15",
            status: "Completed",
            transactionType: "Rewards",
            activityType: "Income+",
            created: "04/30/2024 3:22:45 AM",
            transactionId: "b2c_trans_300073860871970347976362",
            date: "04/30",
            category: "Rewards",
            month: "Apr 2024",
        },
        {
            id: "4",
            title: "Creator Rewards Program: Rewards",
            amount: "62.63",
            status: "Completed",
            transactionType: "Rewards",
            activityType: "Income+",
            created: "03/30/2024 4:15:33 AM",
            transactionId: "b2c_trans_300073860871970347976363",
            date: "03/30",
            category: "Rewards",
            month: "Mar 2024",
        },
        {
            id: "5",
            title: "Creator Rewards Program: Rewards",
            amount: "57.31",
            status: "Completed",
            transactionType: "Rewards",
            activityType: "Income+",
            created: "03/01/2024 5:42:18 AM",
            transactionId: "b2c_trans_300073860871970347976364",
            date: "03/01",
            category: "Rewards",
            month: "Mar 2024",
        },
    ],
    profile: {
        avatar: getDefaultAvatar(),
        email: "adil.elawni@outlook.fr",
        following: "156",
        followers: "12400",
        likes: "89200",
        bio: "Creator & Content Enthusiast ✨\n\n⭐ ⭐ ⭐\n\n🔗 linktr.ee/adilelawni",
        videos: [{
                id: 1,
                thumbnail: getDefaultVideoThumbnail(),
                views: "12.5K",
                title: "Amazing dance choreography",
            },
            {
                id: 2,
                thumbnail: getDefaultVideoThumbnail(),
                views: "8.2K",
                title: "Daily vlog moments",
            },
            {
                id: 3,
                thumbnail: getDefaultVideoThumbnail(),
                views: "15.7K",
                title: "Tutorial time!",
            },
            {
                id: 4,
                thumbnail: getDefaultVideoThumbnail(),
                views: "6.1K",
                title: "Behind the scenes",
            },
            {
                id: 5,
                thumbnail: getDefaultVideoThumbnail(),
                views: "22.3K",
                title: "Trending dance moves",
            },
            {
                id: 6,
                thumbnail: getDefaultVideoThumbnail(),
                views: "11.9K",
                title: "Life hacks you need",
            },
            {
                id: 7,
                thumbnail: getDefaultVideoThumbnail(),
                views: "18.4K",
                title: "Funny moments compilation",
            },
            {
                id: 8,
                thumbnail: getDefaultVideoThumbnail(),
                views: "9.8K",
                title: "Cooking with love",
            },
            {
                id: 9,
                thumbnail: getDefaultVideoThumbnail(),
                views: "25.1K",
                title: "Travel adventures",
            },
        ],
    },
    notifications: {
        friends: 10,
        inbox: 15,
        friendAvatar: getDefaultAvatar(), // Default avatar for Friends tab
    },
    analytics: {
        postViews: {
            value: "1",
            change: "-88.9",
            trend: "decrease"
        },
        netFollowers: {
            value: "3",
            change: "17.6",
            trend: "increase"
        },
        likes: {
            value: "0",
            change: "-100",
            trend: "decrease"
        },
    },
    latestPost: {
        views: "0",
        likes: "0",
    },
    monetization: {
        rewardsPerPost: "2.8",
    },
    trendingPosts: [{
            id: 1,
            thumbnail: getDefaultVideoThumbnail(),
            likes: "85.7K",
            title: "Makeup tutorial that went viral",
            creator: "@beautyqueen",
        },
        {
            id: 2,
            thumbnail: getDefaultVideoThumbnail(),
            likes: "8.1K",
            title: "Perfume recommendation",
            creator: "@fragrancelover",
        },
        {
            id: 3,
            thumbnail: getDefaultVideoThumbnail(),
            likes: "12.3K",
            title: "How to apply skincare",
            creator: "@skincareguru",
        },
        {
            id: 4,
            thumbnail: getDefaultVideoThumbnail(),
            likes: "5.2K",
            title: "Daily routine tips",
            creator: "@lifestyletips",
        },
    ],
    studioNotification: {
        title: "TikTok Studio App",
        subtitle: "Scheduled posts are finally here. Only on TikTok Studio",
        downloadText: "Download",
        iconImage: null, // Custom uploaded image as base64 or URL
    },
    rewardAnalytics: [{
            id: 1,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 30 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "06/22",
            program: "Creator Rewards Program",
            status: "Disqualified",
            estRewards: "$0.00",
            videoViews: null,
        },
        {
            id: 2,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 30 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "06/21",
            program: "Creator Rewards Program",
            status: "Disqualified",
            estRewards: "$0.00",
            videoViews: null,
        },
        {
            id: 3,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 22 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "02/19",
            program: "Creator Rewards Program",
            status: "Qualified",
            estRewards: "$0.00",
            videoViews: "1.9M",
        },
        {
            id: 4,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 30 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "01/29",
            program: "Creator Rewards Program",
            status: "Qualified",
            estRewards: "$0.00",
            videoViews: "239.6K",
        },
        {
            id: 5,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 21 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "01/28",
            program: "Creator Rewards Program",
            status: "Qualified",
            estRewards: "$0.00",
            videoViews: "116.4K",
        },
        {
            id: 6,
            thumbnail: getDefaultVideoThumbnail(),
            title: "ثمن البيع 21 مليون متوفرة في المدن التالية #الدار_البيضاء",
            date: "01/28",
            program: "Creator Rewards Program",
            status: "Qualified",
            estRewards: "$0.00",
            videoViews: "116.4K",
        },
    ],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserName: (state, action) => {
            state.user.name = action.payload;
        },
        updateUserHandle: (state, action) => {
            state.user.handle = action.payload;
        },
        updateBalance: (state, action) => {
            state.balance.amount = action.payload;
        },
        updateCurrency: (state, action) => {
            state.balance.currency = action.payload;
        },
        updateEstimatedRewards: (state, action) => {
            state.balance.estimatedRewards = action.payload;
        },
        updateContentRewardsDiamonds: (state, action) => {
            state.balance.contentRewardsDiamonds = action.payload;
        },
        updateContentRewardsAmount: (state, action) => {
            state.balance.contentRewardsAmount = action.payload;
        },
        updateMonthlyEarnings: (state, action) => {
            state.balance.monthlyEarnings = action.payload;
        },
        updateIncomeStatus: (state, action) => {
            state.balance.incomeStatus = action.payload;
        },
        updateIncomeTitle: (state, action) => {
            state.balance.incomeTitle = action.payload;
        },
        updateWithdrawInfoLines: (state, action) => {
            state.withdrawMoney.infoLines = action.payload;
        },
        updateWithdrawInfoLine: (state, action) => {
            const {
                index,
                text
            } = action.payload;
            if (state.withdrawMoney.infoLines[index] !== undefined) {
                state.withdrawMoney.infoLines[index] = text;
            }
        },
        updatePrimaryBadge: (state, action) => {
            state.withdrawMoney.primaryBadge = { ...state.withdrawMoney.primaryBadge,
                ...action.payload
            };
        },
        updateCoins: (state, action) => {
            state.coins = action.payload;
        },
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        updateTransaction: (state, action) => {
            const {
                id,
                ...updatedData
            } = action.payload;
            const index = state.transactions.findIndex((transaction) => transaction.id === id);
            if (index !== -1) {
                state.transactions[index] = { ...state.transactions[index],
                    ...updatedData
                };
            }
        },
        deleteTransaction: (state, action) => {
            const id = action.payload;
            state.transactions = state.transactions.filter((transaction) => transaction.id !== id);
        },
        updateProfileAvatar: (state, action) => {
            state.profile.avatar = action.payload;
        },
        updateProfileFollowing: (state, action) => {
            state.profile.following = action.payload;
        },
        updateProfileFollowers: (state, action) => {
            state.profile.followers = action.payload;
        },
        updateProfileLikes: (state, action) => {
            state.profile.likes = action.payload;
        },
        updateProfileBio: (state, action) => {
            state.profile.bio = action.payload;
        },
        updateProfileEmail: (state, action) => {
            state.profile.email = action.payload;
        },
        updateProfileVideos: (state, action) => {
            state.profile.videos = action.payload;
        },
        resetProfileAvatar: (state) => {
            state.profile.avatar = getDefaultAvatar();
        },
        updateFriendsNotifications: (state, action) => {
            state.notifications.friends = action.payload;
        },
        updateInboxNotifications: (state, action) => {
            state.notifications.inbox = action.payload;
        },
        updateFriendAvatar: (state, action) => {
            state.notifications.friendAvatar = action.payload;
        },
        resetFriendAvatar: (state) => {
            state.notifications.friendAvatar = getDefaultAvatar();
        },
        updateAnalytics: (state, action) => {
            const {
                metric,
                field,
                value
            } = action.payload;
            state.analytics[metric][field] = value;
            // Update trend based on change value
            if (field === "change") {
                state.analytics[metric].trend = value >= 0 ? "increase" : "decrease";
            }
        },
        updateLatestPost: (state, action) => {
            const {
                field,
                value
            } = action.payload;
            state.latestPost[field] = value;
        },
        updateMonetization: (state, action) => {
            const {
                field,
                value
            } = action.payload;
            state.monetization[field] = value;
        },
        updateTrendingPosts: (state, action) => {
            state.trendingPosts = action.payload;
        },
        updateStudioNotification: (state, action) => {
            const {
                field,
                value
            } = action.payload;
            (state.studioNotification as Record<string, unknown>)[field] = value;
        },
        updateStudioNotificationAll: (state, action) => {
            state.studioNotification = { ...state.studioNotification,
                ...action.payload
            };
        },
        addRewardAnalyticsVideo: (state, action) => {
            state.rewardAnalytics.push(action.payload);
        },
        updateRewardAnalyticsVideo: (state, action) => {
            const {
                id,
                ...updatedData
            } = action.payload;
            const index = state.rewardAnalytics.findIndex((video) => video.id === id);
            if (index !== -1) {
                state.rewardAnalytics[index] = { ...state.rewardAnalytics[index],
                    ...updatedData
                };
            }
        },
        deleteRewardAnalyticsVideo: (state, action) => {
            const id = action.payload;
            state.rewardAnalytics = state.rewardAnalytics.filter((video) => video.id !== id);
        },
    },
});

export const {
    updateUserName,
    updateUserHandle,
    updateBalance,
    updateCurrency,
    updateEstimatedRewards,
    updateContentRewardsDiamonds,
    updateContentRewardsAmount,
    updateMonthlyEarnings,
    updateIncomeStatus,
    updateIncomeTitle,
    updateWithdrawInfoLines,
    updateWithdrawInfoLine,
    updatePrimaryBadge,
    updateCoins,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    updateProfileAvatar,
    updateProfileFollowing,
    updateProfileFollowers,
    updateProfileLikes,
    updateProfileBio,
    updateProfileEmail,
    updateProfileVideos,
    resetProfileAvatar,
    updateFriendsNotifications,
    updateInboxNotifications,
    updateFriendAvatar,
    resetFriendAvatar,
    updateAnalytics,
    updateLatestPost,
    updateMonetization,
    updateTrendingPosts,
    updateStudioNotification,
    updateStudioNotificationAll,
    addRewardAnalyticsVideo,
    updateRewardAnalyticsVideo,
    deleteRewardAnalyticsVideo,
} = userSlice.actions;

export default userSlice.reducer;

// Selectors
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectBalance = (state: { user: UserState }) => state.user.balance;
export const selectCoins = (state: { user: UserState }) => state.user.coins;
export const selectTransactions = (state: { user: UserState }) => state.user.transactions;
export const selectProfile = (state: { user: UserState }) => state.user.profile;
export const selectWithdrawMoney = (state: { user: UserState }) => state.user.withdrawMoney;
export const selectNotifications = (state: { user: UserState }) => state.user.notifications;
export const selectFriendsNotifications = (state: { user: UserState }) => state.user.notifications.friends;
export const selectInboxNotifications = (state: { user: UserState }) => state.user.notifications.inbox;
export const selectFriendAvatar = (state: { user: UserState }) => state.user.notifications.friendAvatar;
export const selectAnalytics = (state: { user: UserState }) => state.user.analytics;
export const selectLatestPost = (state: { user: UserState }) => state.user.latestPost;
export const selectMonetization = (state: { user: UserState }) => state.user.monetization;
export const selectTrendingPosts = (state: { user: UserState }) => state.user.trendingPosts;
export const selectStudioNotification = (state: { user: UserState }) => state.user.studioNotification;
export const selectRewardAnalytics = (state: { user: UserState }) => state.user.rewardAnalytics;