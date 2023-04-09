import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage"
import CostumerPage from "./pages/CostumerPage";
import StatisticPage from "./pages/StatisticPage";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/bills" element={<BillPage/>}/>
            <Route path="/costumers" element={<CostumerPage/>}/>
            <Route path="/statistic" element={<StatisticPage/>}/>
        </Routes>
    </BrowserRouter>
   
  )
}

export default App;
