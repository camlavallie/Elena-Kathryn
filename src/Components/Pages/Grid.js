import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Grid() {
  const [show, setShow,] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Container">
       <>
      <Button variant="" onClick={handleShow}>
       <h1 className="lead">
        Sketches
       </h1>
       <img src={require('../../Sketches/Bear.JPG')}  alt=""/>
      </Button>
      <Modal 
      style={{
        width:'100%',
        height:'auto'
      }}
      show={show} onHide={handleClose}>
        <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/Deer.JPG')}
          alt=""/>
        </Modal.Body>

         <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/Bear.JPG')}
          alt=""/>
        </Modal.Body>

         <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/Elk.jpg')}
          alt=""/>
        </Modal.Body>

         <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/kuala.jpg')}
          alt=""/>
        </Modal.Body>
        <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/llama.jpg')}
          alt=""/>
        </Modal.Body>

        <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../Sketches/Owl.JPG')}
          alt=""/>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}
