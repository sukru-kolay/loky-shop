
import { Route, Routes, Link, NavLink } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
       </Routes> 
    </>
  );
}

export default App;
