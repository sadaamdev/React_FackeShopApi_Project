import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios';
export default function Products() {
    const[items,Setitems]=useState([]);
    const[loading,Setloading]=useState(true)
    const products=async()=>{
    try{
          const res=await axios.get('https://api.escuelajs.co/api/v1/products')
           Setitems(res.data)
           console.log(res.data)
    } catch(error){
        console.error('Error fetching products:', error);
    }finally{
        Setloading(false)
    }
      
  }
    useEffect(()=>{
  products()
    },[])
    if(loading) return <p>Loading........</p>
  return (
    <div className=' grid grid-cols-3 grid-rows-8 space-y-7 '>
{
    items.map(item=>(
        <li className=' flex justify-center   ' key={item.id}>
            <div className=''>
              <div className="">
                  <img className='w-[300px] ' src={item.images[0]} alt="" />

                <h1>{item.title} </h1>
                <strong>${item.price} </strong>
              </div>
            </div>
        </li>
    ))
}
    </div>
  )
}
