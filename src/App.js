import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDtail from "./pages/ProductDtail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductAll />} />
      <Route path="/products" element={<ProductDtail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
