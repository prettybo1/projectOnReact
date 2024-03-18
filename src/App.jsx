import { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import PreHeader from './components/Pre-Header/Pre-Header';
import './styles/resets.css';
import './styles/normalizez.css';
import MainSection from './components/MainSection/MainSection';

function App() {

  return (
    <>
      <PreHeader />
      <Header />
      <MainSection />
    </>
  )
}

export default App
