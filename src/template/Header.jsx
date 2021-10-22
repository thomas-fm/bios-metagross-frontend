import React from 'react'
import style from '../style'

const Header = () => {

    const classes = style()

    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <ul className={classes.list}>
                    <li className={classes.text}>
                        LearNPro
                    </li>    
                    <li>
                        <div className={classes.profile}><a className={classes.text1}href=""> Profile </a></div>
                    </li>    
                </ul> 
            </nav>
        </header>
    )
    
}
export default Header