import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Custom hooks for typed Redux usage
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// User selectors
export const useUser = () => useAppSelector((state) => state.user);
export const useUserName = () => useAppSelector((state) => state.user.user.name);
export const useUserHandle = () => useAppSelector((state) => state.user.user.handle);

// Balance selectors
export const useBalance = () => useAppSelector((state) => state.user.balance);
export const useBalanceAmount = () => useAppSelector((state) => state.user.balance.amount);
export const useBalanceCurrency = () => useAppSelector((state) => state.user.balance.currency);
export const useEstimatedRewards = () => useAppSelector((state) => state.user.balance.estimatedRewards);
export const useContentRewardsDiamonds = () =>
    useAppSelector((state) => state.user.balance.contentRewardsDiamonds);
export const useContentRewardsAmount = () =>
    useAppSelector((state) => state.user.balance.contentRewardsAmount);
export const useMonthlyEarnings = () => useAppSelector((state) => state.user.balance.monthlyEarnings);
export const useIncomeStatus = () => useAppSelector((state) => state.user.balance.incomeStatus);
export const useIncomeTitle = () => useAppSelector((state) => state.user.balance.incomeTitle);

// Coins selectors
export const useCoins = () => useAppSelector((state) => state.user.coins);

// Transactions selectors
export const useTransactions = () => useAppSelector((state) => state.user.transactions);

// Profile selectors
export const useProfile = () => useAppSelector((state) => state.user.profile);
export const useProfileAvatar = () => useAppSelector((state) => state.user.profile.avatar);
export const useProfileFollowing = () => useAppSelector((state) => state.user.profile.following);
export const useProfileFollowers = () => useAppSelector((state) => state.user.profile.followers);
export const useProfileLikes = () => useAppSelector((state) => state.user.profile.likes);
export const useProfileBio = () => useAppSelector((state) => state.user.profile.bio);
export const useProfileEmail = () => useAppSelector((state) => state.user.profile.email);
export const useProfileVideos = () => useAppSelector((state) => state.user.profile.videos);

// Withdraw Money selectors
export const useWithdrawMoney = () => useAppSelector((state) => state.user.withdrawMoney);
export const useWithdrawInfoLines = () => useAppSelector((state) => state.user.withdrawMoney.infoLines);
export const usePrimaryBadge = () => useAppSelector((state) => state.user.withdrawMoney.primaryBadge);

// Notification selectors
export const useNotifications = () => useAppSelector((state) => state.user.notifications);
export const useFriendsNotifications = () => useAppSelector((state) => state.user.notifications.friends);
export const useInboxNotifications = () => useAppSelector((state) => state.user.notifications.inbox);
export const useFriendAvatar = () => useAppSelector((state) => state.user.notifications.friendAvatar);

// Analytics selectors
export const useAnalytics = () => useAppSelector((state) => state.user.analytics);

// Latest post selectors
export const useLatestPost = () => useAppSelector((state) => state.user.latestPost);

// Monetization selectors
export const useMonetization = () => useAppSelector((state) => state.user.monetization);

// Trending posts selectors
export const useTrendingPosts = () => useAppSelector((state) => state.user.trendingPosts);

// Studio notification selectors
export const useStudioNotification = () => useAppSelector((state) => state.user.studioNotification);

// Reward analytics selectors
export const useRewardAnalytics = () => useAppSelector((state) => state.user.rewardAnalytics);

// App state selectors
export const useIsLoading = () => useAppSelector((state) => state.app.isLoading);
export const useLoadingMessage = () => useAppSelector((state) => state.app.loadingMessage);