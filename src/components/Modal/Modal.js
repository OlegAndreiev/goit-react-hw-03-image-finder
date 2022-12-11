import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}> {this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
