import React from 'react'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = () => {
    <React.Fragment>
        <div>
            <Container fluid>
                <row>
                    <col>
                        <img src="../../assets/3.jpg"/>
                    </col>
                    <col xs={6} md={4}>
                        <ul>
                            <li>Nama : Python</li>
                            <li>Difficulty : Medium</li>
                            <li>XP reward : 20</li>
                        </ul>
                    </col>
                </row>
            </Container>

        <div>
            <ul>
                <li><h4>Free</h4></li>
                <li><button>Enroll</button></li>
            </ul>
        </div>
        </div>
    </React.Fragment>
}

export default Course