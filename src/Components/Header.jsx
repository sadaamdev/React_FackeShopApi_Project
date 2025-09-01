import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className=' flex justify-between mx-[5rem] items-center my-[2rem] '>
      <h1>Shop Logo</h1>
      <ul className=' flex gap-5'>
        <Link to='/'>Home</Link>
         <Link to='/products'>Products</Link>
      </ul>

      <div className="">
        <button className=' py-2 px-9 bg-amber-500 text-white rounded-md'>Login</button>
      </div>
    </div>
  )
}
