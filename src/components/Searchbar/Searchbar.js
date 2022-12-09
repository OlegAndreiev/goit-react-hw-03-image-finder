import React from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({}) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm}>
      <button className={css.SearchFormButton} type="submit">
        <BsSearch className={css.SearchFormButtonIcon} />
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      ></input>
    </form>
  </header>
);

export default Searchbar;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
