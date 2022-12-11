import React from 'react';
// import { Children } from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    searchedName: this.props.searchedName,
    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
    // tags: '',
    data: [],
  };
  responceDataInput = responce => {
    console.log(responce);
    console.log(responce.hits);
    this.setState({
      data: responce.hits,
    });
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '30800366-aecfdce11bab1e79da5c222a8';
    const prevName = prevProps.searchedName;
    const newName = this.props.searchedName;
    const currentPage = this.props.page;

    if (prevName !== newName) {
      fetch(
        `${BASE_URL}?q=${newName}&${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => responce.json())
        .then(data => this.responceDataInput(data));
    }
  }

  render() {
    const { data } = this.state;
    return (
      <ul className={css.ImageGallery}>
        {data.map(el => (
          <ImageGalleryItem
            key={el.id}
            webformatURL={el.webformatURL}
            tags={el.tags}
          />
          //   <li key={el.id} className={css.ImageGalleryItem}>
          //     <img
          //       className={css.ImageGalleryItemImage}
          //       src={el.webformatURL}
          //       alt={el.tags}
          //     />
          //   </li>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
