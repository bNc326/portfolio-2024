import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full p-2 text-center bg-[#333333] text-title text-h6 font-semibold'>{new Date().getFullYear().toString()}<span className='px-1'>&#xa9;</span>Kiss Bence</footer>
  )
}

export default Footer