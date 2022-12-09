import React from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  state = {
    searchedName: this.props.searchedName,
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '30800366-aecfdce11bab1e79da5c222a8';
    const prevName = prevProps.searchedName;
    const newName = this.props.searchedName;
    if (prevName !== newName) {
      fetch(
        `${BASE_URL}?q=${newName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => console.log(responce))
        .then(console.log);
    }
  }

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}
export default ImageGalleryItem;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
