import { useState } from "react";

export default function ProfileImage () {
    const [activeAttributeIndex, setActiveAttributeIndex] = useState(0);
    const attributes = ["Community", "Software", "Tiny-house"];

    return(
        <div>
            <p>Alicia Parris: <span>{attributes[activeAttributeIndex]}</span> <span>builder.</span></p>
        <div className="overlay-container" id="profile-image-div"></div>
        </div>
    )
}