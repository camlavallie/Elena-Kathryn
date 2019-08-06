import React, { Component } from 'react'

class Galla extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Gallery of Elena Kathryn</h1>
            <p className="lead">A gallery of Sketches</p>
          </div>
          </div>

        <div className="container">
        <div className="gallery">
        <a href={require('../../Sketches/Bear.JPG')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-lightbox="gallery">
        <img src={require('../../Sketches/small-bear-sketch.jpg')}  alt="dd"/>
        </a>
         
         <a href={require('../../Sketches/Deer.JPG')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-lightbox="gallery">
        <img src={require('../../Sketches/small-deer-sketch.jpg')}  alt=""/>
        </a>

        <a href={require('../../Sketches/kuala.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="dream-catcher">
        <img src={require('../../Sketches/small-kuala-sketch.jpg')}  alt=""/>
        </a>

        < a href = {
          require('../../Sketches/llama.jpg')
        }
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="elephant">
        <img src={require('../../Sketches/small-llama-sketch.jpg')}  alt=""/>
        </a>
        </div>

        <div className="gallery">
          <a href={require('../../Sketches/Owl.JPG')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="parrot">
        < img src = {
          require('../../Sketches/small-owl-sketch.jpg')
        }
        alt = "" / >
        </a>

        <a href={require('../../Sketches/Rabbit.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="zebra">
        <img src={require('../../Sketches/small-rabbit-sketch.jpg')}  alt=""/>
        </a>

        <a href={require('../../Sketches/Raccoon.JPG')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="giraffe">
        <img src={require('../../Sketches/small-raccoon-sketch.jpg')}  alt=""/>
        </a>

        <a href={require('../../Sketches/Wolf.JPG')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="peacock">
        <img src={require('../../Sketches/small-wolf-sketch.jpg')}  alt=""/>
        </a>
        </div>

        <div className="gallery">
          <a href={require('../../Sketches/Tiger.jpg')} 
        rel="noopener noreferrer" 
        target="_blank"
        data-toggle="lightbox" 
        data-gallery="img-gallery" 
        data-title="lake">
        <img src={require('../../Sketches/small-tiger-sketch.jpg')}  alt=""/>
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

export default Galla;