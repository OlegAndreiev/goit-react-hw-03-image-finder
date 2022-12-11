import React, { Children } from 'react';
// import { Children } from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    searchedName: this.props.searchedName,
    page: this.props.page,
    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
    // tags: '',
    data: [],
    error: null,
    showModal: true,
  };
  responceDataInput = responce => {
    this.setState({
      data: responce.hits,
    });
  };

  paginationDataInput = responce => {
    this.setState(prevState => ({
      data: [...prevState.data, ...responce.hits],
    }));
  };

  toggleModal = data => {
    console.log(data);
    this.setState({
      showModal: data,
    });
    this.props.onToggleModal(this.state.showModal);
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '30800366-aecfdce11bab1e79da5c222a8';
    const prevName = prevProps.searchedName;
    const newName = this.props.searchedName;
    const currentPage = this.props.page;
    const prevPage = prevProps.page;
    const newPage = this.props.page;

    if (prevName !== newName) {
      fetch(
        `${BASE_URL}?q=${newName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }

          return Promise.reject(new Error('Something has gone wrong!'));
        })
        .catch(error => this.setState({ error }))
        .then(data => this.responceDataInput(data));
    }
    if (prevPage !== newPage) {
      fetch(
        `${BASE_URL}?q=${newName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(new Error('Something has gone wrong!'));
        })
        .catch(error => this.setState({ error }))
        .then(data => this.paginationDataInput(data));
    }
  }

  render() {
    const { data, error } = this.state;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {data && (
          <ul className={css.ImageGallery}>
            {data.map(el => (
              <ImageGalleryItem
                key={el.id}
                webformatURL={el.webformatURL}
                tags={el.tags}
                showModal={this.toggleModal}
              />
            ))}
            {/* {children} */}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
