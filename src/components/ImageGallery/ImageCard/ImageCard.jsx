import s from './ImageCard.module.css';

const ImageCard = ({ src, alt }) => (
  <div className={s.card}>
    <img src={src} alt={alt} className={s.image} />
  </div>
);

export default ImageCard;
