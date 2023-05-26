import React from 'react';
import './App.css';
import { Header } from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='bg-black'>
        <h1 className='bg-yellow-300 text-6xl mt-10 lg:max-w-xl mx-auto outline-purple-800 outline-8 outline-double rounded-sm'>Hello React</h1>
      </div>
    </>
  );
}

export default App;
