import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem><a href="http://www.google.co.uk">google</a></SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <Sidebar content={items} className="Sidebar">
      <App />
    </Sidebar>
  </Provider>
  , document.querySelector('.myContainer'));
