import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Profile from "@/pages/profile";
import BalancePage from "@/pages/balanace";
import BalanceDetailsPage from "@/pages/balance-details";
import TransactionDetailsPage from "@/pages/transaction-details";
import TransactionHistory from "@/pages/transaction-history";
import TiktokStudioPage from "@/pages/tiktok-studio";
import IncomePlusPage from "@/pages/income-plus";
import IncomeVerificationPage from "@/pages/income-verification";
import RewardsAnalyticsPage from "@/pages/rewards-analytics";
import WithdrawMoneyPage from "@/pages/withdraw-money";
import WithdrawResultPage from "@/pages/withdraw-result";
import ContentRewardsPage from "@/pages/content-rewards";
import MonthlyEarningsPage from "@/pages/monthly-earnings";
import LoadingPage from "@/pages/loading";
import { LoadingProvider } from "@/contexts/loading-context";
import { LoadingOverlay } from "@/components/loading";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <div className="flex min-h-svh flex-col items-center justify-center bg-accent-foreground">
          <div className="sm:max-w-sm w-full h-screen p-0 sm:py-2.5">
            <div className="relative w-full h-full bg-white sm:rounded-lg overflow-hidden">
              <Routes>
              {/* Default route - redirect to profile */}
              <Route path="/" element={<Navigate to="/profile" replace />} />

              {/* Main pages */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/tiktok-studio" element={<TiktokStudioPage />} />

              {/* Balance related pages */}
              <Route path="/balance" element={<BalancePage />} />
              <Route path="/balance-details" element={<BalanceDetailsPage />} />

              {/* Income related pages */}
              <Route
                path="/income-verification"
                element={<IncomeVerificationPage />}
              />
              <Route path="/income-plus" element={<IncomePlusPage />} />

              {/* Transaction pages */}
              <Route
                path="/transaction-history"
                element={<TransactionHistory />}
              />
              <Route
                path="/transaction-details"
                element={<TransactionDetailsPage />}
              />

              {/* Withdraw pages */}
              <Route path="/withdraw-money" element={<WithdrawMoneyPage />} />
              <Route path="/withdraw-result" element={<WithdrawResultPage />} />

              {/* Analytics */}
              <Route
                path="/rewards-analytics"
                element={<RewardsAnalyticsPage />}
              />

              {/* Earnings pages */}
              <Route path="/content-rewards" element={<ContentRewardsPage />} />
              <Route path="/monthly-earnings" element={<MonthlyEarningsPage />} />

              {/* Loading page */}
              <Route path="/loading" element={<LoadingPage />} />

              {/* Catch all - redirect to profile */}
              <Route path="*" element={<Navigate to="/profile" replace />} />
              </Routes>
              <LoadingOverlay />
            </div>
          </div>
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;
