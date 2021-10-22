import React from 'react'
import HeaderHome from '../template/HeaderHome'
import style from '../style'
import { SettingsOverscanOutlined } from '@material-ui/icons'

const FormPengajuan = () => {

    const classes = style()

    const [value, setValue] = React.useState("")

    const [input, setInput] = React.useState({
        jenis_proyek: '',
        jangka_waktu: '',
        tools: '',
        prototipe: '',
        requirement: ''
    })
    console.log(input)

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

    const handleSubmit = (event) => {
        //insert value form
        // const newProject = {
        //     jenis_proyek = input.jenis_proyek,
        //     jangka_waktu = input.jangka_waktu.toString(),
        //     tools = input.tools,
        //     prototipe = input.prototipe,
        //     requirement = input.requirement
        //}
        //insert ke database
    }

    return (
        <div>
            <HeaderHome/>
            <h2 className={classes.text2}> Form Pengajuan Proyek </h2>
            <form id="survey-form" action="">
                <label id="jenis_proyek-label" for="jenis-proyek">Jenis Proyek : </label>
                <input type="text" value={input.jenis_proyek} onChange={handleInputChange} placeholder="Enter your answer" name="jenis_proyek" id="jenis_proyek" required/>
                <label id="jangka_waktu-label" for="jangka-waktu">Jangka Waktu : </label>
                <input type="number" min="1" max="12" value={input.jangka_waktu} onChange={handleInputChange} placeholder="Enter your answer" name="jangka_waktu" id="jangka_waktu" required/>
                <label id="tools-label" for="tools">Tools dan Teknologi : </label>
                <input type="text" value={input.tools} onChange={handleInputChange} placeholder="Enter your answer" name="tools" id="tools" required/>
                <label id="prototipe-label" for="prototipe">Ketersediaan Prototipe :  </label>
                <input type="text" value={input.prototipe} onChange={handleInputChange} placeholder="Enter your answer" name="prototipe" id="prototipe" required/>
                <label id="requirement-label" for="requirement">Jumlah Requirement : </label>
                <input type="number" value={input.requirement} onChange={handleInputChange} placeholder="Enter your answer" name="requirement" id="requirement" required/>
                <button type="submit" id="submit" onClick={handleSubmit} class="submit-button" name="survey">Ajukan</button>
            </form>
        </div>
    )

}
export default FormPengajuan