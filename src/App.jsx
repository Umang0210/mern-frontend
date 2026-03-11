import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;