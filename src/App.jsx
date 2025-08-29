import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Organic Potatoes",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1566055803687-0665ef48df90?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Wheat",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Green Chillies",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1576763595295-c0371a32af78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Onions",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  const deleteProduct = (id) =>
    setProducts(products.filter((product) => product.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSellInput = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();
    const nextId = products.length + 1;
    setProducts([
      ...products,
      { id: nextId, ...newProduct, price: Number(newProduct.price) }
    ]);
    setNewProduct({ name: "", price: "", image: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🌾 Farmer's Market</div>
        <div>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Cart ({cart.length})
          </button>
          <button className="cart-btn" onClick={() => setIsModalOpen(true)}>
            Sell Product
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Fresh, Organic & Direct from Farmers</h1>
        <p>Support local farmers and enjoy healthy farm-fresh products.</p>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="section-title">Available Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price} / kg</p>
              <div className="card-actions">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button onClick={() => removeFromCart(index)}>❌</button>
              </div>
            ))}
            <h3>Total: ₹{total}</h3>
          </>
        )}
        <button className="checkout-btn">Checkout</button>
        <button
          className="checkout-btn close"
          onClick={() => setIsCartOpen(false)}
        >
          Close
        </button>
      </div>

      {/* Sell Product Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Sell New Product</h3>
            <form onSubmit={handleSellSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleSellInput}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price per kg"
                value={newProduct.price}
                onChange={handleSellInput}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={handleSellInput}
                required
              />
              <div className="modal-actions">
                <button type="submit" className="checkout-btn">
                  Add Product
                </button>
                <button
                  type="button"
                  className="checkout-btn close"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Farmer's Market | Connect with us</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            🌐 Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            📸 Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            🐦 Twitter
          </a>
          <a href="mailto:contact@farmersmarket.com">✉️ Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
