import React from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  // state = {
  //   searchedName: this.props.searchedName,
  //   id: '',
  //   webformatURL: '',
  //   largeImageURL: '',
  //   tags: '',
  //   loading: false,
  // };

  // responceDataInput = responce => {
  //   console.log(responce);
  //   this.setState({
  //     id: responce.hits[0].id,
  //     webformatURL: responce.hits[0].webformatURL,
  //     tags: responce.hits[0].tags,
  //   });
  //   console.log(this.state);
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const API_KEY = '30800366-aecfdce11bab1e79da5c222a8';
  //   const prevName = prevProps.searchedName;
  //   const newName = this.props.searchedName;

  //   if (prevName !== newName) {
  //     this.setState({ loading: true });
  //     fetch(
  //       `${BASE_URL}?q=${newName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(responce => responce.json())
  //       .then(data => this.responceDataInput(data))
  //       .finally(() => this.state({ loading: false }));
  //     // .then(console.log);
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <li className={css.ImageGalleryItem}>
        {/* {this.state.loading && <div>Зугружаем</div>} */}
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
