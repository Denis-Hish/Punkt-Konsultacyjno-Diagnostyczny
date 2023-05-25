import React from 'react';

import PostImage from './../img/1-horizontal.jpg';

const Post = () => {
   return (
      <section className="post section-bg">
         <div className="container">
            <div className="section-title mt-10">
               <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            </div>
            <div className="post-card">
               <div className="post-image">
                  <img src={PostImage} alt="Post image" />
               </div>
               <div className="post-text">
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat suscipit nulla rem eligendi,
                     consectetur, dolorum eius fugit aliquid iure incidunt aut iusto? Sit qui eos exercitationem, sed
                     consequuntur eaque quasi.
                  </p>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptatum eos cupiditate ipsa
                     architecto, labore et neque at aperiam eius fuga, inventore error quidem dolor illum accusantium
                     dignissimos assumenda voluptates asperiores id totam. Laboriosam sequi sit vel soluta dolores id
                     asperiores deserunt facilis provident dignissimos corrupti consequuntur, tenetur amet nemo.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius adipisci voluptatum
                     inventore natus exercitationem molestias aspernatur sunt in? Facere rem atque pariatur! Illo sunt
                     reprehenderit a debitis architecto cumque error ea suscipit iure dolorum officiis voluptate, ex
                     maiores eligendi cum sed! Ducimus in vel aut ut sit molestiae culpa molestias quo cumque dolorem
                     voluptates earum eveniet ratione, reprehenderit itaque ipsam? Voluptatem consequuntur tempora eaque
                     impedit delectus, vitae, fugit architecto alias quo nisi dolore in porro quis, at eos eligendi
                     rerum corrupti autem. Itaque, reiciendis doloremque sunt natus libero totam, eum quibusdam cumque
                     nesciunt rerum eius ex quae provident inventore!
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia nostrum tenetur tempora
                     pariatur ea deserunt! Quia, molestiae corporis ab suscipit porro error, omnis voluptate illo
                     obcaecati eius illum nesciunt?
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Post;
