import React from 'react';

interface UserIconProps {
  color?: string;
  className?: string;
}

const UserIcon: React.FC<UserIconProps> = ({ 
  color = 'currentColor', 
  className = '' 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <polygon points="15,12 16.5,15.5 20,16 17.5,18.5 18,22 15,20.5 12,22 12.5,18.5 10,16 13.5,15.5" fill={color} stroke={color} strokeWidth="1" />
    </svg>
  );
};

export default UserIcon;