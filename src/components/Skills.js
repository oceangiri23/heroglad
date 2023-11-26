import {Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlcss from '../assets/img/htmlcss.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import github from '../assets/img/github.png';
import ai from '../assets/img/ai.png';
import c from '../assets/img/c.png';
import python from '../assets/img/python.png';
import wordpress from '../assets/img/wordpress.png';
import node from '../assets/img/node.png';
import mongo from '../assets/img/mongo.png';




export const Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

        return (
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                        <div className='skill-bx'>
                        <h2> Skills </h2>
                       
                       
                     
                        <Carousel responsive={responsive} infinite={true}  className='skill-slider' >
                        <div className='item'>
                                <img src={ai} alt="Image"/>
                                <h5>Adobe Illustrator</h5>
                            </div>
                            <div className='item'>
                                <img src={c} alt="Image"/>
                                <h5>C / C++</h5>
                            </div>
                            <div className='item'>
                                <img src={wordpress} alt="Image"/>
                                <h5>WordPress</h5>
                            </div>
                            <div className='item'>
                                <img src={htmlcss} alt="Image"/>
                                <h5>HTML/CSS</h5>
                            </div>

                            <div className='item'>
                                <img src={js} alt="Image"/>
                                <h5>Java Script</h5>
                            </div>

                            <div className='item'>
                                <img src={react} alt="Image"/>
                                <h5>React</h5>
                            </div>

                            <div className='item'>
                                <img src={node} alt="Image"/>
                                <h5>Node</h5>
                            </div>

                            <div className='item'>
                                <img src={mongo} alt="Image"/>
                                <h5>MongoDB</h5>
                            </div>

                            <div className='item'>
                                <img src={github} alt="Image"/>
                                <h5>Git/Git HUB</h5>
                            </div>

                            <div className='item'>
                                <img src={python} alt="Image"/>
                                <h5>Python</h5>
                            </div>

                           
                        
                        </Carousel>
                        </div> 
                        </Col>
                    </Row>
                </Container>
                
                </section>
        )

}