import { Routes, Route } from "react-router-dom";
import Base from "./pages/Base";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Base />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default AppRoutes;