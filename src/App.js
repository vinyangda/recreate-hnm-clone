import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDtail from "./pages/ProductDtail";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그링니 됨

  return (
    <Routes>
      <Route path="/" element={<ProductAll />} />
      <Route path="/products" element={<ProductDtail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
