import style from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={style.productItem}>
      <img src={props.thumbnail} alt={props.title}></img>
      <div className={style.productDetails}>
        <p className={style.id}>{props.id}</p>
        <div className={style.title}>{props.title}</div>
        <p className={style.price}>₹{props.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
