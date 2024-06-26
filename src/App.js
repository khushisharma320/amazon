
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: false, // Only once animation
    });
    }, []);

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    };

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 1000);

    setCart([...cart, item]);

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} warning={warning} success={success} handleClick={handleClick} />} />
        <Route path="/Details/:detailsId" element={<Details cart={cart} warning={warning} handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
