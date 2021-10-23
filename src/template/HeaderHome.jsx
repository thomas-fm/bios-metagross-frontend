import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style'

const HeaderHome = () => {

    const classes = style()

    return (
        <header>
            <nav className={classes.navbar}>
                <ul className={classes.list}>
                    <li className={classes.text}>
                        LearNPro
                    </li>    
                    <li>
                        <div className={classes.profile}><Link className={classes.text1} to="/"> Home </Link></div>
                    </li>    
                </ul> 
            </nav>
        </header>
    )
    
}
export default HeaderHome