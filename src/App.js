import logo from "./logo.svg";
import "./App.css";
import useHttps from "./hooks/use-Https";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, sentRequest, error] = useHttps();
  const [products, setProducts] = useState(null);

  const fetchProducts = (data) => {
    console.log("data->", data);
    setProducts(data);
    console.log("products->", products);
  };

  useEffect(() => {
    sentRequest({ url: "https://dummyjson.com/products" }, fetchProducts);
  }, []);

  return <div className="App"></div>;
}

export default App;
