import React from 'react'
import style from '../style'
import { Link } from 'react-router-dom'

const Header = () => {

    const classes = style()

    return (
        <header>
            <nav className={classes.navbar}>
                <ul className={classes.list}>
                    <li className={classes.text}>
                        LearNPro
                    </li>    
                    <li>
                        <div className={classes.profile}><Link className={classes.text1} to="/profile"> Profile </Link></div>
                    </li>    
                </ul> 
            </nav>
        </header>
    )
    
}
export default Header