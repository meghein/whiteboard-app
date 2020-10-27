import React from 'react';
import Provider from 'context/Provider';
import Canvas from '../Canvas'
import Header from '../Header'
import Toolbar from '../Toolbar'
import Imports from '../Toolbar/Imports'
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
