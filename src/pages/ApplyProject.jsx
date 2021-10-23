import React from 'react'
import style from '../style'
import { Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderHome from '../template/HeaderHome';

const ApplyProject = () => {

    const classes = style()

    return (
    <React.Fragment>
        <HeaderHome />
        <h1 className={classes.header_style}>Ambil projectmu sekarang!</h1>
        <div className={classes.project_style}>
            <div className={classes.project_detail}>        
                    <img src="../../assets/4.png" id="img-project"/>
                    <ul className={classes.list_project_detail}> 
                        <li>Nama Project : Google's AI Project</li>
                        <li>Syarat Level : 80</li>
                        <li>XP reward : 2000</li>
                        <li>Bayaran : Rp. 2.000.000</li>
                        <li><a href='' className={classes.view_project_detail}>view detail</a></li>
                    </ul>
            </div>
        </div>

        <Container >
            <Row>
                <Col></Col>
                <Col md="auto"></Col>
                <Col xs lg="1"><Button  className={classes.button_style} id='button_style'>Ambil</Button></Col>
            </Row>
        </Container>
    </React.Fragment>
    )
}

export default ApplyProject