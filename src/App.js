import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Product />} />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
        <Route> 404 Not found </Route>
      </Routes>
    </Router>
  );
}

export default App;
