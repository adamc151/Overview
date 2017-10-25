import React, { Component } from 'react';
import ModalButton from './ModalButton.js';
import AppDiagram from './AppDiagram.js';

var Info = require('../messages/info.json');

export default class IsomorphicDiagram extends Component {

  callback(){
    $(".AppButton1--button").toggleClass("hovered");
    $(".AppButton2--button").toggleClass("hovered");
    $(".AppButton3--button").toggleClass("hovered");
  }

  render() {

    return (
      <div className='IsomorphicDiagram'>

        <div className='diagram'>
          <div className='nodecontainer'>

            <ModalButton title='Node.js' description={Info["Node.js"]} className='NodeJsButton' />
            <label className='NodeLabel'>Node.JS</label>
            <ModalButton title='App' buttonTitle='App' description={Info["App"]} className='AppButton1' callback={this.callback} content={<AppDiagram />} />

            <div className='NodeRow2Col1'>
              <div className='ExpressServerButton'>
                Render to DOM
                <ModalButton title='App' buttonTitle='App' description={Info["Webpack"]} className='AppButton2' callback={this.callback} />
              </div>
            </div>

            <div className='NodeRow2Col2'>
              <div className='ExpressServerButton'>
                Render to HTML string
                <ModalButton title='App' buttonTitle='App' description={Info["App"]} className='AppButton2' callback={this.callback} />
              </div>
            </div>

          </div>

          <div className='Row2'>
            <div className='WebpackGroup'>
              <ModalButton title='Webpack' buttonTitle='Webpack' description={Info["Webpack"]} className='WebpackButton' alignText={true} />
              <ModalButton title='Babel'  buttonTitle='Babel' description={Info["Babel"]} className='BabelButton' />
            </div>
          </div>

          <div className='Row3'>
            <div className='BundleGroup'>
              <div className='ClientJS'>client.js</div>
              <div className='ServerJS'>server.js</div>
            </div>
          </div>


          </div>
      </div>
    );
  }
}
