import React from 'react'

function Button({ customeClass, buttonName }) {
  return (
    <button className={`bg-[#5c5e60] text-gray-300 rounded p-1.5 md:p-2 lg:px-4 font-semibold
    md:hover:scale-110 hover:bg-[#3c4d5d] transition duration-500 ${customeClass}`}>{buttonName}</button>
  )
}

export default Button