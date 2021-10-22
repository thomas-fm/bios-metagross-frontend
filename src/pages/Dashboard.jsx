import React from 'react'
import Header from '../template/Header'
import style from '../style'
import TouchCarousel from 'react-touch-carousel'

const Dashboard = () => {

    const classes = style()

    return (
        <div>
            <Header/>
            <div></div>
            <section>
                <h3>Courses</h3>
                
            </section>
            <section>
                <h3>Projects</h3>
            </section>
        </div>
    )
}
export default Dashboard