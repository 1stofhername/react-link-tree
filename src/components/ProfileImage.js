import { render } from "@testing-library/react";
import { useState } from "react";

export default function ProfileImage () {
    const [ isVisible, setIsVisible ] = useState(false);

    function toggleIsVisible () {
        setTimeout(()=> {
            setIsVisible((isVisible)=> !isVisible);
        }, 500);
    }

    return(
        <div id='profile-image-container'>
            <div className="profile-text-container">
                <p className="text">Alicia Parris</p> 
                <div className="attributes-container">
                <div className="attributes-text" >
                    <p className="text">community</p><p className="text">tiny-home</p><p className="text">software</p>
                </div> 
                </div>
                <p>builder.</p>
            </div>
            <div onPointerEnter={toggleIsVisible} onPointerLeave={toggleIsVisible} className="profile-image-wrapper">
                <div className="overlay-container" id="profile-image-back-div" ><p className="black-subtitle">Connect</p></div>
                <div className="overlay-container" id="profile-image-div"></div>
            </div>
            
        </div>
    )
}