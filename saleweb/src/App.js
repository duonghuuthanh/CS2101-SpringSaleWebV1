import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Commons/Footer";
import Header from "./components/Commons/Header";
import Home from "./components/Product/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Cart from "./components/Product/Cart";
import { CartContext } from "./configs/Contexts";
import { CartReducer } from "./configs/Reducers";
import { useReducer } from "react";

const App = () => {
  const [value, dispatch] = useReducer(CartReducer, 0);

  return (
    <BrowserRouter>
      <CartContext.Provider value={[value, dispatch]}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
        <Footer />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;