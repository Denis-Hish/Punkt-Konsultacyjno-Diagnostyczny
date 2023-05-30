import React from 'react';
import { Link } from 'react-router-dom';

import PaginationComponent from '../components/Pagination';

// Images
import Image1 from './../img/1-horizontal.jpg';
import Image2 from './../img/2-vertical.jpg';
import Image3 from './../img/3-panorama.jpg';
import Image4 from './../img/gallery/gallery-2.jpg';
import Image5 from './../img/gallery/gallery-5.jpg';
import Image6 from './../img/gallery/gallery-6.jpg';
import Image7 from './../img/gallery/gallery-7.jpg';
import Image8 from './../img/gallery/gallery-8.jpg';
import Image9 from './../img/gallery/gallery-1.jpg';

const News = () => {
   return (
      <section className="news section-bg">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">AKTUALNOŚCI</h2>
            </div>

            <div className="articles row g-3">
               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image1} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              <b>Horizontal image</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Voluptatum nulla cupiditate deserunt voluptatibus dolor officia illum quas libero. Iusto
                              quam dignissimos tempora obcaecati odio sapiente quisquam ratione fugit. Animi,
                              necessitatibus!
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image2} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              <b>Vertical image</b> Lorem ipsum dolor sit
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image3} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              <b>Horizontal panorama</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Doloremque maiores reprehenderit nostrum, rerum incidunt id repudiandae quas, nemo porro
                              odio provident. Voluptate totam sequi, delectus, amet ab officiis nesciunt rem quos id
                              velit iure laborum ex saepe quis dolor cum deleniti cumque nihil consequatur culpa
                              architecto illum? Sint ut, veritatis minus eveniet iure optio ipsam nisi dolorum quod.
                              Unde possimus molestiae omnis magnam porro earum ipsam placeat officiis deleniti dolores.
                              Nemo sequi nostrum maiores maxime impedit blanditiis voluptatem magnam, distinctio
                              similique tempore minus. Eius a earum, atque autem laudantium eum? Nihil odio ipsam nam
                              necessitatibus nostrum quo repellendus nemo ipsa?
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image4} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at deleniti consequuntur
                              nostrum inventore explicabo vitae exercitationem aliquid magnam repellat, ut cupiditate
                              ullam mollitia, nisi labore saepe omnis eveniet cumque?
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image5} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a quidem consectetur,
                              repellat optio non hic sapiente cumque vel explicabo, sit praesentium ullam. Sapiente,
                              dicta totam earum velit praesentium quis.
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image6} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam consectetur
                              praesentium! Consectetur repellendus odio laborum at, ipsa dicta dolorem recusandae
                              architecto, tempora beatae tempore numquam esse sint, maxime distinctio?
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image7} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum molestiae
                              laboriosam? Amet dolorum beatae, temporibus laboriosam error cum ad impedit voluptatem,
                              molestiae magnam natus at autem dolores consequatur hic?
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image8} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur sed
                              perferendis veritatis dolore aperiam. Perferendis natus, assumenda architecto nam nulla
                              debitis aspernatur corporis esse incidunt iure, minus quisquam corrupti.
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>

               <div data-aos="flip-left" className="col-12 col-md-6 col-lg-4">
                  <Link to="post">
                     <div className="card">
                        <div className="image-box">
                           <img src={Image9} alt="Post" />
                        </div>
                        <div className="text-box">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam recusandae tempora
                              animi alias excepturi. Dolor, ipsa illum incidunt optio magnam aliquid voluptatum sit
                              quidem quae natus sunt architecto officiis.
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <PaginationComponent />
      </section>
   );
};

export default News;
