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

  // state = {
  //   showModal: false,
  // };
  // toggleModal = props => {
  //   console.log(props);
  //   // this.setState(() => ({
  //   //   showModal: !showModal,
  //   // }));
  // };

  // handleToggleModal = () => {
  //   // console.log(event.currentTarget);
  //   // this.setState({
  //   //   showModal: true,
  //   // });
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  //   this.props.showModal(this.state.showModal);
  //   // this.props.toggleModal(this.state.showModal);
  // };

  render() {
    const { webformatURL, tags, id, showModal } = this.props;

    return (
      <li id={id} className={css.ImageGalleryItem} onClick={showModal}>
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

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
