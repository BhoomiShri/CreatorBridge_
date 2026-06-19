import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BrandDashboard from "./pages/BrandDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<BrandDashboard />} />
        <Route path="/creator" element={<CreatorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}