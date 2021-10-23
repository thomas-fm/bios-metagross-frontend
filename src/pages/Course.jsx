import React from 'react'
import style from '../style'
import { Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderHome from '../template/HeaderHome';
import { Link } from 'react-router-dom'

const Course = () => {

    const classes = style()

    return (
    <React.Fragment>
        <HeaderHome />
        <h1 className={classes.header_style}>Ambil course yang kalian minati!</h1>
        <div className={classes.course_style}>
            <div className={classes.course_detail}>
                
                    <img src="../../assets/3.png" id="img-course"/>
                    <ul className={classes.list_course_detail}> 
                        <li>Nama Course : Python</li>
                        <li>Difficulty  : Medium</li>
                        <li>XP reward   : 2000</li>
                        <li><a href="" className={classes.view_course_detail}>view detail</a></li>
                    </ul>
                    
            </div>
        </div>

        <Container >
            <Row>
                <Col><Link to="/" className={classes.view_course_style}>View other courses</Link></Col>
                <Col md="auto"><h4>Free</h4></Col>
                <Col xs lg="1"><Button  className={classes.button_style} id='button_style'>Enroll</Button></Col>
            </Row>
        </Container>
    </React.Fragment>
    )
}

export default Course