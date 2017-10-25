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
          <label>{this.props.buttonTitle}</label>
        </button>

        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           overlayClassName="Overlay"
        >

          <div className="modalContent">
            <div className="modalHeading">
              <h4>{this.props.title}</h4>
              <div>{this.props.description}</div>
            </div>
            {this.props.content}
          </div>

          <button onClick={this.handleCloseModal} className="closeModalButton">Close</button>

        </Modal>
      </div>
    );
  }
}

const props = {};