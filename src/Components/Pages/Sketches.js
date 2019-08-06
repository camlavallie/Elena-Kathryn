import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


export default function Sketches() {


  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };


  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  return (
    <div>

    
      
       <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Gallery of Elena Kathryn</h1>
            <p className="lead">A gallery of Water Color</p>
          </div>
          </div>

        <div className="container">
        <div className="gallery">
      <h1>Water Colors</h1>
      <Image onClick={handleShow} src={require('../../img/small-cactus.jpg')}  fluid />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Image src={require('../../img/bear.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/cactus.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/parrot.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/elephant.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/zebra.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>




        <div className="container">
        <div className="gallery">
      <h1>Sketches</h1>
      <Image onClick={handleShow2} src={require('../../Sketches/small-owl-sketch.jpg')}  fluid />

      <Modal show2={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Image src={require('../../img/bear.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/cactus.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/parrot.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/elephant.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
          <Image src={require('../../img/zebra.jpg')} style={{width:'3000px', height:'auto', padding:'20px'}} fluid />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>

        
        
        <div className="container" style={{backgroundColor:'lightgrey'}}>
        <div className="gallery">
        <h1>Water Color</h1>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={0} style={{lor:'black'}}>
      <Carousel.Item>
        <img
          className=""
          src={require('../../Sketches/Owl.JPG')}
          style={{width:'500px', height:'auto', padding:'20px'}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          src={require('../../img/zebra.jpg')}
          style={{width:'500px', height:'auto', padding:'20px'}}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={require('../../img/zebra.jpg')}
          style={{width:'500px', height:'auto', padding:'20px'}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
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
