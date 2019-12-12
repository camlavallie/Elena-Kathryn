import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sketches from './Sketches';
import Watercolor from './Watercolor';

class Home extends Component {
  render() {
    
    return (
      <div>
      <div className = "jumbo-main flex bg-no-repeat bg-fixed bg-center bg-cover py-24 m-auto" >
            <div class="text-center p-24">
      <h2 class="text-2xl">Hello Beautiful People</h2>
      <div class="text-gray-900 text-lg">“Once your life was full of sin’s darkness, but now you have the very light of our Lord shining through you because of your union with him. Your mission is to live as children flooded with his revelation-light! And the supernatural fruits of his light will be seen in you—goodness, righteousness, and truth. Then you will learn to choose what is beautiful to our Lord."</div>
     <div class="text-gray-700">‭‭Ephesians‬‭ 5:8-10</div>
   </div>

       </div>
       
          
              <Jumbotron fluid className="jumbo-home flex bg-no-repeat bg-fixed bg-center bg-cover py-48 m-auto">
                <div className="container text-center text-lg">
     <div class="text-white">All works in the gallery have found a home. However, contact me if you areinterested in contributing for a print or personalized piece!</div>

                <div >
                  
                  <Sketches/>
     
                  <Watercolor/>
              
                </div>
                  </div>

           
            
            
                  

              </Jumbotron>
            < div className = "zebra bg-contain bg-no-repeat bg-fixed bg-center py-64 m-auto" >
             
            </div>
          
        <div class="md:flex py-24 px-12">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-64" src={require('../../img/full-logo.png')} alt="LCU"/>
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-red-600 font-bold">Want to know more about LCU?</div>
    <a href="https://lifestylechristianityu.com/" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Click This To Find Out More</a>
    <p class="mt-2 text-gray-600">"Lifestyle Christianity University is a world-shaking training program designed to equip you in your God-given identity, release you to extend the love of Jesus in your day-to-day life, and empower you to train others to live each day filled with the power, love, and sound mind of Jesus."</p>
  </div>
</div>
          {/* <h1 className="display-4">Want to know more about LCU?</h1>
          <p className="lead">"Lifestyle Christianity University is a world-shaking training program designed to equip you in your God-given identity, release you to extend the love of Jesus in your day-to-day life, and empower you to train others to live each day filled with the power, love, and sound mind of Jesus."</p>
          <hr className="my-4"/>
          <p>If you'd like more details about LCU, click the link below.</p>
          <p className="lead">
          <a className="btn btn-dark btn-lg" href="https://lifestylechristianityu.com/" role="button" target="_blank" rel="noopener noreferrer">Lifestyle Christianity</a>
          </p> */}

       
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



