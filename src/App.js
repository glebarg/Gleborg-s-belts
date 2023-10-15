import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Main } from "./pages/main/main"
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";
import TagManager from 'react-gtm-module';

function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          
          <Routes>
           
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </Router>
       
      </ShopContextProvider>
    </div>
  );
}

export default App;
