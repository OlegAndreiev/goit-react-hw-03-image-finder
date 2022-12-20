import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  // state = {
  //   // searchedName: this.props.searchedName,
  //   // page: this.props.page,

  //   // data: [],
  //   // error: null,
  //   // showModal: true,
  // };

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
                webformatURL={el.webformatURL}
                showModal={this.props.showModal}
                idx={idx}
                activeIdx={this.props.activeIdx}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  activeIdx: PropTypes.func.isRequired,
  data: PropTypes.array,
  error: PropTypes.string,
  searchedName: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
