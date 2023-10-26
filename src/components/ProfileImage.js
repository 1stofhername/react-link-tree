import { useState } from "react";

export default function ProfileImage () {
    
    return(
        <div id='profile-image-container'>
            <p className="text">Alicia Parris:</p> <div className="attributes-text"><span>community</span><span>tiny-home</span><span>software</span></div> <p>builder.</p>
            <div className="overlay-container" id="profile-image-div"></div>
        </div>
    )
}