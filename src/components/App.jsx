import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import css from '../components/Modal/Modal.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    searchedName: '',
    // data: [],
    page: 1,
    showModal: false,
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

  // dataInput = dataInput => {
  //   console.log(dataInput);
  //   this.setState({
  //     data: dataInput,
  //   });
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { searchedName, page, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery
          searchedName={searchedName}
          page={page}
          onToggleModal={this.toggleModal}
          // data={this.dataInput}
        >
          {/* {data.map(el => (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              tags={el.tags}
            />
          ))} */}
        </ImageGallery>
        {/* <ImageGalleryItem toggleModal={this.toggleModal} /> */}
        <Button onClick={this.changePagePagination} />
        {/* <Loader /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="aaa"
              className={css.Modal}
            ></img>
          </Modal>
        )}
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
