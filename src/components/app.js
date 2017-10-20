import React, { Component } from 'react';
import OverlaySection from './OverlaySection.js';

var Info = require('../messages/info.json');

export default class App extends Component {

  render() {

    console.log(Info["Webpack"]);

    return (
      <div>
        <h3>Hello World</h3>
        <OverlaySection componentName='Component' deets={Info["Webpack"]}/>
      </div>
    );
  }
}
