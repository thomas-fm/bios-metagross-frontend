import React from 'react'
import HeaderHome from '../template/HeaderHome'
import style from '../style'
import { SettingsOverscanOutlined } from '@material-ui/icons'
import http from '../http-common'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const FormPengajuan = () => {

    const classes = style()

    const [value, setValue] = React.useState("")

    const [input, setInput] = React.useState({
        name: '',
        description: '',
        jenis: '',
        waktu: 0,
        tools: '',
        prototipe: '',
        requirement: 0
    })
    //console.log(input)

    const handleInputChange = (event) => {
        event.preventDefault()
        let content = event.target.name
        let val = event.target.value.toString()

        setInput({
            ...input,
            [content]: val,
        })
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    let history = useHistory()

    const handleSubmit = (event) => {
        //insert value form
        const newProject = {
            name: input.name,
            description: input.description,
            jenis: input.jenis,
            waktu: parseInt(input.waktu),
            tools: input.tools,
            prototipe: input.prototipe,
            requirement: parseInt(input.requirement)
        }
        console.log(newProject)
        //insert ke database
        // axios.post(`http://127.0.0.1:8000/projects`,{newProject})
        //     .then(res => console.log(res))
        http.post(`/projects`, newProject).then(
            res => {
                let id = res.data.id
                history.push(`/projects/${id}`)
            }
        )
    }

    return (
        <div>
            <HeaderHome/>
            <h2 className={classes.text2}> Form Pengajuan Proyek </h2>
            <div id="survey-form">
                <label id="jangka_waktu-label" for="name">Nama Proyek : </label>
                <input type="text" value={input.name} onChange={handleInputChange} placeholder="Enter your answer" name="name" id="jenis_proyek" required/>
                <label id="jangka_waktu-label" for="description">Deskripsi Proyek : </label>
                <input type="text" value={input.description} onChange={handleInputChange} placeholder="Enter your answer" name="description" id="jenis_proyek" required/>
                <label id="jenis_proyek-label" for="jenis">Jenis Proyek : </label>
                <input type="text" value={input.jenis} onChange={handleInputChange} placeholder="Enter your answer" name="jenis" id="jenis_proyek" required/>
                <label id="jangka_waktu-label" for="waktu">Jangka Waktu : </label>
                <input type="number" min="1" max="12" value={input.waktu} onChange={handleInputChange} placeholder="Enter your answer" name="waktu" id="jangka_waktu" required/>
                <label id="tools-label" for="tools">Tools dan Teknologi : </label>
                <input type="text" value={input.tools} onChange={handleInputChange} placeholder="Enter your answer" name="tools" id="tools" required/>
                <label id="prototipe-label" for="prototipe">Ketersediaan Prototipe :  </label>
                <input type="text" value={input.prototipe} onChange={handleInputChange} placeholder="Enter your answer" name="prototipe" id="prototipe" required/>
                <label id="requirement-label" for="requirement">Jumlah Requirement : </label>
                <input type="number" value={input.requirement} onChange={handleInputChange} placeholder="Enter your answer" name="requirement" id="requirement" required/>
                <button type="submit" id="submit" onClick={handleSubmit} class="submit-button" name="survey">Ajukan</button>
            </div>
        </div>
    )

}
export default FormPengajuan