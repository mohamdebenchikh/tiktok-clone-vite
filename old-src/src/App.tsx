import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import BalancePage from "./pages/BalancePage";
import Dashboard from "./components/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import TikTokStudioPage from "./pages/TikTokStudioPage";
import RewardsAnalyticsPage from "./pages/RewardsAnalyticsPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import IncomeVerificationPage from "./pages/IncomeVerificationPage";
import IncomePlusPage from "./pages/IncomePlusPage";
import WithdrawMoneyPage from "./pages/WithdrawMoneyPage";
import WithdrawResultPage from "./pages/WithdrawResultPage";
import BalanceDetailsPage from "./pages/BalanceDetailsPage";
import Loading from "./components/Loading.tsx";
import LoadingOverlay from "./components/LoadingOverlay.tsx";

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tiktok-studio" element={<TikTokStudioPage />} />
          <Route path="/rewards-analytics" element={<RewardsAnalyticsPage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
          <Route path="/transaction-details/:transactionId" element={<TransactionDetailsPage />} />
          <Route path="/income-verification" element={<IncomeVerificationPage />} />
          <Route path="/income-plus" element={<IncomePlusPage />} />
          <Route path="/withdraw-money" element={<WithdrawMoneyPage />} />
          <Route path="/withdraw-result" element={<WithdrawResultPage />} />
          <Route path="/balance-details" element={<BalanceDetailsPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <LoadingOverlay />
      </div>
    </BrowserRouter >
  );
}

export default App;
