import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
