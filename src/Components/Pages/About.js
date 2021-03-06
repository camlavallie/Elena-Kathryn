import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">How this works</h1>
            <p className="lead">If you see a picture you like, contact me and we will talk!</p><hr/>
            <a className="btn btn-dark btn-lg" href="/gallery" role="button">Gallery</a>
               
          </div>
        </div>
        <div className="jumbotron-2">
          <h1 className="display-4">Want to know more about LCU?</h1>
          <p className="lead">"Lifestyle Christianity University is a world-shaking training program designed to equip you in your God-given identity, release you to extend the love of Jesus in your day-to-day life, and empower you to train others to live each day filled with the power, love, and sound mind of Jesus."</p>
          <hr className="my-4"/>
          <p>If you'd like more details about LCU, click the link below.</p>
          <p className="lead">
          <a className="btn btn-dark btn-lg" href="https://lifestylechristianityu.com/" role="button" target="_blank" rel="noopener noreferrer">Lifestyle Christianity</a>
          </p>
      </div>
        <div className="jumbotron-3">
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Elena Kathryn
          </p>
          <p className="lead">Email: elenalavallie@gmail.com</p>
         
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>
      
      </div>
        }
      </div>
      
    )
  }
}

export default About;
