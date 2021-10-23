import React from 'react'
import Header from '../template/Header'
import style from '../style'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const classes = style()
    
    return (
        <div>
            <Header/>
            <div></div>
            <h2 className={classes.course}>Courses</h2>
            <section className={classes.section}>
                <Carousel className={classes.carousel}>
                    <div className={classes.image}>
                        <img  src="../../assets/1.png" />
                        <a href="" className="legend">Full Stack Development Course</a>
                    </div>
                    <div className={classes.image}>
                        <img  src="../../assets/2.png" />
                        <a href="" className="legend">Figma Full Course</a>
                    </div>
                    <div className={classes.image}>
                        <img  src="../../assets/3.png" />
                        <Link className="legend" to="/course">Python Full Course</Link>
                    </div>
                </Carousel>
            </section>
            <ul className={classes.list}>
                <li>
                    <h2 className={classes.course1}>Projects</h2>
                </li>
                <li>
                    <div className={classes.profile1}><Link className={classes.text1} to="/submit_project"> Ajukan Proyek </Link></div>
                </li>
            </ul>
            <section className={classes.section}>
                <Carousel className={classes.carousel}>
                    <div className={classes.image}>
                        <img  src="../../assets/1.png" />
                        <Link className="legend" to="/apply_project">Full Stack Development Course</Link>
                    </div>
                    <div className={classes.image}>
                        <img  src="../../assets/2.png" />
                        <a href="" className="legend">Figma Full Course</a>
                    </div>
                    <div className={classes.image}>
                        <img  src="../../assets/3.png" />
                        <a href="" className="legend">Python Full Course</a>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}
export default Dashboard