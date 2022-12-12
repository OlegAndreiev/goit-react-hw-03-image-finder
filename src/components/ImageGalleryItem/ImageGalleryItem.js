import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  setActiveIdx = idx => {
    this.props.showModal();
    this.props.activeIdx(idx);
  };

  render() {
    const { webformatURL, tags, idx } = this.props;

    return (
      <li
        className={css.ImageGalleryItem}
        onClick={() => this.setActiveIdx(idx)}
      >
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  activeIdx: PropTypes.func.isRequired,
  idx: PropTypes.number,
  showModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
