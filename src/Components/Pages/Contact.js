import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid bg-white text-center m-auto">
          <div className="container">
            <h1 className="display-4">Contact Elena Kathryn</h1><hr/>
            <p className="lead">Email: elenalavallie@gmail.com</p><hr/>
            <p className="lead">Find me on Facebook or Instagram</p>
               <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
    

    
        <div className="jumbotron-contact">
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Elena Kathryn
          </p>
      </div>        
      </div>
    )
  }
}

export default Contact;