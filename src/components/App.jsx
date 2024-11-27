import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from '../api/fetchImages';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadImages(query, nextPage); 
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {error && <div className="error">{error}</div>}

    
      {loading && query && !images.length && <Loader />}

      <ImageGallery images={images} />
      
  
      {!loading && images.length > 0 && (
        <div>
          {images.length > 0 && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </div>
      )}
      
    
      {loading && images.length > 0 && <Loader />}
    </div>
  );
};

export default App;
