import "./App.css";
import useHttps from "./hooks/use-Https";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import PageNav from "./components/PageNav";

function App() {
  const { isLoading, sendRequest } = useHttps();
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  const changePageHandler = (pageNumber) => {
    setPage(pageNumber);
  };

  const currentPage = page;
  const fetchProducts = (data) => {
    const loadedProducts = data.products.map((product) => ({
      id: product.id,
      brand: product.brand,
      category: product.category,
      discountPercentage: product.discountPercentage,
      images: product.images,
      rating: product.rating,
      stock: product.stock,
      thumbnail: product.thumbnail,
      title: product.title,
      description: product.description,
      price: product.price,
    }));
    setProducts(loadedProducts);
    console.log("products", products);
  };

  useEffect(() => {
    sendRequest(
      { url: "https://dummyjson.com/products?limit=100" },
      fetchProducts
    );
  }, []);

  const productsPerPage = 10;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayProducts = products?.slice(startIndex, endIndex);

  return (
    <div className="App">
      {!isLoading ? (
        displayProducts && <ProductList products={displayProducts} />
      ) : (
        <p>Loading...</p>
      )}

      <PageNav
        changePage={changePageHandler}
        noOfPages={products ? products.length / 10 : 0}
        currentPage={page}
      ></PageNav>
    </div>
  );
}

export default App;
