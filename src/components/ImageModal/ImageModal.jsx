import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, onClose }) => {
   if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.content}>
        <img src={urls.regular} alt={alt_description || 'Image'} className={s.image} />
        <div className={s.info}>
          <p><strong>Author:</strong> {user.name}</p>
          <p><strong>Likes:</strong> {likes}</p>
          <p><strong>Description:</strong> {alt_description || 'No description available'}</p>
        </div>
        <button className={s.closeButton} onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
