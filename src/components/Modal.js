import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }


  render () {

    return (
      <div>

        <button onClick={this.handleOpenModal}>{this.props.title}</button>

        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           //overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}>Close</button>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </ReactModal>
      </div>
    );
  }
}

const props = {};
