import React from 'react';
import css from './Button.module.css';

class Button extends React.Component {
  state = {
    //   page: this.props.onClick,
    page: 2,
  };
  loadMoreBtn = props => {
    console.log(props);
    this.props.onClick(this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <button type="button" className={css.Button} onClick={this.loadMoreBtn}>
        Load more
      </button>
    );
  }
}
export default Button;
