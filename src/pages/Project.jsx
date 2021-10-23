import React from 'react'
import style from '../style'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../http-common'
import axios from 'axios'

const Project = () => {
    const [fetch, setFetch] = React.useState(true)
    const [state, setState] = React.useState({
        biaya : "",
        exp : "",
        level : ""
    })

    useEffect(()=>{
        let project_id = () => {
            let {id} = useParams()
        
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
            <div>
                <ul>
                    <li>
                        Estimasi Budget Proyek :
                    </li>
                    <li>
                        Minimum Level :
                    </li>
                    <li>
                        Exp :
                    </li>    
                </ul>                
            </div>
        </div>
    )
}
export default Project

