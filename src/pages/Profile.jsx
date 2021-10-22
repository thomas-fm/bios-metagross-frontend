import React from 'react'
import { ProgressBar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../template/Header';
import style from '../style'



const Profile = () => {

    const classes = style()
    
    return (
        <React.Fragment>
            <Header />
            <div className="profile"> 
                <img src="../../assets/Isom.jpg" id="img-person"/>
                <div className="person-data">
                    <ul className="detail-person-data">
                        <li><h4 id="person-name">Ian Sommerville</h4></li>
                        <li><h4>Balance</h4></li>
                    </ul>
                    <h4>Level 80</h4>
                    <ProgressBar now={80} />
                    {/*Nanti kalau backend sudah set: ngambil data level*/}
                    {/*Nanti kalau backend sudah set: balance*/}
                </div>
            </div>

            <h4 id="label-course">Course yang telah diambil</h4>
            <div>
                <Container fluid  className={classes.list_enrolled_course}>
                    <ul>
                        <li>Backend</li>
                        <li>Frontend</li>
                        <li>Fullstack</li>
                    </ul>
                </Container>
            </div>

            <h4 id="label-taken-project">Project yang telah diambil</h4>
            <div >
                <Container fluid  className={classes.list_enrolled_course} >
                    <ul>
                        <li>Website UMKM</li>
                        <li>Website Kampus</li>
                        <li>Mockup sinar damai App</li>
                        {/*Nanti kalau backend sudah set: ngambil data project yang telah diambil*/}
                    </ul>
                </Container>
            </div>

            <h4 id="label-added-project">Project yang diajukan</h4>
            <div >
                <Container fluid className={classes.list_enrolled_course}>
                    <ul>
                        <li>Website untuk Pelabuhan</li>
                        <li>Website Kampus</li>
                        <li>Mockup sinar damai App</li>
                        {/*Nanti kalau backend sudah set: ngambil data project yang diajukan*/}
                    </ul>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Profile