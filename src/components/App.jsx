import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import css from '../components/Modal/Modal.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state = {
    searchedName: '',
    data: null,
    page: 1,
    loading: false,
    error: null,
    noData: null,
    noNewData: null,
    showModal: false,
    id: '',
    activeImgIdx: null,
  };
  reset = () => {
    this.setState({ data: null, noData: null, noNewData: null });
  };

  formSubmitHandler = searchedName => {
    this.reset();
    this.setState({ searchedName });
  };

  changePagePagination = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  responceDataInput = responce => {
    if (responce.total === 0) {
      this.setState({
        noData: true,
      });
    }
    if (responce.total !== 0) {
      this.setState({
        data: responce.hits,
        noData: false,
      });
    }
  };

  paginationDataInput = responce => {
    console.log(responce.total);

    this.setState(prevState => ({
      data: [...prevState.data, ...responce.hits],
    }));
    if (responce.total < 12) {
      this.setState({
        noNewData: true,
      });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setActiveImgIdx = idx => {
    this.setState({ activeImgIdx: idx });
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
      this.setState({ loading: true });
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
        .then(data => this.responceDataInput(data))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevPage !== newPage) {
      this.setState({ loading: true });
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
        .then(data => this.paginationDataInput(data))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const {
      searchedName,
      showModal,
      data,
      loading,
      noData,
      noNewData,
      error,
      activeImgIdx,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery
          searchedName={searchedName}
          data={data}
          error={error}
          showModal={this.toggleModal}
          activeIdx={this.setActiveImgIdx}
        />
        {noData && (
          <div style={{ fontSize: 24 }}>
            Sorry, no results were found for your request...
          </div>
        )}
        {loading && <Loader />}
        {data && !loading && !noData && !noNewData && (
          <Button onClick={this.changePagePagination} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={data[activeImgIdx].largeImageURL}
              alt={data[activeImgIdx].tags}
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
