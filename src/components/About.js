import { Container, Row, Col } from "react-bootstrap";
import aboutimg from "../assets/img/aboutphoto.png";

export const About = () =>{

    return (
<section className="about-whole" id="about">
    <Container className="about-tab" >
        <Row>
            <h2>About</h2>
        </Row>
        <Row className="about-img-text" >
            <Col className="about_img"  >
            <img  src={aboutimg}/>
            </Col>

            <Col>

            <div className="about-text"> 
                <h3>Computer Engineering Student</h3>
                <table className="about-table">
                <tr >
                        <th>
                        <span className="about-text-head">Name: </span>
                        <span className="about-text-tail"> Sagar Giri</span>
                        </th>

                        <th>
                        <span className="about-text-head">Address: </span>
                        <span className="about-text-tail"> Tilottama-1, Rupandehi</span>
                        </th>
                </tr>

                <tr>
                        <th>
                        <span className="about-text-head" >Degree:</span>
                        <span className="about-text-tail"> Bachelor</span>
                        </th>

                        <th>
                        <span className="about-text-head"> Affiliations:</span>
                        <span className="about-text-tail">Pulchowk Engineering College</span>
                        </th>
                </tr>

                <tr>
                        <th>
                        <span className="about-text-head">Contact: </span>
                        <span className="about-text-tail"> +977-9841615449</span>
                        </th>

                        <th>
                        <span className="about-text-head">Email: </span>
                        <span className="about-text-tail">oceangiri5656@gmail.com</span>
                        </th>
                </tr>


                <tr>
                        <th>
                        <span className="about-text-head">Hobby: </span>
                        <span className="about-text-tail">Basketball, Adventure</span>
                        </th>
                        
                        <th>
                        <span className="about-text-head">Favorite Cartoon: </span>
                        <span className="about-text-tail">Scooby-Doo</span>
                        </th>
                </tr>
                </table>
            </div>

            <div>

            </div>
            </Col>
        </Row>
    </Container>
</section>
    )
}
