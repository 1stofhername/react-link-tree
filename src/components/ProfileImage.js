import { useState } from "react";

export default function ProfileImage () {
    const [ isVisible, setIsVisible ] = useState(false);

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
            <div className="profile-image-wrapper">
            <div className="overlay-container" id="profile-image-div"></div>
            
            { isVisible ?
                <div className="overlay-container" id="profile-image-back-div" ></div>:null
                }
                
            </div>
            
        </div>
    )
}