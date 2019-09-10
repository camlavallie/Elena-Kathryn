import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Watercolor() {
  const [show, setShow,] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Container">
       <>
       <img 
        style={{
            display: 'block',
            marginTop: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            
          }}
       src={require('../../img/elephant.jpg')}  alt=""/>
       <br/>
      < Button className = "btn btn-dark btn-lg"
      variant = ""
      onClick = {
        handleShow
      } 
      >
       Watercolor
      </Button>
  

      <Modal 
      style={{
        width:'100%',
        height:'auto'
      }}
      show={show} onHide={handleClose}>
      <Modal.Header>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body
        style={{
        width:'100%',
        height:'auto'
      }}>
          <img 
          style={{
            display: 'block',
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/elephant.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/bear.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/cactus.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/parrot.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/zebra.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/giraffe.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/peacock.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/lake.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/leopard.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/lion.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/new-horse.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/flower.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/horse.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/queen-bee.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/flowers-4.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/leaf-2.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/leaf-3.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/leaf-1.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/flower-1.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/flower-3.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/small-giraffe-1.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/plane-2.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/rhino-1.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/mountain-1.jpg')}
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
            marginTop:'80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }}
          src={require('../../img/plane-3.jpg')}
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
