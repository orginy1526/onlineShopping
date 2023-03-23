import { Routes, Route } from "react-router";
import Login from "./Login";
import Cart from "./user/Cart";
import Order from "./user/Order";
import Products from "./user/Products/Products";
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
        <Route path="/products" element={<Products />} />

        {/* cart */}
        <Route path="/cart" element={<Cart />} />

        {/* order */}
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default Routing;
