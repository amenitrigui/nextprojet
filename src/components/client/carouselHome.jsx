'use client'; 
import { useState } from 'react'; 
import Carousel from 'react-bootstrap/Carousel'; 
function ControlledCarousel() { 
 const [index, setIndex] = useState(0); 
 const handleSelect = (selectedIndex) => { 
 setIndex(selectedIndex); 
 }; 
 return ( 
 <Carousel activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>
 <img src="https://hamedia.b-cdn.net/Banner/deniercoupbalaih24.jpg?width=1920" />
 </Carousel.Item>
 <Carousel.Item>
 <img src="https://hamedia.b-cdn.net/wysiwyg/Femmeaccueil.jpg" />
 </Carousel.Item>
 <Carousel.Item>
 <img src="https://hamedia.b-cdn.net/wysiwyg/Hommeaccueil.jpg"/>
 </Carousel.Item>
 <Carousel.Item>
 <img src="https://hamedia.b-cdn.net/Banner/mix-accueil.jpg?width=1920" />
 </Carousel.Item>
 
 </Carousel>
 ); 
} 
export default ControlledCarousel; 