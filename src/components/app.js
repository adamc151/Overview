import React, { Component } from 'react';
import ComponentButton from './ComponentButton.js';

var Info = require('../messages/info.json');

export default class App extends Component {


  render() {

    var styles = {
      height: '100px',
      width: '100px'
    };

    console.log(Info["Webpack"]);

    return (
      <div className='App'>

        <div className='diagramRow'>

          <div className='column1'>
            <ComponentButton componentName='App' deets={Info["Webpack"]} />
          </div>

          <div className='column2'>
            <ComponentButton componentName='Webpack' deets={Info["Webpack"]} style={this.styles} />
            <ComponentButton componentName='Webpack' deets={Info["Webpack"]} style={this.styles} />

          </div>

          <div className='column3'>
            <ComponentButton componentName='Webpack' deets={Info["Webpack"]} />
          </div>

        </div>
      </div>
    );
  }
}
