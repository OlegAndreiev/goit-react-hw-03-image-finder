import React from 'react';
import { Children } from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({}) => <ul class="gallery">{Children}</ul>;

export default ImageGallery;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
