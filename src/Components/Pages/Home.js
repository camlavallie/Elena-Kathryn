import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// import MediaQuery from 'react-responsive'

class Home extends Component {
  render() {
    
    return (
      // <MediaQuery minDeviceWidth={320} device={{ deviceWidth: 1600 }}>
      <div>

      <Jumbotron className="jumbo-main">

          <h1>Hello beautiful people!</h1>
          <p className="lead">
            Help me attend Lifestyle Christianity University this fall, make a donation and I will create a personalized piece for you!
          </p>
          {/* <p>
            <Nav.Link href="/about"><Button variant="dark">Learn more</Button></Nav.Link>
          </p> */}
       </Jumbotron>
       
          
              <Jumbotron fluid className="jumbo-home">
                <Container>
                  {/* <h1 className="display-4">How this works</h1> */}
            <p className="lead">All works in the gallery have found a home. However, contact me if you are interested in contributing for a personalized piece of my art!</p><hr/>
            <a className="btn btn-dark btn-lg" href="/gallery" role="button"> Gallery </a>
                </Container>
              </Jumbotron>
         

           <div className="jumbo-showcase">
          <div className="container">
          {/* this is where the zebra is showcased */}
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







       
          <div className="jumbotron-4">
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
      // </MediaQuery>
    )
  }
}

export default Home; 



