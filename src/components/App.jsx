import { useState } from "react";
import { fetchImages } from "../api/fetchImages";
import { Toaster } from "react-hot-toast";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMassage/ErrorMassage";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    await loadImages(searchQuery, 1);
  };

  const loadImages = async (searchQuery, currentPage) => {
    setLoading(true);
    setError(null);

    try {
      const results = await fetchImages(searchQuery, currentPage);
      setImages((prevImages) => [...prevImages, ...results]);
    } catch (err) {
      setError(err.message);
      ErrorMessage("Failed to load images!");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadImages(query, nextPage);
  };

  const openModal = (id) => {
    const image = images.find((img) => img.id === id);
    if (image) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {error && ErrorMessage(error)}
      {loading && query && !images.length && <Loader />}
      <ImageGallery images={images} openModal={openModal} />
      {!loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && images.length > 0 && <Loader />}
      {isModalOpen && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      <Toaster />
    </div>
  );
};

export default App;
