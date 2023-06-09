import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage"
import CostumerPage from "./pages/CostumerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductsPage from "./pages/ProductsPage";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/bills" element={<BillPage/>}/>
            <Route path="/costumers" element={<CostumerPage/>}/>
            <Route path="/statistic" element={<StatisticPage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   
  )
}

export default App;
