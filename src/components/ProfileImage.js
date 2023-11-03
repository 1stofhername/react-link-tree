import { useState } from "react";

export default function ProfileImage () {

    return(
        <div id='profile-image-container'>
            <div className="profile-text-container">
                <p className="text">Alicia Parris</p> 
                <div className="attributes-container">
                <div className="attributes-text" >
                    <p className="subtitle">community</p><p className="subtitle">tiny-home</p><p className="subtitle">software</p>
                </div> 
                </div>
                <p>builder.</p>
            </div>
            <div className="overlay-container" id="profile-image-div"></div>
        </div>
    )
}