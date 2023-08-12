import "./App.css";
import useHttps from "./hooks/use-Https";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import PageNav from "./components/PageNav";

function App() {
  const { isLoading, error, sendRequest } = useHttps();
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0);
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
    setTotal(data.total);
    setProducts(loadedProducts);
    console.log("products", products);
  };

  const productsPerPage = 10;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = 10;
  const displayProducts = products?.slice(startIndex, endIndex);

  useEffect(() => {
    sendRequest(
      {
        url:
          "https://dummyjson.com/products?limit=" +
          endIndex +
          "&skip=" +
          startIndex,
      },
      fetchProducts
    );
  }, []);

  return (
    <div className="App">
      {!isLoading ? (
        products && <ProductList products={products} />
      ) : (
        <p>Loading...</p>
      )}

      <PageNav
        changePage={changePageHandler}
        noOfPages={products ? total / 10 : 0}
        currentPage={page}
      ></PageNav>
    </div>
  );
}

export default App;
