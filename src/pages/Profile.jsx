import React from 'react'



const Profile = () => {
    
    return (
        <React.Fragment>
            <div className="profile"> 
                <img src="" />
                <h4>Halo-Halo</h4>
                <div className="person-data">
                    <h4 id="person-name">Ian Sommerville</h4>
                    {/*Nanti kalau backend sudah set: ngambil data level*/}
                    {/*Nanti kalau backend sudah set: balance*/}
                </div>
            </div>

            <h3>Course yang telah diambil</h3>
            <div className="list-enrolled-course">
                <ul>
                    <li>Backend</li>
                    <li>Frontend</li>
                    <li>Fullstack</li>
                </ul>
            </div>

            <h3>Project yang telah diambil</h3>
            <div className="list-taken-project" >
                <ul>
                    <li>Website UMKM</li>
                    <li>Website Kampus</li>
                    <li>Mockup sinar damai App</li>
                    {/*Nanti kalau backend sudah set: ngambil data project yang telah diambil*/}
                </ul>
            </div>

            <h3>Project yang diajukan</h3>
            <div className="list-added-project">
                <ul>
                    <li>Website untuk Pelabuhan</li>
                    <li>Website Kampus</li>
                    <li>Mockup sinar damai App</li>
                    {/*Nanti kalau backend sudah set: ngambil data project yang diajukan*/}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Profile