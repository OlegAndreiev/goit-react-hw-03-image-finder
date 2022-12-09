import React from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

class Searchbar extends React.Component {
  state = {
    searchedName: '',
  };

  handleInputChangeName = event => {
    this.setState({
      searchedName: event.currentTarget.value.trim().toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchedName === '') {
      toast.error('Search field should not be empty!');
      return;
    }
    this.props.onSubmit(this.state.searchedName);
    this.reset();
  };

  reset = () => {
    this.setState({ searchedName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <BsSearch className={css.SearchFormButtonIcon} />
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChangeName}
          ></input>
        </form>
      </header>
    );
  }
}
export default Searchbar;

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
