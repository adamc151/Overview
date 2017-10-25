import React, { Component } from 'react';
import ModalButton from './ModalButton.js';

var Info = require('../messages/info.json');

export default class AppDiagram extends Component {

  callback(){
    $(".AppButton1--button").toggleClass("hovered");
    $(".AppButton2--button").toggleClass("hovered");
    $(".AppButton3--button").toggleClass("hovered");
  }

  render() {

    return (
      <div className='AppDiagram'>

        <div className='AppDiagram__app'>
          App
        </div>

        <div className='AppDiagram__yos'>
          YOS
        </div>

      </div>
    );
  }
}
