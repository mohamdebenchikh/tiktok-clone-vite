import { useNavigate, useLocation } from "react-router-dom";

export default function NavigationTest() {
  const navigate = useNavigate();
  const location = useLocation();

  const testRoutes = [
    { path: "/profile", label: "Profile" },
    { path: "/tiktok-studio", label: "TikTok Studio" },
    { path: "/balance", label: "Balance" },
    { path: "/balance-details", label: "Balance Details" },
    { path: "/income-verification", label: "Income Verification" },
    { path: "/income-plus", label: "Income Plus" },
    { path: "/transaction-history", label: "Transaction History" },
    { path: "/withdraw-money", label: "Withdraw Money" },
    { path: "/rewards-analytics", label: "Rewards Analytics" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black/80 text-white p-4 z-50">
      <div className="mb-2">
        <strong>Current Route:</strong> {location.pathname}
      </div>
      <div className="flex flex-wrap gap-2">
        {testRoutes.map((route) => (
          <button
            key={route.path}
            onClick={() => navigate(route.path)}
            className={`px-2 py-1 text-xs rounded ${
              location.pathname === route.path
                ? "bg-[#FE2C55] text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
}
