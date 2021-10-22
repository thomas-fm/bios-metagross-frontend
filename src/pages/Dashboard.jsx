import React from 'react'
import Header from '../template/Header'
import style from '../style'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

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
                        <a href="" className="legend">Python Full Course</a>
                    </div>
                </Carousel>
            </section>
            <ul className={classes.list}>
                <li>
                    <h2 className={classes.course1}>Projects</h2>
                </li>
                <li>
                    <div className={classes.profile1}><a className={classes.text1} href=""> Ajukan Proyek </a></div>
                </li>
            </ul>
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
                        <a href="" className="legend">Python Full Course</a>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}
export default Dashboard