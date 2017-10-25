import React, { Component } from 'react';
import ModalButton from './ModalButton.js';
import IsomorphicDiagram from './isomorphicDiagram';

var Info = require('../messages/info.json');

export default class HighLevel extends Component {

  callback(){
    $(".ClientAppModal--button").toggleClass("hovered");
    $(".ServerAppModal--button").toggleClass("hovered");
  }

  render() {

    return (
        <div className='HighLevelDiagram'>

            <div className='Client'>
              Browser
              <ModalButton className="ClientAppModal" title='Isomorphic Development' buttonTitle='App' description={Info["Isomorphic Development"]} callback={this.callback} content={<IsomorphicDiagram />}/>
            </div>

            <div className='Server'>
              Server
              <ModalButton className="ServerAppModal" title='Isomorphic Development' buttonTitle='App' description={Info["Isomorphic Development"]} callback={this.callback} content={<IsomorphicDiagram />} />
            </div>

        </div>
    );
  }
}
