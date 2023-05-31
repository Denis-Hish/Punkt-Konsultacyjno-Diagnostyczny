import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import CarouselImg1 from './../img/carousel/carousel-1.jpg';
import CarouselImg2 from './../img/carousel/carousel-2.jpg';
import CarouselImg3 from './../img/carousel/carousel-3.jpg';
import CarouselImg4 from './../img/carousel/carousel-4.jpg';

function CarouselComponent() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };

   return (
      <Carousel
         activeIndex={index}
         onSelect={handleSelect}
         slide="bool" // Включает анимацию карусели при переходе между слайдами
         pause="hover" // пауза при наведении мыши
         variant="dark" // тема
         fade="bool" // размытая смена слайдов
         touch="bool" // управление на сенсорных экранах
         keyboard="bool" // управление с клавиатуры
         interval="10000" // интервал смены слайдов в мс
      >
         <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg1} alt="First slide" />
            <Carousel.Caption>
               <p>
                  To, że wiesz o tym, że jesteś zakażony HIV daje Ci możliwość kontrolowania sytuacji. Ale żeby
                  kontrolować sytuację musisz też trochę wiedzieć o HIV i AIDS.
               </p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg2} alt="First slide" />
            <Carousel.Caption>
               <p>
                  Dzięki temu wiesz, że możesz monitorować przebieg zakażenia, zwolnić jego postęp i zapobiec
                  wystąpieniu chorób związanych za infekcją HIV.
               </p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg3} alt="First slide" />
            <Carousel.Caption>
               <p>Możesz uchronić przed zakażaniem Twoją partnerkę/partnera seksualnego.</p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg4} alt="First slide" />
            <Carousel.Caption>
               <p>Możesz mieć zdrowe dzieci.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

export default CarouselComponent;
