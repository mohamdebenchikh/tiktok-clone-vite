// Default image paths
import defaultAvatar from "../assets/images/defaults/default-avatar.svg";
import defaultVideoThumbnail from "../assets/images/defaults/default-video-thumbnail.svg";

// Get default avatar image
export const getDefaultAvatar = (): string => defaultAvatar;

// Get default video thumbnail image
export const getDefaultVideoThumbnail = (): string => defaultVideoThumbnail;

// Get avatar with fallback to default
export const getAvatarWithDefault = (avatarUrl?: string | null): string => {
    return avatarUrl || defaultAvatar;
};

// Get video thumbnail with fallback to default
export const getVideoThumbnailWithDefault = (thumbnailUrl?: string | null): string => {
    return thumbnailUrl || defaultVideoThumbnail;
};