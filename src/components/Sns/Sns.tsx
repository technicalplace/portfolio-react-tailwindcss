import React from 'react'
import { Link } from 'react-router-dom'

export const Sns = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-center text-5xl'>Sns</h1>
      <button className="flex mx-auto mt-12 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/">Home</Link>
      </button>
    </div>
  )
}