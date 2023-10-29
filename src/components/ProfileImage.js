import { useState } from "react";

export default function ProfileImage () {

    return(
        <div id='profile-image-container'>
            <p className="text">Alicia Parris:</p> 
            <div className="attributes-container">
            <div className="attributes-text" >
                <p>community</p><p>tiny-home</p><p>software</p>
            </div> 
            </div>
                <p>builder.</p>
            <div className="overlay-container" id="profile-image-div"></div>
        </div>
    )
}