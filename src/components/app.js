import React, { Component } from 'react';
import ModalButton from './ModalButton.js';

var Info = require('../messages/info.json');

export default class App extends Component {


  callback(){
    $(".AppButton1--button").toggleClass("hovered");
    $(".AppButton2--button").toggleClass("hovered");
    $(".AppButton3--button").toggleClass("hovered");
  }


  render() {

    return (
      <div className='App'>

        <div className='OverViewTitle'>
          <h3>Overview</h3>
          <p>This is an overview of the isomorphic structure of the app.</p>
        </div>

        <div className='diagram'>
          <div className='nodecontainer'>

            <ModalButton title='Node.js' description={Info["NodeJS"]} className='NodeJsButton' noTitle={true} />
            <label className='NodeLabel'>Node.JS</label>
            <ModalButton title='App' description={Info["App"]} className='AppButton1' callback={this.callback} />

            <div className='NodeRow2Col1'>
              <div className='ExpressServerButton'>
                Render to DOM
                <ModalButton title='App' description={Info["Webpack"]} className='AppButton2' callback={this.callback} />
              </div>
            </div>

            <div className='NodeRow2Col2'>
              <div className='ExpressServerButton'>
                Render to HTML string
                <ModalButton title='App' description={Info["App"]} className='AppButton2' callback={this.callback} />
              </div>
            </div>

          </div>

          <div className='Row2'>
            <div className='WebpackGroup'>
              <ModalButton title='Webpack' description={Info["Webpack"]} className='WebpackButton' alignText={true} />
              <ModalButton title='Babel' description={Info["Babel"]} className='BabelButton' />
            </div>
          </div>

          <div className='Row3'>
            <div className='BundleGroup'>
              <div className='ClientJS'>client.js</div>
              <div className='ServerJS'>server.js</div>
            </div>
          </div>



          <div className='Row4'>

            <div className='Row4Col1'>
            </div>

            <div className='Row4Col2'>
            </div>

          </div>


          </div>
      </div>
    );
  }
}
