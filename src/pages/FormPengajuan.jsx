import React from 'react'
import HeaderHome from '../template/HeaderHome'

const FormPengajuan = () => {

    return (
        <div>
            <HeaderHome/>
            <form id="survey-form">
                <label id="jenis-proyek-label" for="jenis-proyek">Jenis Proyek : </label>
                <input type="text" placeholder="Enter your answer" name="jenis-proyek" id="jenis-proyek" required/>
                <label id="jangka-waktu-label" for="jangka-waktu">Jangka Waktu : </label>
                <input type="number" placeholder="Enter your answer" name="jangka-waktu" id="jangka-waktu" required/>
                <label id="tools-label" for="tools">Tools dan Teknologi : </label>
                <input type="text" placeholder="Enter your answer" name="tools" id="tools" required/>
                <label id="prototipe-label" for="prototipe">Ketersediaan Prototipe :  </label>
                <input type="text" placeholder="Enter your answer" name="prototipe" id="prototipe" required/>
                <label id="requirement-label" for="requirement">Jumlah Requirement : </label>
                <input type="text" placeholder="Enter your answer" name="requirement" id="requirement" required/>
                <button type="submit" id="submit" class="submit-button" name="survey">Ajukan</button>
            </form>
        </div>
    )

}
export default FormPengajuan