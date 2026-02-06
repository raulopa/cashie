import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/HomePage/HomePage";
import { ThemeSwitch } from "@/components/theme-switch";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="relative flex flex-col h-screen">
      <Routes>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<LoginPage />} path="/login" />
      </Routes>
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeSwitch className="p-2 rounded-full bg-content2 shadow-lg border border-divider hover:scale-110 transition-transform" />
      </div>
    </div>
  );
}

export default App;

