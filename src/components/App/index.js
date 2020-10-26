import React from 'react';
import Provider from '../../context/Provider.js'
import Canvas from '../Canvas'
import Header from '../Header'
import Toolbar from '../Toolbar'
import Imports from '../Toolbar/Imports.js'
import './style.scss';

export default function App() {

  return (
    <div className="App">
      <Provider>
        <Header/>
        <Toolbar/>
        <Canvas/>
        <Imports/>
      </Provider>
    </div>
  );
}
