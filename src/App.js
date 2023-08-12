import logo from "./logo.svg";
import "./App.css";
import useHttps from "./hooks/use-Https";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const { isLoading, error, sendRequest } = useHttps();
  const [products, setProducts] = useState(null);

  const fetchProducts = (data) => {
    console.log("data->", data.products);
    const loadedProducts = [];
    for (const index in data.products) {
      // console.log(product);
      loadedProducts.push({
        id: data.products[index].id,
        brand: data.products[index].brand,
        category: data.products[index].category,
        discountPercentage: data.products[index].discountPercentage,
        images: data.products[index].images,
        rating: data.products[index].rating,
        stock: data.products[index].stock,
        thumbnail: data.products[index].thumbnail,
        title: data.products[index].title,
        description: data.products[index].description,
        price: data.products[index].price,
      });
    }
    setProducts(loadedProducts);
    console.log("products->", loadedProducts);
  };
  const displayProducts = products.slice(0, 10);
  useEffect(() => {
    sendRequest(
      { url: "https://dummyjson.com/products?limit=100" },
      fetchProducts
    );
  }, []);

  return (
    <div className="App">
      <ProductList products={displayProducts} />
    </div>
  );
}

export default App;
