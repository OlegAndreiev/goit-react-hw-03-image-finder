import React from 'react';
// import Searchbar from '../components/Searchbar';
import Searchbar from './Searchbar/Searchbar';
// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}

export default App;

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
// };
