import React, { Component } from 'react';

export default class OverlaySection extends Component {

  constructor(props){
    super(props);
    this.showExplanation = this.showExplanation.bind(this);
  }

  showExplanation(){
    alert(`${this.props.deets}`);
  }

  render() {

    return (
      <div>
        <button onClick={this.showExplanation}>{this.props.componentName}</button>
      </div>
    );
  }
}
