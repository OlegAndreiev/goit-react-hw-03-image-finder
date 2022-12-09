import React, { Children } from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = () => (
 <div className={css.Searchbar}>
    <div className={css.SearchForm}>
  <input className={css.SearchFormInput}>
    <button type='submit' className={css.SearchFormButton}></button>
        </input>

    </div>
      
    </div>

);

export default Searchbar;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };