import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    searchedName: '',
  };

  formSubmitHandler = searchedName => {
    this.setState({ searchedName });
  };

  render() {
    const { searchedName } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <ImageGallery>
        </ImageGallery> */}
        <ImageGalleryItem searchedName={searchedName} />
        {/* <Button />
        <Loader />
        <Modal /> */}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
// };
