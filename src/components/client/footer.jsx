import React from 'react'
import Image from 'next/image'
const Footer = () => { 
 return ( 
 <div className="container overflow-hidden">
 <div className="row gy-5">
 <div className="col-12">
 <div className="p-3 border bg-light">
 <Image 
 src="https://www.codeur.com/blog/wp-content/uploads/2018/02/footer-ecommerce-4.jpg" 
 width={1400} height={400}
 alt="footer"
 />


 </div>
 </div>
 </div>
 </div>
 ) 
} 
export default Footer