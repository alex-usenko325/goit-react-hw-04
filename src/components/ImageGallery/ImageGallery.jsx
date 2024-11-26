import ImageCard from './ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map(({ id, urls, alt_description }) => (
  <li key={id} className={s.galleryItem}>
    <ImageCard
      src={urls.small}
      alt={alt_description}
      onClick={() => openModal(images)}
    />
  </li>
))}
    </ul>
  );
};

export default ImageGallery;