import React from 'react';
import './App.css';
import { Link } from './components/Link/Link';

function App() {


  return (
      <div className='bg-gradient-to-r from-sky-700 from-30% via-sky-800 via-40% to-sky-950 to-70% w-ful h-full'>
        <h1 className='text-8xl mx-auto w-80 pt-32 text-center text-emerald-500 title__font'>S.Tech</h1>
        <Link />
      </div>
  );
}

export default App;
