import React from 'react';
import AppProvider from '../context/AppProvider'
import Header from './Header'
import Toolbar from './toolbar'
import Canvas from './Canvas'
import Imports from './toolbar/Imports'
import Footer from './Footer'
import './App.scss';

export default function App() {

  return (
    <div className="App">
      <AppProvider>
        <Header/>
        <Toolbar/>
        <Canvas/>
        <Imports/>
        <Footer/>
      </AppProvider>
    </div>
  );
}
