import React, { Component } from 'react'


class Gallery extends Component {
  render() {
    return (
      <div>
          <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Gallery of Elena Kathryn</h1>
            <p className="lead">An assortment of mediums from sketching, water color and oil painting. </p>
          </div>
          </div>

        <div className="container">
        <div className="gallery">
        <a href={require('../../img/bear.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-lightbox="gallery">
        <img src={require('../../img/small-bear.jpg')}  alt="dd"/>
        </a>
         
         <a href={require('../../img/cactus.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-lightbox="gallery">
        <img src={require('../../img/small-cactus.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/dream-catcher.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="dream-catcher">
        <img src={require('../../img/small-dream-catcher.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/elephant.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="elephant">
        <img src={require('../../img/small-elephant.jpg')}  alt=""/>
        </a>
        </div>

        <div className="gallery">
          <a href={require('../../img/parrot.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="parrot">
        <img src={require('../../img/small-parrot.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/zebra.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="zebra">
        <img src={require('../../img/small-zebra.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/giraffe.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="giraffe">
        <img src={require('../../img/small-giraffe.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/peacock.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="peacock">
        <img src={require('../../img/small-peacock.jpg')}  alt=""/>
        </a>
        </div>

        <div className="gallery">
          <a href={require('../../img/lake.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="lake">
        <img src={require('../../img/small-lake.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/leopard.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="leopard">
        <img src={require('../../img/small-leopard.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/lion.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="lion">
        <img src={require('../../img/small-lion.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/new-horse.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="new-horse">
        <img src={require('../../img/small-new-horse.jpg')}  alt=""/>
        </a>
        </div>

         <div className="gallery">
          <a href={require('../../img/flower.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="flower">
        <img src={require('../../img/small-flower.jpg')}  alt=""/>
        </a>

         <a href={require('../../img/horse.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="horse">
        <img src={require('../../img/small-horse.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/deer.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/small-deer-2.jpg')}  alt=""/>
        </a>

           <a href={require('../../img/wolf-2.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/small-wolf-2.jpg')}  alt=""/>
        </a>
        </div>
      

        <div className = "gallery">

        <a href={require('../../img/flowers-4.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="oil-roses">
        <img src={require('../../img/flowers-4-small.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/wolf.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/small-wolf.jpg')}  alt=""/>
        </a>

         <a href={require('../../img/queen-bee.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="queen-bee">
        <img src={require('../../img/small-queen-bee.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/raccoon.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="raccoon">
        <img src={require('../../img/small-raccoon.jpg')}  alt=""/>
        </a>
        </div>


            <div className = "gallery">

        <a href={require('../../img/flower-1.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="oil-roses">
        <img src={require('../../img/small-flower-1.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/flower-2.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/small-flower-2.jpg')}  alt=""/>
        </a>

         <a href={require('../../img/flower-3.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="queen-bee">
        <img src={require('../../img/small-flower-3.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/Giraffe-1.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="raccoon">
        <img src={require('../../img/small-giraffe-1.jpg')}  alt=""/>
        </a>
        </div>


            <div className = "gallery">

        <a href={require('../../img/leaf-2.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="oil-roses">
        <img src={require('../../img/leaf-2-small.jpg')}  alt=""/>
        </a>

         <a href={require('../../img/leaf-3.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="queen-bee">
        <img src={require('../../img/leaf-3-small.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/leaf-1.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/leaf-1-small.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/bear-2.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/bear-2-small.jpg')}  alt=""/>
        </a>


        </div>
        
        <div className = "gallery">


        <a href={require('../../img/plane-2.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/plane-2-small.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/rhino-1.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/rhino-1-small.jpg')}  alt=""/>
        </a>

        <a href={require('../../img/mountain-1.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/mountain-1-small.jpg')}  alt=""/>
        </a>

         <a href={require('../../img/plane-3.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="wolf">
        <img src={require('../../img/plane-3-small.jpg')}  alt=""/>
        </a>

        </div>

        </div>




          <div className="jumbotron-3">
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Elena Kathryn
          </p>
         
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>

      </div>
      </div>
    )
  }
}

export default Gallery;