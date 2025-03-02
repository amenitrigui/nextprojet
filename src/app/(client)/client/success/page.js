"use client"; 
import React,{useEffect} from 'react'
import Link from 'next/link'
import { useShoppingCart } from "use-shopping-cart"; 
const Success = () => { 
 
 const { clearCart } = useShoppingCart(); 
 useEffect(() => { 
 clearCart(); 
 }, []); 
 return ( 
 <div className='h-screen grid place-items-center'>
 <div className='text-center'>
 <h1 className='text-8xl font-bold'>Thank You</h1>
 <p className='text-center text-2xl'>Order Placed Successfully</p>
 <Link href="/client/cartProducts">
 <p className='bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 
cursor-pointer'>Continue Shopping</p>
 </Link>
 </div>
 </div>
 ) 
} 
export default Success
