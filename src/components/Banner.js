import {useState, useEffect } from "react";
import { Nav,Container, Row , Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { unstable_batchedUpdates } from "react-dom";

export const Banner =() =>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Learner', 'Explorer', 'Tech Enthusiast'];
    const [text, setText]= useState('');
    const [delta, setDelta] = useState(300-Math.random()*200);
    const period = 800;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
        },[text])

        const tick = () =>{
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

            setText(updatedText);
             if (isDeleting){
                setDelta(prevDelta => prevDelta /2)
             }
             if (!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
             } else if ( isDeleting && updatedText ===""){
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
             }

             }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h2>Hi I'm Sagar Giri </h2>
                        <h3> &nbsp; <span className="wrap">{text}</span></h3>
                        <p> A passionated Computer Engineering Student who is always eager to learn and explore new ideas
                         in the technical world. With a strong desire to challenge myself, constantly seeks to push my
                          limits and expand my knowledge. Whether it's designing software applications or building
                           hardware systems, I loves to dive deep into the world of technology.</p>
                    <Nav.Link href="#connect" > <button onClick={() => console.log('connect')}>Let's Connect &rarr;</button></Nav.Link>
                    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}