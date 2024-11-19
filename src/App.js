import Navigation from "./Navigation/Navs";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Siderbar/Sidebar";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import products from "./db/data";
import Cards from "./components/Cards";
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]); // Cart state
  const [showCartModal, setShowCartModal] = useState(false); // Modal state
  const [wishlist, setWishlist] = useState([]);

  
  // Initial state for filters
  const initialFilters = {
    category: "",
    price: "",
    color: "",
  };

  // Input filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  // Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Clear all filters
  const clearFilters = (event) => {
    setSelectedCategory(initialFilters);
    setQuery("")
  };

  // Add to Cart function
const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, increment its quantity and keep the original price
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((item) => item.id === product.id);
      updatedCart[productIndex].quantity += 1; // Increase quantity
      return updatedCart;
    }

    // If the product doesn't exist, add it to the cart (new item) with quantity 1
    const newProduct = { ...product, quantity: 1 };
    const updatedCart = [...prevCart];
    updatedCart.push(newProduct); // Add the new item to the bottom of the cart
    return updatedCart;
  });
};

// Cart item count
const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

// Remove from Cart function
const removeFromCart = (productId) => {
  setCart((prevCart) => {
    const updatedCart = [...prevCart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);
    if (productIndex > -1) {
      updatedCart.splice(productIndex, 1); // Remove item using pop method
    }
    return updatedCart;
  });
};

// Update quantity function
const updateQuantity = (productId, quantity) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
};

// Filter Products function
const filterProducts = (products, selected, query) => {
  return products.filter((product) => {
    const matchesQuery = query
      ? product.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesCategory = selected
      ? [
          product.category,
          product.color,
          product.company,
          product.newPrice,
          product.title,
        ].includes(selected)
      : true;
    return matchesQuery && matchesCategory;
  });
};

const filteredProducts = filterProducts(products, selectedCategory, query);

// Add to Wishlist function
const addToWishlist = (product) => {
  setWishlist((prevWishlist) => {
    // Check if the product already exists in the wishlist
    const existingProduct = prevWishlist.find((item) => item.id === product.id);

    if (!existingProduct) {
      // Add product only if it does not exist in the wishlist
      return [...prevWishlist, product];
    }

    // Return the unchanged wishlist if the product is already present
    return prevWishlist;
  });
};

// Remove from Wishlist function (optional)
const removeFromWishlist = (productId) => {
  setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
};
  return (
    <>
       <Router>
  <Routes>
    <Route
      path="/"
      element={
        <>
          {/* Sidebar */}
          <Sidebar handleChange={handleChange} clearFilters={clearFilters} />
          {/* Navbar */}
          <Navigation
            cartItemCount={cartItemCount}
            setShowCartModal={setShowCartModal}
          />
          {/* brands */}
          <Recommended handleClick={handleClick} />
          {/* products */}
          <Product
            result={filteredProducts.map((product, index) => (
              <Cards
                key={index}
                {...product}
                addToCart={() => addToCart(product)}
                addToWishlist={() => addToWishlist(product)} // Pass function here
              />
            ))}
          />
          {/* Cart */}
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            showCartModal={showCartModal}
            setShowCartModal={setShowCartModal}
          />
        </>
      }
    />
    <Route
      path="/wishlist"
      element={
        <Wishlist
          wishlist={wishlist} // Pass updated wishlist state
          removeFromWishlist={removeFromWishlist} // Pass remove function
        />
      }
    />
    <Route
  path="/checkout"
  element={<Checkout cartItems={cart} />}
/>
  </Routes>
</Router>
          </>
  );
}

export default App;
