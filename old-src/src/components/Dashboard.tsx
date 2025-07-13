/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  useAppDispatch,
  useUserName,
  useUserHandle,
  useBalanceAmount,
  useBalanceCurrency,
  useEstimatedRewards,
  useContentRewardsDiamonds,
  useContentRewardsAmount,
  useMonthlyEarnings,
  useIncomeStatus,
  useIncomeTitle,
  useCoins,
  useTransactions,
  useProfileAvatar,
  useProfileFollowing,
  useProfileFollowers,
  useProfileLikes,
  useProfileBio,
  useProfileEmail,
  useProfileVideos,
  useWithdrawInfoLines,
  usePrimaryBadge,
  useAnalytics,
  useLatestPost,
  useTrendingPosts,
  useStudioNotification,
  useRewardAnalytics,
} from "../store/hooks";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import {
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
  updateFriendsNotifications,
  updateInboxNotifications,
  updateFriendAvatar,
  selectFriendsNotifications,
  selectInboxNotifications,
  selectFriendAvatar,
  updateAnalytics,
  updateLatestPost,
  updateTrendingPosts,
  updateStudioNotification,
  addRewardAnalyticsVideo,
  updateRewardAnalyticsVideo,
  deleteRewardAnalyticsVideo,
} from "../store/slices/userSlice";
import "../css/styles/dashboard.css";

interface FormData {
  userName: string;
  userHandle: string;
  balance: string;
  currency: string;
  estimatedRewards: string;
  contentRewardsDiamonds: string;
  contentRewardsAmount: string;
  monthlyEarnings: string;
  incomeStatus: string;
  incomeTitle: string;
  coins: string;
  avatar: string;
  following: string;
  followers: string;
  likes: string;
  bio: string;
  email: string;
  withdrawInfoLines: string[];
  primaryBadgeText: string;
  primaryBadgeBackgroundColor: string;
  primaryBadgeTextColor: string;
  friendsNotifications: number;
  inboxNotifications: number;
  friendAvatar: string;
  studioNotificationTitle: string;
  studioNotificationSubtitle: string;
  studioNotificationDownloadText: string;
  studioNotificationIconImage: string | null;
}

interface TransactionForm {
  title: string;
  amount: string;
  status: string;
  transactionType: string;
  activityType: string;
  transactionId: string;
}

interface RewardAnalyticsForm {
  title: string;
  date: string;
  program: string;
  status: string;
  estRewards: string;
  videoViews: string;
  thumbnail: string | null;
}

interface RewardAnalyticsVideo {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
  program: string;
  status: string;
  estRewards: string;
  videoViews: string | null;
}

interface CollapsedSections {
  userProfile: boolean;
  profileStats: boolean;
  balanceCoins: boolean;
  withdrawMoney: boolean;
  transactionManagement: boolean;
  videoManagement: boolean;
  notifications: boolean;
  analytics: boolean;
  latestPost: boolean;
  monetization: boolean;
  trendingPosts: boolean;
  studioNotification: boolean;
  rewardAnalytics: boolean;
}

const Dashboard: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const dispatch = useAppDispatch();

  // Get current values from Redux
  const currentUserName = useUserName();
  const currentUserHandle = useUserHandle();
  const currentBalance = useBalanceAmount();
  const currentCurrency = useBalanceCurrency();
  const currentEstimatedRewards = useEstimatedRewards();
  const currentContentRewardsDiamonds = useContentRewardsDiamonds();
  const currentContentRewardsAmount = useContentRewardsAmount();
  const currentMonthlyEarnings = useMonthlyEarnings();
  const currentIncomeStatus = useIncomeStatus();
  const currentIncomeTitle = useIncomeTitle();
  const currentCoins = useCoins();
  const currentTransactions = useTransactions();
  const currentAvatar = useProfileAvatar();
  const currentFollowing = useProfileFollowing();
  const currentFollowers = useProfileFollowers();
  const currentLikes = useProfileLikes();
  const currentBio = useProfileBio();
  const currentEmail = useProfileEmail();
  const currentVideos = useProfileVideos();
  const currentFriendsNotifications = useSelector(selectFriendsNotifications);
  const currentInboxNotifications = useSelector(selectInboxNotifications);
  const currentFriendAvatar = useSelector(selectFriendAvatar);
  const currentAnalytics = useAnalytics();
  const currentLatestPost = useLatestPost();
  const currentTrendingPosts = useTrendingPosts();
  const currentStudioNotification = useStudioNotification();
  const currentRewardAnalytics = useRewardAnalytics();
  const currentWithdrawInfoLines = useWithdrawInfoLines();
  const currentPrimaryBadge = usePrimaryBadge();

  // Local state for form inputs
  const [formData, setFormData] = useState<FormData>({
    userName: currentUserName,
    userHandle: currentUserHandle,
    balance: currentBalance,
    currency: currentCurrency,
    estimatedRewards: currentEstimatedRewards,
    contentRewardsDiamonds: currentContentRewardsDiamonds,
    contentRewardsAmount: currentContentRewardsAmount,
    monthlyEarnings: currentMonthlyEarnings,
    incomeStatus: currentIncomeStatus,
    incomeTitle: currentIncomeTitle,
    coins: currentCoins,
    avatar: currentAvatar,
    following: currentFollowing,
    followers: currentFollowers,
    likes: currentLikes,
    bio: currentBio,
    email: currentEmail,
    // Withdraw Money fields
    withdrawInfoLines: [...currentWithdrawInfoLines],
    primaryBadgeText: currentPrimaryBadge.text,
    primaryBadgeBackgroundColor: currentPrimaryBadge.backgroundColor,
    primaryBadgeTextColor: currentPrimaryBadge.textColor,
    friendsNotifications: currentFriendsNotifications,
    inboxNotifications: currentInboxNotifications,
    friendAvatar: currentFriendAvatar,
    // Studio notification fields
    studioNotificationTitle: currentStudioNotification.title,
    studioNotificationSubtitle: currentStudioNotification.subtitle,
    studioNotificationDownloadText: currentStudioNotification.downloadText,
    studioNotificationIconImage: currentStudioNotification.iconImage,
  });

  // State for video thumbnail inputs
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // State for reward analytics management
  const [rewardAnalyticsForm, setRewardAnalyticsForm] = useState<RewardAnalyticsForm>({
    title: "",
    date: "",
    program: "Creator Rewards Program",
    status: "Qualified",
    estRewards: "$0.00",
    videoViews: "",
    thumbnail: null,
  });
  const [editingRewardVideo, setEditingRewardVideo] = useState<any>(null);
  const [showRewardAnalyticsForm, setShowRewardAnalyticsForm] = useState<boolean>(false);

  // State for transaction management
  const [transactionForm, setTransactionForm] = useState<TransactionForm>({
    title: "",
    amount: "",
    status: "Completed",
    transactionType: "Rewards",
    activityType: "Income+",
    transactionId: "",
  });
  const [editingTransaction, setEditingTransaction] = useState<string | null>(null);
  const [showTransactionForm, setShowTransactionForm] = useState<boolean>(false);

  // State for collapsible sections
  const [collapsedSections, setCollapsedSections] = useState<CollapsedSections>({
    userProfile: false,
    profileStats: false,
    balanceCoins: false,
    withdrawMoney: false,
    transactionManagement: false,
    videoManagement: false,
    notifications: false,
    analytics: false,
    latestPost: false,
    monetization: false,
    trendingPosts: false,
    studioNotification: false,
    rewardAnalytics: false,
  });

  // Toggle collapsible section
  const toggleSection = (sectionName: keyof CollapsedSections): void => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["friendsNotifications", "inboxNotifications"].includes(name) ? parseFloat(value) || 0 : value,
    }));
  };

  const handleAnalyticsChange = (metric: string, field: string, value: any): void => {
    dispatch(updateAnalytics({ metric, field, value }));
  };

  const handleLatestPostChange = (field: string, value: any): void => {
    dispatch(updateLatestPost({ field, value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Basic validation
    if (!formData.userName.trim()) {
      toast.error("Username cannot be empty!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    if (Number(formData.balance) < 0) {
      toast.error("Balance cannot be negative!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    if (Number(formData.coins) < 0) {
      toast.error("Coins cannot be negative!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    if (Number(formData.following) < 0 || Number(formData.followers) < 0 || Number(formData.likes) < 0) {
      toast.error("Profile stats cannot be negative!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    if (formData.friendsNotifications < 0 || formData.inboxNotifications < 0) {
      toast.error("Notification counts cannot be negative!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    // Dispatch updates to Redux store
    dispatch(updateUserName(formData.userName));
    dispatch(updateUserHandle(formData.userHandle));
    dispatch(updateBalance(formData.balance));
    dispatch(updateCurrency(formData.currency));
    dispatch(updateEstimatedRewards(formData.estimatedRewards));
    dispatch(updateContentRewardsDiamonds(formData.contentRewardsDiamonds));
    dispatch(updateContentRewardsAmount(formData.contentRewardsAmount));
    dispatch(updateMonthlyEarnings(formData.monthlyEarnings));
    dispatch(updateIncomeStatus(formData.incomeStatus));
    dispatch(updateIncomeTitle(formData.incomeTitle));
    dispatch(updateCoins(formData.coins));
    dispatch(updateProfileAvatar(formData.avatar));
    dispatch(updateProfileFollowing(formData.following));
    dispatch(updateProfileFollowers(formData.followers));
    dispatch(updateProfileLikes(formData.likes));
    dispatch(updateProfileBio(formData.bio));
    dispatch(updateProfileEmail(formData.email));
    // Update withdraw money fields
    dispatch(updateWithdrawInfoLines(formData.withdrawInfoLines));
    dispatch(
      updatePrimaryBadge({
        text: formData.primaryBadgeText,
        backgroundColor: formData.primaryBadgeBackgroundColor,
        textColor: formData.primaryBadgeTextColor,
      })
    );
    dispatch(updateFriendsNotifications(formData.friendsNotifications));
    dispatch(updateInboxNotifications(formData.inboxNotifications));
    dispatch(updateFriendAvatar(formData.friendAvatar));

    toast.success("User information updated successfully!", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });
  };
  const handleReset = () => {
    setFormData({
      userName: currentUserName,
      userHandle: currentUserHandle,
      balance: currentBalance,
      currency: currentCurrency,
      estimatedRewards: currentEstimatedRewards,
      contentRewardsDiamonds: currentContentRewardsDiamonds,
      contentRewardsAmount: currentContentRewardsAmount,
      monthlyEarnings: currentMonthlyEarnings,
      incomeStatus: currentIncomeStatus,
      incomeTitle: currentIncomeTitle,
      coins: currentCoins,
      avatar: currentAvatar,
      following: currentFollowing,
      followers: currentFollowers,
      likes: currentLikes,
      bio: currentBio,
      email: currentEmail,
      // Withdraw Money fields
      withdrawInfoLines: [...currentWithdrawInfoLines],
      primaryBadgeText: currentPrimaryBadge.text,
      primaryBadgeBackgroundColor: currentPrimaryBadge.backgroundColor,
      primaryBadgeTextColor: currentPrimaryBadge.textColor,
      friendsNotifications: currentFriendsNotifications,
      inboxNotifications: currentInboxNotifications,
      friendAvatar: currentFriendAvatar,
      // Studio notification fields
      studioNotificationTitle: currentStudioNotification.title,
      studioNotificationSubtitle: currentStudioNotification.subtitle,
      studioNotificationDownloadText: currentStudioNotification.downloadText,
      studioNotificationIconImage: currentStudioNotification.iconImage,
    });

    toast.success("Form reset to current values!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#6366F1",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
      },
    });
  };

  const goBack = () => {
    navigateWithLoading("/profile", { message: "Loading Profile..." });
  };

  interface VideoThumbnailClickHandler {
    (videoId: string): void;
  }

  const handleVideoThumbnailClick: VideoThumbnailClickHandler = (videoId) => {
    setSelectedVideoId(videoId);
    // For webview compatibility, we'll use a label-based approach
    const fileInput = document.getElementById("thumbnail-upload") as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleThumbnailFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedVideoId) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    // Create object URL for the uploaded file
    const thumbnailUrl = URL.createObjectURL(file);

    const updatedVideos = currentVideos.map((video) =>
      video.id === selectedVideoId ? { ...video, thumbnail: thumbnailUrl } : video
    );

    dispatch(updateProfileVideos(updatedVideos));

    toast.success("Video thumbnail updated!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });

    // Reset the file input
    e.target.value = "";
    setSelectedVideoId(null);
  };

  const handleVideoViewsChange = (videoId: string, newViews: string) => {
    const updatedVideos = currentVideos.map((video) =>
      video.id === videoId ? { ...video, views: newViews } : video
    );

    dispatch(updateProfileVideos(updatedVideos));
  };

  // Avatar upload handlers
  const handleAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    // Create object URL for the uploaded file
    const avatarUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      avatar: avatarUrl,
    }));

    toast.success("Avatar updated! Don't forget to save changes.", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });

    // Reset the file input
    e.target.value = "";
  };

  const handleResetAvatar = () => {
    setFormData((prev) => ({
      ...prev,
      avatar: currentAvatar,
    }));

    toast.success("Avatar reset to current value!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#6366F1",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
      },
    });
  };

  // Friend avatar upload handlers
  const handleFriendAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    // Create object URL for the uploaded file
    const friendAvatarUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      friendAvatar: friendAvatarUrl,
    }));

    toast.success("Friend avatar updated! Don't forget to save changes.", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });

    // Reset the file input
    e.target.value = "";
  };

  const handleResetFriendAvatar = () => {
    setFormData((prev) => ({
      ...prev,
      friendAvatar: currentFriendAvatar,
    }));

    toast.success("Friend avatar reset to current value!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#6366F1",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
      },
    });
  };

  // Transaction management handlers
  const handleTransactionFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransactionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTransactionId = () => {
    return `b2c_trans_${Date.now()}${Math.floor(Math.random() * 10000)}`;
  };

  const handleAddTransaction = () => {
    if (!transactionForm.title || !transactionForm.amount) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const currentDate = new Date();
    const newTransaction = {
      id: Date.now().toString(),
      title: transactionForm.title,
      amount: parseFloat(transactionForm.amount).toFixed(2),
      status: transactionForm.status,
      transactionType: transactionForm.transactionType,
      activityType: transactionForm.activityType,
      created: currentDate.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
      transactionId: transactionForm.transactionId || generateTransactionId(),
      // Additional fields for transaction history compatibility
      date: currentDate.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" }),
      category: transactionForm.transactionType,
      month: currentDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };

    dispatch(addTransaction(newTransaction));
    setTransactionForm({
      title: "",
      amount: "",
      status: "Completed",
      transactionType: "Rewards",
      activityType: "Income+",
      transactionId: "",
    });
    setShowTransactionForm(false);
    toast.success("Transaction added successfully!");
  };

  interface TransactionEdit {
    id: string;
    title: string;
    amount: string;
    status: string;
    transactionType: string;
    activityType: string;
    transactionId: string;
  }

  const handleEditTransaction = (transaction: TransactionEdit): void => {
    setEditingTransaction(transaction.id);
    setTransactionForm({
      title: transaction.title,
      amount: transaction.amount,
      status: transaction.status,
      transactionType: transaction.transactionType,
      activityType: transaction.activityType,
      transactionId: transaction.transactionId,
    });
    setShowTransactionForm(true);
  };

  const handleUpdateTransaction = () => {
    if (!transactionForm.title || !transactionForm.amount) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const updatedTransaction = {
      id: editingTransaction,
      title: transactionForm.title,
      amount: parseFloat(transactionForm.amount).toFixed(2),
      status: transactionForm.status,
      transactionType: transactionForm.transactionType,
      activityType: transactionForm.activityType,
      transactionId: transactionForm.transactionId,
      // Update category when transaction type changes
      category: transactionForm.transactionType,
    };

    dispatch(updateTransaction(updatedTransaction));
    setTransactionForm({
      title: "",
      amount: "",
      status: "Completed",
      transactionType: "Rewards",
      activityType: "Income+",
      transactionId: "",
    });
    setEditingTransaction(null);
    setShowTransactionForm(false);
    toast.success("Transaction updated successfully!");
  };

  const handleDeleteTransaction = (transactionId: any) => {
    toast(
      (t) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <strong>Delete Transaction</strong>
            <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#666" }}>
              Are you sure you want to delete this transaction? This action cannot be undone.
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
            <button
              onClick={() => {
                toast.dismiss(t.id);
              }}
              style={{
                background: "#f5f5f5",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                dispatch(deleteTransaction(transactionId));
                toast.dismiss(t.id);
                toast.success("Transaction deleted successfully!");
              }}
              style={{
                background: "#ef4444",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: "top-center",
        style: {
          background: "#fff",
          color: "#333",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          maxWidth: "400px",
        },
      }
    );
  };

  const handleCancelTransactionForm = () => {
    setTransactionForm({
      title: "",
      amount: "",
      status: "Completed",
      transactionType: "Rewards",
      activityType: "Income+",
      transactionId: "",
    });
    setEditingTransaction(null);
    setShowTransactionForm(false);
  };

  // Notification icon upload handler
  const handleNotificationIconFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file!", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    // Create object URL for the uploaded file
    const iconImageUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      studioNotificationIconImage: iconImageUrl,
    }));

    toast.success("Notification icon updated! Don't forget to save changes.", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });

    // Reset the file input
    e.target.value = "";
  };

  const handleResetNotificationIcon = () => {
    setFormData((prev) => ({
      ...prev,
      studioNotificationIconImage: currentStudioNotification.iconImage,
    }));

    toast.success("Notification icon reset to current value!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#6366F1",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
      },
    });
  };

  // Reward analytics handlers
  const handleRewardAnalyticsFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRewardAnalyticsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRewardAnalyticsThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const thumbnailUrl = event.target?.result as string;
        setRewardAnalyticsForm((prev) => ({
          ...prev,
          thumbnail: thumbnailUrl,
        }));
        toast.success("Thumbnail uploaded successfully!", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "12px",
            padding: "16px 24px",
            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
          },
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error("Failed to upload thumbnail. Please try again.", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "12px",
          padding: "16px 24px",
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
        },
      });
    }
  };

  const handleAddRewardAnalyticsVideo = () => {
    if (!rewardAnalyticsForm.title || !rewardAnalyticsForm.date) {
      toast.error("Please fill in title and date fields", {
        duration: 3000,
        position: "top-center",
      });
      return;
    }

    const newVideo = {
      id: Date.now(),
      ...rewardAnalyticsForm,
      thumbnail: rewardAnalyticsForm.thumbnail || currentRewardAnalytics[0]?.thumbnail,
    };

    dispatch(addRewardAnalyticsVideo(newVideo));
    setRewardAnalyticsForm({
      title: "",
      date: "",
      program: "Creator Rewards Program",
      status: "Qualified",
      estRewards: "$0.00",
      videoViews: "",
      thumbnail: null,
    });
    setShowRewardAnalyticsForm(false);

    toast.success("Reward analytics video added successfully!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });
  };

  const handleEditRewardAnalyticsVideo = (video: RewardAnalyticsVideo) => {
    setEditingRewardVideo(video);
    setRewardAnalyticsForm({
      ...video,
      videoViews: video.videoViews || ""
    });
    setShowRewardAnalyticsForm(true);
  };

  const handleUpdateRewardAnalyticsVideo = () => {
    if (!rewardAnalyticsForm.title || !rewardAnalyticsForm.date) {
      toast.error("Please fill in title and date fields", {
        duration: 3000,
        position: "top-center",
      });
      return;
    }

    dispatch(
      updateRewardAnalyticsVideo({
        id: editingRewardVideo.id,
        ...rewardAnalyticsForm,
      })
    );

    setEditingRewardVideo(null);
    setRewardAnalyticsForm({
      title: "",
      date: "",
      program: "Creator Rewards Program",
      status: "Qualified",
      estRewards: "$0.00",
      videoViews: "",
      thumbnail: null,
    });
    setShowRewardAnalyticsForm(false);

    toast.success("Reward analytics video updated successfully!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
      },
    });
  };

  const handleDeleteRewardAnalyticsVideo = (videoId: number) => {
    dispatch(deleteRewardAnalyticsVideo(videoId));
    toast.success("Reward analytics video deleted successfully!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#EF4444",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
        padding: "16px 24px",
        boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
      },
    });
  };

  const handleCancelRewardAnalyticsEdit = () => {
    setEditingRewardVideo(null);
    setRewardAnalyticsForm({
      title: "",
      date: "",
      program: "Creator Rewards Program",
      status: "Qualified",
      estRewards: "$0.00",
      videoViews: "",
      thumbnail: null,
    });
    setShowRewardAnalyticsForm(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <button className="back-button" onClick={goBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="dashboard-title">User Dashboard</h1>
        </div>

        {/* Form */}
        <div className="dashboard-form-container">
          <form onSubmit={handleSubmit} className="dashboard-form">
            {/* User Profile Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("userProfile")}>
                <h2 className="section-title">User Profile</h2>
                <svg
                  className={`section-chevron ${collapsedSections.userProfile ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.userProfile ? "collapsed" : ""}`}>
                <div className="form-group">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="userHandle" className="form-label">
                    Handle (@username)
                  </label>
                  <input
                    type="text"
                    id="userHandle"
                    name="userHandle"
                    value={formData.userHandle}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="@handle"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Profile Avatar</label>
                  <div className="avatar-upload-section">
                    <div className="avatar-preview">
                      <img src={formData.avatar} alt="Current Avatar" className="avatar-preview-img" />
                    </div>
                    <div className="avatar-upload-controls">
                      <label htmlFor="avatar-upload" className="btn btn-primary file-upload-label">
                        Upload New Avatar
                      </label>
                      <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        className="file-input-hidden"
                        onChange={handleAvatarFileUpload}
                        capture="environment"
                      />
                      <button type="button" onClick={handleResetAvatar} className="btn btn-secondary">
                        Reset to Default
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Creator & Content Enthusiast ✨

⭐ ⭐ ⭐

🔗 🔗 linktr.ee/adilelawni"
                    rows={6}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Profile Stats Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("profileStats")}>
                <h2 className="section-title">Profile Stats</h2>
                <svg
                  className={`section-chevron ${collapsedSections.profileStats ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.profileStats ? "collapsed" : ""}`}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="following" className="form-label">
                      Following
                    </label>
                    <input
                      type="text"
                      id="following"
                      name="following"
                      value={formData.following}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="followers" className="form-label">
                      Followers
                    </label>
                    <input
                      type="text"
                      id="followers"
                      name="followers"
                      value={formData.followers}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="likes" className="form-label">
                    Total Likes
                  </label>
                  <input
                    type="text"
                    id="likes"
                    name="likes"
                    value={formData.likes}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Balance & Coins Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("balanceCoins")}>
                <h2 className="section-title">Balance & Coins</h2>
                <svg
                  className={`section-chevron ${collapsedSections.balanceCoins ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.balanceCoins ? "collapsed" : ""}`}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="balance" className="form-label">
                      Balance Amount
                    </label>
                    <input
                      type="text"
                      id="balance"
                      name="balance"
                      value={formData.balance}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="currency" className="form-label">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="JPY">JPY</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="coins" className="form-label">
                    Coins
                  </label>
                  <input
                    type="text"
                    id="coins"
                    name="coins"
                    value={formData.coins}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estimatedRewards" className="form-label">
                    Estimated Rewards
                  </label>
                  <input
                    type="text"
                    id="estimatedRewards"
                    name="estimatedRewards"
                    value={formData.estimatedRewards}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="0.00"
                  />
                </div>

                {/* Balance Details Section */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contentRewardsDiamonds" className="form-label">
                      Content Rewards Diamonds
                    </label>
                    <input
                      type="text"
                      id="contentRewardsDiamonds"
                      name="contentRewardsDiamonds"
                      value={formData.contentRewardsDiamonds}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contentRewardsAmount" className="form-label">
                      Content Rewards Amount
                    </label>
                    <input
                      type="text"
                      id="contentRewardsAmount"
                      name="contentRewardsAmount"
                      value={formData.contentRewardsAmount}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="monthlyEarnings" className="form-label">
                      Monthly Earnings
                    </label>
                    <input
                      type="text"
                      id="monthlyEarnings"
                      name="monthlyEarnings"
                      value={formData.monthlyEarnings}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="incomeStatus" className="form-label">
                      Income+ Status
                    </label>
                    <input
                      type="text"
                      id="incomeStatus"
                      name="incomeStatus"
                      value={formData.incomeStatus}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="To be retired"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="incomeTitle" className="form-label">
                      Income+ Title
                    </label>
                    <input
                      type="text"
                      id="incomeTitle"
                      name="incomeTitle"
                      value={formData.incomeTitle}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Income+"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Withdraw Money Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("withdrawMoney")}>
                <h2 className="section-title">Withdraw Money</h2>
                <svg
                  className={`section-chevron ${collapsedSections.withdrawMoney ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.withdrawMoney ? "collapsed" : ""}`}>
                {/* Info Lines */}
                <div className="form-row">
                  <label className="form-label">Account Info Lines</label>
                  {formData.withdrawInfoLines.map((infoLine, index) => (
                    <div key={index} className="form-group" style={{ marginBottom: "12px" }}>
                      <label htmlFor={`infoLine${index}`} className="form-label">
                        Info Line {index + 1}
                      </label>
                      <input
                        type="text"
                        id={`infoLine${index}`}
                        name={`infoLine${index}`}
                        value={infoLine}
                        onChange={(e) => {
                          const newInfoLines = [...formData.withdrawInfoLines];
                          newInfoLines[index] = e.target.value;
                          setFormData({ ...formData, withdrawInfoLines: newInfoLines });
                        }}
                        className="form-input"
                        placeholder={`Enter info line ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Primary Badge Settings */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="primaryBadgeText" className="form-label">
                      Primary Badge Text
                    </label>
                    <input
                      type="text"
                      id="primaryBadgeText"
                      name="primaryBadgeText"
                      value={formData.primaryBadgeText}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter badge text"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="primaryBadgeBackgroundColor" className="form-label">
                      Badge Background Color
                    </label>
                    <div className="color-input-wrapper">
                      <input
                        type="color"
                        id="primaryBadgeBackgroundColor"
                        name="primaryBadgeBackgroundColor"
                        value={formData.primaryBadgeBackgroundColor}
                        onChange={handleInputChange}
                        className="form-input color-input"
                      />
                      <input
                        type="text"
                        value={formData.primaryBadgeBackgroundColor}
                        onChange={handleInputChange}
                        name="primaryBadgeBackgroundColor"
                        className="form-input color-text"
                        placeholder="#e8f4f0"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="primaryBadgeTextColor" className="form-label">
                      Badge Text Color
                    </label>
                    <div className="color-input-wrapper">
                      <input
                        type="color"
                        id="primaryBadgeTextColor"
                        name="primaryBadgeTextColor"
                        value={formData.primaryBadgeTextColor}
                        onChange={handleInputChange}
                        className="form-input color-input"
                      />
                      <input
                        type="text"
                        value={formData.primaryBadgeTextColor}
                        onChange={handleInputChange}
                        name="primaryBadgeTextColor"
                        className="form-input color-text"
                        placeholder="#668b84"
                      />
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Badge Preview</label>
                    <div className="badge-preview">
                      <span
                        className="preview-badge"
                        style={{
                          backgroundColor: formData.primaryBadgeBackgroundColor,
                          color: formData.primaryBadgeTextColor,
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "600",
                          display: "inline-block",
                        }}
                      >
                        {formData.primaryBadgeText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Management Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("transactionManagement")}>
                <h2 className="section-title">Transaction Management</h2>
                <svg
                  className={`section-chevron ${collapsedSections.transactionManagement ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`section-content ${collapsedSections.transactionManagement ? "collapsed" : ""}`}
              >
                {/* Transaction List */}
                <div className="transaction-list">
                  <div className="transaction-list-header">
                    <h3>Existing Transactions ({currentTransactions.length})</h3>
                    <button
                      type="button"
                      className="add-transaction-btn"
                      onClick={() => setShowTransactionForm(true)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Add Transaction
                    </button>
                  </div>

                  {currentTransactions.length === 0 ? (
                    <div className="no-transactions">
                      <p>No transactions found. Add your first transaction!</p>
                    </div>
                  ) : (
                    <div className="transaction-items">
                      {currentTransactions.map((transaction) => (
                        <div key={transaction.id} className="transaction-item">
                          <div className="transaction-info">
                            <div className="transaction-title">{transaction.title}</div>
                            <div className="transaction-meta">
                              {transaction.activityType} • {transaction.status} • {transaction.created}
                            </div>
                            <div className="transaction-amount">${transaction.amount}</div>
                          </div>
                          <div className="transaction-actions">
                            <button
                              type="button"
                              className="edit-btn"
                              onClick={() => handleEditTransaction(transaction)}
                              title="Edit Transaction"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="delete-btn"
                              onClick={() => handleDeleteTransaction(transaction.id)}
                              title="Delete Transaction"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Transaction Form */}
                {showTransactionForm && (
                  <div className="transaction-form">
                    <div className="form-header">
                      <h3>{editingTransaction ? "Edit Transaction" : "Add New Transaction"}</h3>
                      <button type="button" className="close-form-btn" onClick={handleCancelTransactionForm}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="transactionTitle" className="form-label">
                          Transaction Title *
                        </label>
                        <input
                          type="text"
                          id="transactionTitle"
                          name="title"
                          value={transactionForm.title}
                          onChange={handleTransactionFormChange}
                          className="form-input"
                          placeholder="e.g., Programme de Récompenses pour les créateurs"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="transactionAmount" className="form-label">
                          Amount *
                        </label>
                        <input
                          type="number"
                          id="transactionAmount"
                          name="amount"
                          value={transactionForm.amount}
                          onChange={handleTransactionFormChange}
                          className="form-input"
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="transactionStatus" className="form-label">
                          Status
                        </label>
                        <select
                          id="transactionStatus"
                          name="status"
                          value={transactionForm.status}
                          onChange={handleTransactionFormChange}
                          className="form-select"
                        >
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                          <option value="Failed">Failed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="transactionType" className="form-label">
                          Transaction Type
                        </label>
                        <select
                          id="transactionType"
                          name="transactionType"
                          value={transactionForm.transactionType}
                          onChange={handleTransactionFormChange}
                          className="form-select"
                        >
                          <option value="Rewards">Rewards</option>
                          <option value="Payment">Payment</option>
                          <option value="Refund">Refund</option>
                          <option value="Fee">Fee</option>
                          <option value="Bonus">Bonus</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="activityType" className="form-label">
                          Activity Type
                        </label>
                        <select
                          id="activityType"
                          name="activityType"
                          value={transactionForm.activityType}
                          onChange={handleTransactionFormChange}
                          className="form-select"
                        >
                          <option value="Income+">Income+</option>
                          <option value="Expense-">Expense-</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="customTransactionId" className="form-label">
                          Custom Transaction ID
                        </label>
                        <input
                          type="text"
                          id="customTransactionId"
                          name="transactionId"
                          value={transactionForm.transactionId}
                          onChange={handleTransactionFormChange}
                          className="form-input"
                          placeholder="Leave empty to auto-generate"
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="button" className="secondary-btn" onClick={handleCancelTransactionForm}>
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="primary-btn"
                        onClick={editingTransaction ? handleUpdateTransaction : handleAddTransaction}
                      >
                        {editingTransaction ? "Update Transaction" : "Add Transaction"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Management Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("videoManagement")}>
                <h2 className="section-title">Video Management</h2>
                <svg
                  className={`section-chevron ${collapsedSections.videoManagement ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.videoManagement ? "collapsed" : ""}`}>
                <div className="subsection">
                  <h3 className="subsection-title">Video Thumbnails</h3>
                  <p className="section-description">
                    Swipe through your videos and click to upload new thumbnails.
                  </p>

                  <div className="video-slider-container">
                    <div className="video-slider">
                      {currentVideos.map((video) => (
                        <div
                          key={video.id}
                          className="video-slide"
                          onClick={() => handleVideoThumbnailClick(video.id)}
                        >
                          <div className="video-thumbnail-wrapper">
                            <img
                              src={video.thumbnail}
                              alt={video.title || `Video ${video.id}`}
                              className="video-thumbnail"
                            />
                            <div className="video-overlay-dashboard">
                              <div className="video-views-container">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="play-icon"
                                >
                                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                                </svg>
                                <span className="video-views">{video.views}</span>
                              </div>
                            </div>
                            <div className="edit-overlay">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M12 5v14m-7-7h14"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span>Upload</span>
                            </div>
                          </div>
                          <p className="video-title-small">{video.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* File input for thumbnail upload */}
                  <label
                    htmlFor="thumbnail-upload"
                    className="file-upload-label btn btn-primary"
                    style={{ display: "none" }}
                  >
                    Upload Thumbnail
                  </label>
                  <input
                    type="file"
                    id="thumbnail-upload"
                    accept="image/*"
                    className="file-input-hidden"
                    onChange={handleThumbnailFileUpload}
                    capture="environment"
                  />
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Video Views</h3>
                  <p className="section-description">Edit the view counts for each of your videos.</p>

                  <div className="video-views-grid">
                    {currentVideos.map((video) => (
                      <div key={video.id} className="video-views-item">
                        <div className="video-info">
                          <img
                            src={video.thumbnail}
                            alt={video.title || `Video ${video.id}`}
                            className="video-mini-thumbnail"
                          />
                          <div className="video-details">
                            <p className="video-title-mini">{video.title}</p>
                            <p className="video-id">Video #{video.id}</p>
                          </div>
                        </div>
                        <div className="video-views-input-container">
                          <label htmlFor={`video-views-${video.id}`} className="form-label">
                            Views
                          </label>
                          <input
                            type="text"
                            id={`video-views-${video.id}`}
                            value={video.views}
                            onChange={(e) => handleVideoViewsChange(video.id, e.target.value)}
                            className="form-input video-views-input"
                            placeholder="e.g., 12.5K"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("notifications")}>
                <h2 className="section-title">Notification Settings</h2>
                <svg
                  className={`section-chevron ${collapsedSections.notifications ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.notifications ? "collapsed" : ""}`}>
                <p className="section-description">
                  Set notification counts for Friends and Inbox tabs. Use 0 to hide badges.
                </p>

                <div className="form-group">
                  <label className="form-label">Friends Tab Avatar</label>
                  <div className="avatar-upload-section">
                    <div className="avatar-preview">
                      <img src={formData.friendAvatar} alt="Friend Avatar" className="avatar-preview-img" />
                    </div>
                    <div className="avatar-upload-controls">
                      <label htmlFor="friend-avatar-upload" className="btn btn-primary file-upload-label">
                        Upload Friend Avatar
                      </label>
                      <input
                        type="file"
                        id="friend-avatar-upload"
                        accept="image/*"
                        className="file-input-hidden"
                        onChange={handleFriendAvatarFileUpload}
                        capture="environment"
                      />
                      <button type="button" onClick={handleResetFriendAvatar} className="btn btn-secondary">
                        Reset to Default
                      </button>
                    </div>
                  </div>
                  <small className="form-hint">
                    This image will appear in the Friends tab of the bottom navigation
                  </small>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="friendsNotifications" className="form-label">
                      Friends Notifications
                    </label>
                    <input
                      type="number"
                      id="friendsNotifications"
                      name="friendsNotifications"
                      value={formData.friendsNotifications}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., 3"
                      min="0"
                      max="999"
                    />
                    <small className="form-hint">Numbers ≥ 100 will display as "99+"</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inboxNotifications" className="form-label">
                      Inbox Notifications
                    </label>
                    <input
                      type="number"
                      id="inboxNotifications"
                      name="inboxNotifications"
                      value={formData.inboxNotifications}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., 15"
                      min="0"
                      max="999"
                    />
                    <small className="form-hint">Numbers ≥ 100 will display as "99+"</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Control Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("analytics")}>
                <h2 className="section-title">Analytics Control (TikTok Studio)</h2>
                <svg
                  className={`section-chevron ${collapsedSections.analytics ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.analytics ? "collapsed" : ""}`}>
                <div className="analytics-description">
                  <p>
                    Control the analytics values displayed in TikTok Studio page. Changes here will reflect in
                    the Studio analytics section.
                  </p>
                </div>

                <div className="analytics-controls">
                  <div className="analytics-group">
                    <h4>Post Views</h4>
                    <div className="analytics-inputs">
                      <div className="form-group">
                        <label htmlFor="postViewsValue">Value</label>
                        <input
                          type="text"
                          id="postViewsValue"
                          value={currentAnalytics.postViews.value}
                          onChange={(e) => handleAnalyticsChange("postViews", "value", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="postViewsChange">Change (%)</label>
                        <input
                          type="text"
                          id="postViewsChange"
                          value={currentAnalytics.postViews.change}
                          onChange={(e) => handleAnalyticsChange("postViews", "change", e.target.value)}
                          className="form-input"
                        />
                        <small className="form-hint">
                          Positive values show increase (blue arrow), negative show decrease (gray arrow)
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-group">
                    <h4>Net Followers</h4>
                    <div className="analytics-inputs">
                      <div className="form-group">
                        <label htmlFor="netFollowersValue">Value</label>
                        <input
                          type="text"
                          id="netFollowersValue"
                          value={currentAnalytics.netFollowers.value}
                          onChange={(e) => handleAnalyticsChange("netFollowers", "value", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="netFollowersChange">Change (%)</label>
                        <input
                          type="text"
                          id="netFollowersChange"
                          value={currentAnalytics.netFollowers.change}
                          onChange={(e) => handleAnalyticsChange("netFollowers", "change", e.target.value)}
                          className="form-input"
                        />
                        <small className="form-hint">
                          Positive values show increase (blue arrow), negative show decrease (gray arrow)
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-group">
                    <h4>Likes</h4>
                    <div className="analytics-inputs">
                      <div className="form-group">
                        <label htmlFor="likesValue">Value</label>
                        <input
                          type="text"
                          id="likesValue"
                          value={currentAnalytics.likes.value}
                          onChange={(e) => handleAnalyticsChange("likes", "value", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="likesChange">Change (%)</label>
                        <input
                          type="text"
                          id="likesChange"
                          value={currentAnalytics.likes.change}
                          onChange={(e) => handleAnalyticsChange("likes", "change", e.target.value)}
                          className="form-input"
                        />
                        <small className="form-hint">
                          Positive values show increase (blue arrow), negative show decrease (gray arrow)
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="analytics-preview">
                  <h4>Current Analytics Preview</h4>
                  <div className="preview-cards">
                    <div className="preview-card">
                      <div className="preview-label">Post views</div>
                      <div className="preview-value">{currentAnalytics.postViews.value}</div>
                      <div className={`preview-change ${currentAnalytics.postViews.trend}`}>
                        <span className="preview-icon">
                          {currentAnalytics.postViews.trend === "increase" ? "↑" : "↓"}
                        </span>
                        <span>{Math.abs(currentAnalytics.postViews.change)}%</span>
                      </div>
                    </div>
                    <div className="preview-card">
                      <div className="preview-label">Net followers</div>
                      <div className="preview-value">{currentAnalytics.netFollowers.value}</div>
                      <div className={`preview-change ${currentAnalytics.netFollowers.trend}`}>
                        <span className="preview-icon">
                          {currentAnalytics.netFollowers.trend === "increase" ? "↑" : "↓"}
                        </span>
                        <span>{Math.abs(currentAnalytics.netFollowers.change)}%</span>
                      </div>
                    </div>
                    <div className="preview-card">
                      <div className="preview-label">Likes</div>
                      <div className="preview-value">{currentAnalytics.likes.value}</div>
                      <div className={`preview-change ${currentAnalytics.likes.trend}`}>
                        <span className="preview-icon">
                          {currentAnalytics.likes.trend === "increase" ? "↑" : "↓"}
                        </span>
                        <span>{Math.abs(currentAnalytics.likes.change)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Post Section */}
            <div className="form-section">
              <div
                className="section-header"
                onClick={() => toggleSection("latestPost")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSection("latestPost");
                  }
                }}
              >
                <h2 className="section-title">Latest Post Settings</h2>
                <svg
                  className={`section-chevron ${collapsedSections.latestPost ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.latestPost ? "collapsed" : ""}`}>
                <div className="latest-post-description">
                  <p>
                    Control the views and likes displayed for "Your latest post" in TikTok Studio page. These
                    values represent the performance of the most recent video post.
                  </p>
                </div>

                <div className="latest-post-controls">
                  <div className="latest-post-group">
                    <h4>Latest Post Views</h4>
                    <div className="form-group">
                      <label htmlFor="latestPostViews">Views Count</label>
                      <input
                        type="text"
                        id="latestPostViews"
                        value={currentLatestPost.views}
                        onChange={(e) => handleLatestPostChange("views", e.target.value)}
                        className="form-input"
                        placeholder="Enter number of views"
                      />
                      <small className="form-hint">Number of times your latest post has been viewed</small>
                    </div>
                  </div>

                  <div className="latest-post-group">
                    <h4>Latest Post Likes</h4>
                    <div className="form-group">
                      <label htmlFor="latestPostLikes">Likes Count</label>
                      <input
                        type="text"
                        id="latestPostLikes"
                        value={currentLatestPost.likes}
                        onChange={(e) => handleLatestPostChange("likes", e.target.value)}
                        className="form-input"
                        placeholder="Enter number of likes"
                      />
                      <small className="form-hint">Number of likes your latest post has received</small>
                    </div>
                  </div>
                </div>

                <div className="latest-post-preview">
                  <h4>Current Latest Post Preview</h4>
                  <div className="preview-latest-post">
                    <div className="preview-post-header">Your latest post</div>
                    <div className="preview-post-stats">
                      <div className="preview-stat-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M8 5v14l11-7z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                        <span>{currentLatestPost.views}</span>
                      </div>
                      <div className="preview-stat-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                        <span>{currentLatestPost.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monetization Control Section */}
            <div className="form-section">
              <div
                className="section-header"
                onClick={() => toggleSection("monetization")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSection("monetization");
                  }
                }}
              >
                <h2 className="section-title">Monetization Control (TikTok Studio)</h2>
                <svg
                  className={`section-chevron ${collapsedSections.monetization ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.monetization ? "collapsed" : ""}`}>
                <div className="monetization-description">
                  <p>
                    Control the monetization values displayed in TikTok Studio page. Balance and Estimated
                    Rewards are now managed in the "Balance & Coins" section above.
                  </p>
                </div>

                <div className="monetization-preview">
                  <h4>Current Monetization Preview</h4>
                  <div className="preview-monetization">
                    <div className="preview-balance-card">
                      <div className="preview-card-title">Balance</div>
                      <div className="preview-card-amount">${currentBalance}</div>
                    </div>
                    <div className="preview-rewards-card">
                      <div className="preview-card-title">Estimated rewards</div>
                      <div className="preview-card-amount">${formData.estimatedRewards}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Posts Control Section */}
            <div className="form-section">
              <div
                className="section-header"
                onClick={() => toggleSection("trendingPosts")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSection("trendingPosts");
                  }
                }}
              >
                <h2 className="section-title">Trending Posts Control (TikTok Studio)</h2>
                <svg
                  className={`section-chevron ${collapsedSections.trendingPosts ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`section-content ${collapsedSections.trendingPosts ? "collapsed" : ""}`}>
                <div className="trending-posts-editor">
                  <p className="section-description">
                    Manage the trending posts displayed in the TikTok Studio "Trending in Monetization"
                    section.
                  </p>

                  <div className="trending-posts-list">
                    {currentTrendingPosts.map((post, index) => (
                      <div key={post.id} className="trending-post-editor">
                        <div className="post-header">
                          <h4>Post {index + 1}</h4>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Thumbnail Image</label>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (event) => {
                                    const updatedPosts = [...currentTrendingPosts];
                                    updatedPosts[index] = { ...post, thumbnail: event.target?.result as string };
                                    dispatch(updateTrendingPosts(updatedPosts));
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                            {post.thumbnail && (
                              <div className="thumbnail-preview">
                                <img src={post.thumbnail} alt="Thumbnail preview" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              value={post.title}
                              onChange={(e) => {
                                const updatedPosts = [...currentTrendingPosts];
                                updatedPosts[index] = { ...post, title: e.target.value };
                                dispatch(updateTrendingPosts(updatedPosts));
                              }}
                              placeholder="Enter post title"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Likes</label>
                            <input
                              type="text"
                              value={post.likes}
                              onChange={(e) => {
                                const updatedPosts = [...currentTrendingPosts];
                                updatedPosts[index] = { ...post, likes: e.target.value };
                                dispatch(updateTrendingPosts(updatedPosts));
                              }}
                              placeholder="e.g., 85.7K"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="preview-section">
                    <h4>Live Preview</h4>
                    <div className="trending-posts-preview">
                      {currentTrendingPosts.map((post) => (
                        <div key={post.id} className="preview-post-item">
                          <div className="preview-post-thumbnail">
                            <img src={post.thumbnail} alt={post.title} />
                            <div className="preview-post-overlay">
                              <div className="preview-like-count">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                <span>{post.likes}</span>
                              </div>
                            </div>
                          </div>
                          <div className="preview-post-info">
                            <div className="preview-post-title">{post.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Notification Control Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("studioNotification")}>
                <div className="header-content">
                  <h2 className="section-title">Studio Notification Control (TikTok Studio)</h2>
                  <div className="section-info">
                    <span className="section-description">
                      Control the notification displayed in TikTok Studio page. Changes here will reflect in
                      the notification banner below the analytics section.
                    </span>
                  </div>
                </div>
                <span className={`toggle-icon ${collapsedSections.studioNotification ? "collapsed" : ""}`}>
                  ▼
                </span>
              </div>

              {!collapsedSections.studioNotification && (
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="studioNotificationTitle">Notification Title:</label>
                    <input
                      type="text"
                      id="studioNotificationTitle"
                      name="studioNotificationTitle"
                      value={formData.studioNotificationTitle}
                      onChange={handleInputChange}
                      placeholder="e.g., TikTok Studio App"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="studioNotificationSubtitle">Notification Description:</label>
                    <input
                      type="text"
                      id="studioNotificationSubtitle"
                      name="studioNotificationSubtitle"
                      value={formData.studioNotificationSubtitle}
                      onChange={handleInputChange}
                      placeholder="e.g., Scheduled posts are finally here. Only on TikTok Studio"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="studioNotificationDownloadText">Download Button Text:</label>
                    <input
                      type="text"
                      id="studioNotificationDownloadText"
                      name="studioNotificationDownloadText"
                      value={formData.studioNotificationDownloadText}
                      onChange={handleInputChange}
                      placeholder="e.g., Download"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="studioNotificationIconImage">Notification Icon:</label>
                    <div className="file-upload-section">
                      <label htmlFor="notification-icon-upload" className="btn btn-primary file-upload-label">
                        Choose Icon Image
                      </label>
                      <input
                        type="file"
                        id="notification-icon-upload"
                        accept="image/*"
                        capture="environment"
                        onChange={handleNotificationIconFileUpload}
                        style={{ display: "none" }}
                      />
                      {formData.studioNotificationIconImage && (
                        <div className="current-icon-preview">
                          <img
                            src={formData.studioNotificationIconImage}
                            alt="Notification Icon Preview"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              marginLeft: "12px",
                            }}
                          />
                          <button
                            type="button"
                            className="btn-secondary"
                            onClick={handleResetNotificationIcon}
                            style={{ marginLeft: "8px", fontSize: "12px", padding: "4px 8px" }}
                          >
                            Reset
                          </button>
                        </div>
                      )}
                      {!formData.studioNotificationIconImage && (
                        <span className="upload-hint">No icon selected</span>
                      )}
                    </div>
                  </div>

                  <div className="button-group">
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        dispatch(
                          updateStudioNotification({
                            field: "title",
                            value: formData.studioNotificationTitle,
                          })
                        );
                        dispatch(
                          updateStudioNotification({
                            field: "subtitle",
                            value: formData.studioNotificationSubtitle,
                          })
                        );
                        dispatch(
                          updateStudioNotification({
                            field: "downloadText",
                            value: formData.studioNotificationDownloadText,
                          })
                        );
                        dispatch(
                          updateStudioNotification({
                            field: "iconImage",
                            value: formData.studioNotificationIconImage,
                          })
                        );
                        toast.success("Studio notification updated successfully!");
                      }}
                    >
                      Update Studio Notification
                    </button>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          studioNotificationTitle: currentStudioNotification.title,
                          studioNotificationSubtitle: currentStudioNotification.subtitle,
                          studioNotificationDownloadText: currentStudioNotification.downloadText,
                          studioNotificationIconImage: currentStudioNotification.iconImage,
                        }));
                        toast.success("Studio notification form reset!");
                      }}
                    >
                      Reset to Current
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Reward Analytics Section */}
            <div className="form-section">
              <div className="section-header" onClick={() => toggleSection("rewardAnalytics")}>
                <h2 className="section-title">Reward Analytics Management</h2>
                <svg
                  className={`section-chevron ${collapsedSections.rewardAnalytics ? "collapsed" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {!collapsedSections.rewardAnalytics && (
                <div className="section-content">
                  {/* Add/Edit Form */}
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setShowRewardAnalyticsForm(!showRewardAnalyticsForm)}
                    >
                      {showRewardAnalyticsForm ? "Cancel" : "Add New Video"}
                    </button>
                  </div>

                  {showRewardAnalyticsForm && (
                    <div className="reward-analytics-form">
                      <div className="form-group">
                        <label htmlFor="rewardTitle">Title:</label>
                        <input
                          type="text"
                          id="rewardTitle"
                          name="title"
                          value={rewardAnalyticsForm.title}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                          placeholder="Enter video title"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardDate">Date:</label>
                        <input
                          type="text"
                          id="rewardDate"
                          name="date"
                          value={rewardAnalyticsForm.date}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                          placeholder="MM/DD format (e.g., 06/22)"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardProgram">Program:</label>
                        <select
                          id="rewardProgram"
                          name="program"
                          value={rewardAnalyticsForm.program}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                        >
                          <option value="Creator Rewards Program">Creator Rewards Program</option>
                          <option value="Creator Fund">Creator Fund</option>
                          <option value="Brand Partnership">Brand Partnership</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardStatus">Status:</label>
                        <select
                          id="rewardStatus"
                          name="status"
                          value={rewardAnalyticsForm.status}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                        >
                          <option value="Qualified">Qualified</option>
                          <option value="Disqualified">Disqualified</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardEstRewards">Estimated Rewards:</label>
                        <input
                          type="text"
                          id="rewardEstRewards"
                          name="estRewards"
                          value={rewardAnalyticsForm.estRewards}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                          placeholder="$0.00"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardVideoViews">Video Views:</label>
                        <input
                          type="text"
                          id="rewardVideoViews"
                          name="videoViews"
                          value={rewardAnalyticsForm.videoViews}
                          onChange={handleRewardAnalyticsFormChange}
                          className="form-input"
                          placeholder="1.9M, 239.6K, etc. (leave empty for disqualified)"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="rewardThumbnail">Thumbnail:</label>
                        <input
                          type="file"
                          id="rewardThumbnail"
                          accept="image/*"
                          onChange={handleRewardAnalyticsThumbnailUpload}
                          className="form-input"
                        />
                        {rewardAnalyticsForm.thumbnail && (
                          <div className="thumbnail-preview">
                            <img
                              src={rewardAnalyticsForm.thumbnail}
                              alt="Thumbnail preview"
                              className="thumbnail-image"
                            />
                          </div>
                        )}
                      </div>

                      <div className="form-actions">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={
                            editingRewardVideo
                              ? handleUpdateRewardAnalyticsVideo
                              : handleAddRewardAnalyticsVideo
                          }
                        >
                          {editingRewardVideo ? "Update Video" : "Add Video"}
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleCancelRewardAnalyticsEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Videos List */}
                  <div className="reward-analytics-list">
                    <h4>Current Reward Analytics Videos:</h4>
                    {currentRewardAnalytics.length === 0 ? (
                      <p>No reward analytics videos found.</p>
                    ) : (
                      <div className="videos-grid">
                        {currentRewardAnalytics.map((video) => (
                          <div key={video.id} className="video-item">
                            <div className="video-thumbnail">
                              <img src={video.thumbnail} alt={video.title} />
                            </div>
                            <div className="video-details">
                              <h5 className="video-title">{video.title}</h5>
                              <p className="video-meta">
                                <span>{video.date}</span> • <span>{video.program}</span>
                              </p>
                              <p className="video-status">
                                Status: <span className={video.status.toLowerCase()}>{video.status}</span>
                              </p>
                              {video.status === "Qualified" && (
                                <div className="video-earnings">
                                  <span>
                                    <span className="currency-symbol">$</span>
                                    {video.estRewards.replace("$", "")}
                                  </span>
                                  {video.videoViews && <span>{video.videoViews} views</span>}
                                </div>
                              )}
                            </div>
                            <div className="video-actions">
                              <button
                                type="button"
                                className="btn-small btn-primary"
                                onClick={() => handleEditRewardAnalyticsVideo(video)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn-small btn-danger"
                                onClick={() => handleDeleteRewardAnalyticsVideo(video.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" onClick={handleReset} className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>

          {/* Current Values Display */}
          <div className="current-values">
            <h3 className="current-values-title">Current Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-label">Username:</span>
                <span className="value-text">{currentUserName}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Balance:</span>
                <span className="value-text">
                  {currentCurrency} {currentBalance}
                </span>
              </div>
              <div className="value-item">
                <span className="value-label">Coins:</span>
                <span className="value-text">{currentCoins}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Following:</span>
                <span className="value-text">{currentFollowing}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Followers:</span>
                <span className="value-text">{currentFollowers.toLocaleString()}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Likes:</span>
                <span className="value-text">{currentLikes.toLocaleString()}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Bio:</span>
                <span className="value-text">{currentBio}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Friends Notifications:</span>
                <span className="value-text">{currentFriendsNotifications}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Inbox Notifications:</span>
                <span className="value-text">{currentInboxNotifications}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Friend Avatar:</span>
                <span className="value-text">
                  <img
                    src={currentFriendAvatar}
                    alt="Friend Avatar"
                    style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }}
                  />
                </span>
              </div>
              <div className="value-item">
                <span className="value-label">Estimated Rewards:</span>
                <span className="value-text">${currentEstimatedRewards}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Studio Notification Title:</span>
                <span className="value-text">{currentStudioNotification.title}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Studio Notification Subtitle:</span>
                <span className="value-text">{currentStudioNotification.subtitle}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Studio Download Text:</span>
                <span className="value-text">{currentStudioNotification.downloadText}</span>
              </div>
              <div className="value-item">
                <span className="value-label">Studio Icon:</span>
                <div className="value-text">
                  {currentStudioNotification.iconImage ? (
                    <img
                      src={currentStudioNotification.iconImage}
                      alt="Current Icon"
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <span>No icon selected</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Toast notifications container */}
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
