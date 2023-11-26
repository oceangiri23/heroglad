import { Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl,Url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx-txtx">
            <div className="proj-imgbx">
                <img src={imgUrl} />
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4> <br/>
                    <span>{description}</span>
                    <p>Check out on  <a  href={Url} target="_blank" >GitHub</a>.</p>
                </div>
                </div>
                
        </Col>
    )
}