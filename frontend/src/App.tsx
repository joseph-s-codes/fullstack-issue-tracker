import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import IssuesPage from "./pages/IssuesPage";
import BasePage from "./pages/BasePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/issues" element={<IssuesPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;