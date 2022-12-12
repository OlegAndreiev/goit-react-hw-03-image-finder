import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
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
    data: null,
    page: 1,
    error: null,
    showModal: false,
    id: '',
  };

  formSubmitHandler = searchedName => {
    this.setState({ searchedName });
  };

  changePagePagination = morePage => {
    this.setState({
      page: morePage,
    });
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

  // dataInput = dataInput => {
  //   console.log(dataInput);
  //   this.setState({
  //     data: dataInput,
  //   });
  // };
  // closeModal = () => {
  //   this.setState(() => ({
  //     showModal: false,
  //   }));
  // };

  //  contacts.find(contact => contact.name === name)
  //       this.setState({
  //           contacts: [...contacts, { id: id, name: name, number: number }],
  //         });

  toggleModal = event => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    console.log(this.state);
    console.log(event.currentTarget.id);
    // this.forModalId(event.currentTarget.id);
    this.state.data.find(data => data.id === event.currentTarget.id) &&
      console.log('ok');
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '30800366-aecfdce11bab1e79da5c222a8';
    const prevName = prevState.searchedName;
    const newName = this.state.searchedName;
    const currentPage = this.state.page;
    const prevPage = prevState.page;
    const newPage = this.state.page;

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
    const { searchedName, page, showModal, data, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery
          searchedName={searchedName}
          data={data}
          error={error}
          showModal={this.toggleModal}
        />

        {data && <Button onClick={this.changePagePagination} />}
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
