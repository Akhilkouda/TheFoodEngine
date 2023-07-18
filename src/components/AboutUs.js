import aboutus from '../Images/Aboutus.png'
import Carousel1 from '../Images/carousel1.png'
import Carousel2 from '../Images/carousel2.png'
import {Carousel, Container, Col, Card} from  'react-bootstrap'



import {Modal, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Akhil from '../Images/Akhil.jpg'


function AboutUs(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <div>
            <div className='flex-container'>
                <div className="flip-card mx-auto m-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={Akhil} className = "flip" />
                        </div>
                        <div className="flip-card-back">
                            <p className='h1'>Akhil</p> 
                            <p>20071A0481</p> 
                            
                        </div>
                    </div>
                </div>
               
                
            </div>

        </div>
    )
}

export default AboutUs