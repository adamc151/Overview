import React, { Component } from 'react';
import Modal from './Modal.js';

export default class ComponentButton extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <Modal title={this.props.componentName} description={this.props.deets}/>
      </div>
    );
  }
}
