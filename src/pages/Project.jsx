import React from 'react'
import style from '../style'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../http-common'
import axios from 'axios'
import HeaderHome from '../template/HeaderHome'


const Project = () => {

    const classes = style()

    const [fetch, setFetch] = React.useState(true)
    const [state, setState] = React.useState({
        biaya : "",
        exp : "",
        level : ""
    })

    const { id } = useParams();

    useEffect(()=>{
        let project_id = () => {
        
            http.get(`/projects/${id}`).then(res => {
                let data = res.data
                setState({
                    biaya: data.payment, 
                    level: data.minlevel, 
                    exp: data.exp
                }
            )
        })}
        if (fetch) {
            project_id()
            setFetch(false)
        }
    },[fetch])


    return (
        
        <div>
            <HeaderHome/>
            <h3 className={classes.text3}> Your Project's Spesification : </h3>
            <div className={classes.page_wrapper}>
                <ul className={classes.project_info}>
                    <li>
                        Estimasi Budget Proyek : {state.biaya}
                    </li>
                    <li>
                        Minimum Level : {state.level}
                    </li>
                    <li>
                        Exp : {state.exp}
                    </li>    
                </ul>                
            </div>
        </div>
    )
}
export default Project

