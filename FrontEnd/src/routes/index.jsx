import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import POS from "../pages/Pos";
import Orders from "../pages/Order";
import Register from "../pages/Rigister"; // Fixed spelling mistake

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Register />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/pos" element={<POS />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default AppRoutes;
