import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useUserName,
  useUserHandle,
  useProfileAvatar,
  useProfileFollowing,
  useProfileFollowers,
  useProfileLikes,
  useProfileBio,
  useProfileVideos,
  useFriendAvatar,
  useBalanceAmount,
  useBalanceCurrency,
} from "../store/hooks";
import { selectFriendsNotifications, selectInboxNotifications } from "../store/slices/userSlice";
import { getAvatarWithDefault, getVideoThumbnailWithDefault } from "../utils/imageUtils";
import { useNavigateWithLoading } from "../hooks/useNavigateWithLoading";
import "../css/styles/profile.css";
import AddAccountIcon from "../assets/images/icons/add_account.png";
import FootprintIcon from "../assets/images/icons/footprint.png";
import ShareIcon from "../assets/images/icons/share_icon.png";
import TabsIcon from "../assets/images/icons/Tabs Icon.svg";
import HeartHideIcon from "../assets/images/icons/Heart Hide Stroke Icon.svg";
import LockIcon from "../assets/images/icons/Lock Stroke Icon.svg";
import HiddenBookmarksIcon from "../assets/images/icons/hidden_bookmarks.png";
import TiktokStudioIcon from "../assets/images/icons/tiktok_studio.png";
import YourOrdersIcon from "../assets/images/icons/your_orders.png";
import HomeStrokeIcon from "../assets/images/icons/Home Stroke Icon.svg";
import ButtonIcon from "../assets/images/icons/Button Shape.svg";
import InboxIcon from "../assets/images/icons/Message Stroke Icon.svg";
import ProfileIcon from "../assets/images/icons/Account Solid Icon.svg";
import WalletIcon from "../assets/images/icons/wallet.png";
import QRIcon from "../assets/images/icons/qr.png";
import SettingsIcon from "../assets/images/icons/settings.png";
import LoopIcon from "../assets/images/icons/loop.png";

const ProfilePage: React.FC = () => {
  const navigateWithLoading = useNavigateWithLoading();
  const userName = useUserName();
  const userHandle = useUserHandle();
  const avatar = useProfileAvatar();
  const following = useProfileFollowing();
  const followers = useProfileFollowers();
  const likes = useProfileLikes();
  const bio = useProfileBio();
  const videos = useProfileVideos();
  const friendAvatar = useFriendAvatar();
  const balanceAmount = useBalanceAmount();
  const balanceCurrency = useBalanceCurrency();
  const friendsNotifications = useSelector(selectFriendsNotifications);
  const inboxNotifications = useSelector(selectInboxNotifications);
  const [activeTab, setActiveTab] = useState("videos");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to format notification count
  const formatNotificationCount = (count: number) => {
    if (count >= 100) return "99+";
    return count.toString();
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu item clicks
  const handleMenuItemClick = (item: string) => {
    setIsMenuOpen(false);
    switch (item) {
      case "tiktok-studio":
        navigateWithLoading("/tiktok-studio", { message: "Loading TikTok Studio..." });
        break;
      case "balance":
        navigateWithLoading("/balance", { message: "Loading Balance..." });
        break;
      case "dashboard":
        navigateWithLoading("/dashboard", { message: "Loading Dashboard..." });
        break;
      default:
        console.log(`Clicked on ${item}`);
    }
  };

  // Handle escape key and prevent body scroll when menu is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="container profile-page">
        {/* Header */}
        <div className="profile-header">
          <button className="back-button">
            <img src={AddAccountIcon} alt="Add account" />
          </button>

          <div className="header-icons">
            <button className="icon-btn notifications-btn">
              <img src={FootprintIcon} alt="Footprint" />
            </button>
            <button className="icon-btn notifications-btn">
              <img src={ShareIcon} alt="Share" />
            </button>
            <button className="icon-btn menu-btn" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12h18M3 6h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          {/* Speech Bubble */}
          <div className="speech-bubble">
            <span>On your mind...</span>
          </div>

          <div className="profile-avatar">
            <img src={getAvatarWithDefault(avatar)} alt="Profile Avatar" />
            <button className="add-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="profile-user-info">
            <div className="username-row">
              <h1 className="profile-username">{userName}</h1>
              <button className="arrow-profile-btn">
                <svg width="20" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="edit-profile-btn"
                onClick={() => navigateWithLoading("/dashboard", { message: "Loading Dashboard..." })}
              >
                Edit
              </button>
            </div>
            <p className="profile-handle">{userHandle}</p>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">{following}</span>
              <span className="stat-label">Following</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{followers.toLocaleString()}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{likes.toLocaleString()}</span>
              <span className="stat-label">Likes</span>
            </div>
          </div>

          <div className="profile-bio">
            <div className="bio-text">
              {bio.split("\n").map((line, index) => (
                <div key={index} className="bio-line">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button
            className="message-btn"
            onClick={() => navigateWithLoading("/tiktok-studio", { message: "Loading TikTok Studio..." })}
          >
            <img src={TiktokStudioIcon} alt="Add account" /> TikTok Studio
          </button>
          <div className="action-divider">|</div>
          <button className="share-btn">
            <img src={YourOrdersIcon} alt="Add account" /> Your orders
          </button>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-item ${activeTab === "videos" ? "active" : ""}`}
            onClick={() => setActiveTab("videos")}
          >
            <img src={TabsIcon} alt="Tab" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="dropdown-arrow">
              <polygon points="6,9 18,9 12,15" fill="currentColor" />
            </svg>
          </button>
          <button
            className={`tab-item ${activeTab === "liked" ? "active" : ""}`}
            onClick={() => setActiveTab("liked")}
          >
            <img src={LockIcon} alt="Lock" />
          </button>
          <button
            className={`tab-item ${activeTab === "loop" ? "active" : ""}`}
            onClick={() => setActiveTab("loop")}
          >
            <img src={LoopIcon} alt="Loop" />
          </button>
          <button
            className={`tab-item ${activeTab === "bookmarks" ? "active" : ""}`}
            onClick={() => setActiveTab("bookmarks")}
          >
            <img src={HiddenBookmarksIcon} alt="Hidden bookmarks" />
          </button>
          <button
            className={`tab-item ${activeTab === "locked" ? "active" : ""}`}
            onClick={() => setActiveTab("locked")}
          >
            <img src={HeartHideIcon} alt="Hidden heart" />
          </button>
        </div>

        {/* Videos Grid */}
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <img
                src={getVideoThumbnailWithDefault(video.thumbnail)}
                alt={video.title || `Video ${video.id}`}
              />
              <div className="video-overlay">
                <div className="video-views-container">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="play-icon">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" />
                  </svg>
                  <span className="video-views">{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <button className="nav-item">
            <img src={HomeStrokeIcon} alt="" />
            <span>Home</span>
          </button>

          <button className="nav-item">
            <div className="nav-item-content">
              <div className="friend-avatar">
                <img src={friendAvatar} alt="Friend" />
              </div>
              {friendsNotifications > 0 && (
                <div className="notification-badge">{formatNotificationCount(friendsNotifications)}</div>
              )}
            </div>
            <span>Friends</span>
          </button>

          <button className="nav-item nav-create">
            <img src={ButtonIcon} alt="" />
          </button>

          <button className="nav-item">
            <div className="nav-item-content">
              <img src={InboxIcon} alt="" />
              {inboxNotifications > 0 && (
                <div className="notification-badge">{formatNotificationCount(inboxNotifications)}</div>
              )}
            </div>
            <span>Inbox</span>
          </button>

          <button className="nav-item active">
            <img src={ProfileIcon} alt="Profile" />
            <span>Profile</span>
          </button>
        </div>

        {/* Bottom Sheet Menu */}
        {isMenuOpen && (
          <>
            <div className="menu-overlay" onClick={toggleMenu}></div>
            <div className="bottom-sheet-menu">
              <div className="menu-handle"></div>

              <div className="menu-items">
                <button className="menu-item" onClick={() => handleMenuItemClick("tiktok-studio")}>
                  <div className="menu-icon">
                    <img src={TiktokStudioIcon} alt="TikTok Studio" style={{ height: "20px" }} />
                  </div>
                  <span>TikTok Studio</span>
                </button>

                <button className="menu-item" onClick={() => handleMenuItemClick("balance")}>
                  <div className="menu-item-left">
                    <div className="menu-icon">
                      <img src={WalletIcon} alt="" style={{ height: "18px" }} />
                    </div>
                    <span>Balance</span>
                  </div>
                  <div className="menu-item-right">
                    <span className="balance-amount">
                      {balanceAmount} {balanceCurrency === "USD" ? "$US" : balanceCurrency}
                    </span>
                  </div>
                </button>

                <button className="menu-item" onClick={() => handleMenuItemClick("music")}>
                  <div className="menu-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18V5l12-2v13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="6" cy="18" r="3" fill="currentColor" />
                      <circle cx="18" cy="16" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <span>My Music</span>
                </button>

                <button className="menu-item" onClick={() => handleMenuItemClick("qr-code")}>
                  <div className="menu-icon">
                    <img src={QRIcon} alt="" />
                  </div>
                  <span>My QR code</span>
                </button>

                <button className="menu-item" onClick={() => handleMenuItemClick("dashboard")}>
                  <div className="menu-icon">
                    <img src={SettingsIcon} alt="" style={{ height: "24px" }} />
                  </div>
                  <span>Settings and privacy</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
