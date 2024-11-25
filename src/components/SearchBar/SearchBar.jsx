import { useState } from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={s.searchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search images and photos"
          className={s.input}
        />
        <button type="submit" className={s.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
