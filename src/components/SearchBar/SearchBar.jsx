import { useState } from "react";
import { GoSearch } from "react-icons/go";
import ErrorMessage from "../ErrorMassage/ErrorMassage";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      ErrorMessage("Please enter a search term!");
      return;
    }

    onSubmit(trimmedQuery);
    setSearchQuery("");
  };

  const handleIconClick = () => {
    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery) {
      handleSubmit();
    } else {
      ErrorMessage("Please enter a search term!");
    }
  };

  return (
    <header className={s.searchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <GoSearch className={s.icon} size={16} onClick={handleIconClick} />
          <input
            type="text"
            value={searchQuery}
            autoFocus
            autoComplete="off"
            onChange={handleChange}
            placeholder="Search images and photos"
            className={s.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
