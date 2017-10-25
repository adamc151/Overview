import React from 'react';
import Modal from 'react-modal';

export default class ModalButton extends React.Component {

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

    var styles = {
      width: "100%",
      height: "100%",
    }

    if(this.props.alignText){
      styles.justifyContent = "flex-start";
    }



    return (
      <div className={this.props.className}>
        <button
          className={`${this.props.className}--button`}
          onClick={this.handleOpenModal}
          style={styles}
          onMouseOver={this.props.callback}
          onMouseOut={this.props.callback}>
          <label>{this.props.noTitle ? null : this.props.title}</label>
        </button>

        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           //overlayClassName="Overlay"
        >
          <div className="modalContent">
            <button onClick={this.handleCloseModal}>Close</button>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

const props = {};
