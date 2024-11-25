import s from './ImageCard.module.css';

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img className={s.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;

