import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Commons/Footer";
import Header from "./components/Commons/Header";
import Home from "./components/Product/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Cart from "./components/Product/Cart";
import { CartContext, MyDispatchContext, MyUserContext } from "./configs/Contexts";
import { CartReducer, MyUserReducer } from "./configs/Reducers";
import { useReducer } from "react";
import Login from "./components/Product/Login";
import Register from "./components/Product/Register";

const App = () => {
  const [value, dispatch] = useReducer(CartReducer, 0);
  const [user, useDispatch] = useReducer(MyUserReducer, null);

  return (
    <BrowserRouter>
      <MyUserContext.Provider value={user}>
        <MyDispatchContext.Provider value={useDispatch}>
          <CartContext.Provider value={[value, dispatch]}>
            <Header />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Container>
            <Footer />
          </CartContext.Provider>
        </MyDispatchContext.Provider>
      </MyUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;