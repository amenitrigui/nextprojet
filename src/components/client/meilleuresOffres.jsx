import React from 'react'
import Image from 'next/image'
const MeilleuresOffres = () => { 
 const tabOffres = [ 
 {src: "https://www.tuniscope.com/uploads/images/content/ha-f-080512-05.jpg"}, 

 {src: "https://www.tuniscope.com/uploads/images/content/ha-f-080512-04.jpg"}, 
 {src: " https://c8.alamy.com/compfr/gbwjtk/promotions-en-magasin-de-vetements-barcelone-la-catalogne-l-espagne-gbwjtk.jpg"}, 
 {src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggJvefO0KupIYnVL2oAiHH-Vko95jHW7cpg&usqp=CAU"},

 ] 
 return ( 
 <div className="container overflow-hidden">
 <h2  style={{ textAlign: 'center', fontWeight: 'bold' }}>Les meilleures offres du moment</h2> 
 <div className="row gy-5">
 
 {tabOffres.map((tab, i) => <div className="col-3" key={i}> <div
className="p-3 border bg-light">
 <div className="card">
 <Image 
 src={tab.src} 
 height={200}
 width={200}
 style={{maxWidth:'200px', maxHeight: "200px" }}
 alt="offres"/>
 </div>
 </div>
 </div>
 ) 
}
</div>
</div>
 ); 
} 
export default MeilleuresOffres