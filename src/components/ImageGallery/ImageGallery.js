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
  // responceDataInput = responce => {
  //   this.setState({
  //     data: responce.hits,
  //   });
  // };

  // paginationDataInput = responce => {
  //   this.setState(prevState => ({
  //     data: [...prevState.data, ...responce.hits],
  //   }));
  // };

  // toggleModal = data => {
  //   console.log(data);
  //   this.setState({
  //     showModal: data,
  //   });
  //   this.props.onToggleModal(this.state.showModal);
  // };

  setActiveImgIdx = idx => {
    console.log(idx);
  };

  render() {
    const { data, error } = this.props;

    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {data && (
          <ul className={css.ImageGallery}>
            {data.map((el, idx) => (
              <ImageGalleryItem
                key={el.id}
                id={el.id}
                webformatURL={el.webformatURL}
                largeImageURL={el.largeImageURL}
                tags={el.tags}
                showModal={this.props.showModal}
                onClick={() => this.setActiveImgIdx(idx)}
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
