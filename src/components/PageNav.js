import style from "./PageNav.module.css";

const PageNav = (props) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    console.log(props.noOfPages);
    for (let i = 1; i <= props.noOfPages; i++) {
      pageNumbers.push(i);
    }
    console.log("numbers", pageNumbers);
    // console.log("pages", props.noOfPages);
    return pageNumbers;
  };
  return (
    <div className={style.pageNumberList}>
      <button
        onClick={() => props.changePage(props.currentPage - 1)}
        className={props.currentPage <= 1 ? style.hide : style.pageNumber}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => props.changePage(pageNumber)}
          className={
            pageNumber === props.currentPage ? style.active : style.pageNumber
          }
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => props.changePage(props.currentPage + 1)}
        className={
          props.currentPage >= props.noOfPages ? style.hide : style.pageNumber
        }
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
};

export default PageNav;
