import { Routes, Route } from "react-router";
import Login from "./Login";
// import Products from "./user/Products/Products";
import Register from "./user/Register";

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* login */}
        <Route path="/" element={<Login />} />

        {/* register */}
        <Route path="/register" element={<Register />} />

        {/* products */}
        {/* <Routes path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
