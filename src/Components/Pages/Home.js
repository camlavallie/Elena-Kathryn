import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

class Home extends Component {
  render() {
    
    return (
      <div>

      <Jumbotron className="jumbotron">
          <h1>Hello beautiful people!</h1>
          <p>
            This site is intended to help me fundraise for Lifestyle Christianity University this fall!
          </p>
          <p>
            <Nav.Link href="/about"><Button variant="dark">Learn more</Button></Nav.Link>
          </p>
       
      </Jumbotron>
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
    )
  }
}

export default Home; 



