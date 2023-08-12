import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit ,minmax(350px, 1fr))",
        alignItems: "center",
        padding: "10px",
        justifyItems: "center",
      }}
    >
      {props.products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
