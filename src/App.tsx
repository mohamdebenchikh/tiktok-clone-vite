// import Profile from "@/pages/profile";
// import BalancePage from "./pages/balanace";
// import BalanceDetailsPage from "./pages/balance-details";
// import TransactionDetailsPage from "./pages/transaction-details";
// import TransactionHistory from "./pages/transaction-history";

import TiktokStudioPage from "./pages/tiktok-studio"


function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-accent-foreground">
      <div className=" sm:max-w-sm w-full relative h-screen p-0 sm:py-2.5 ">
       <TiktokStudioPage />

      </div>

    </div>
  )
}

export default App