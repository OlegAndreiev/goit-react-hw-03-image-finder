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
    page: 1,
  };

  formSubmitHandler = searchedName => {
    this.setState({ searchedName });
  };

  changePagePagination = morePage => {
    console.log(morePage);
    console.log(this.state.page);
    this.setState({
      page: morePage,
    });
  };

  render() {
    const { searchedName, page } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery searchedName={searchedName} page={page}>
          {/* <ImageGalleryItem /> */}
        </ImageGallery>
        <Button onClick={this.changePagePagination} />
        {/* <Loader /> */}
        {/* <Modal /> */}
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
