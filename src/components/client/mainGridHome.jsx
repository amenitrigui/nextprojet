import React from 'react'
import Image from 'next/image'
const MainGridHome = () => { 
 return ( 
<div className="container overflow-hidden">
 <div className="row gy-5">
 <div className="col-5">
 <div className="p-3 border bg-light">
 <Image
 src="https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/368x/17f82f742ffe127f42dca9de82fb58b1/0/0/0032368-black_3__1.jpg"
 width={500}
 height={500}
 alt="Picture"
 />
 
 </div>
 </div>
  <div className="col-5">
 <div className="p-3 border bg-light"> 
  <Image
 src=" https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/440x/17f82f742ffe127f42dca9de82fb58b1/0/0/0031842-purple_3__1.jpg"
 width={500}
 height={500}
 alt="Picture"
 />


 </div>
 </div>
 <div className="col-5">
 <div className="p-3 border bg-light"> 
 <Image
 src="https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/368x/17f82f742ffe127f42dca9de82fb58b1/0/0/0032980_1__1.jpg"
 width={500}
 height={500}
 alt="Picture"
 />
 </div>
 </div>
 <div className="col-5">
 <div className="p-3 border bg-light"> 
 <Image
 src="https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/440x/17f82f742ffe127f42dca9de82fb58b1/0/0/0031881-black_2__1.jpg"
 width={500}
 height={500}
 alt="Picture"
 />
 </div>
 </div>




 
 </div>
</div>
 ) 
} 
export default MainGridHome
