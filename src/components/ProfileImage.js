import { useState } from "react";

export default function ProfileImage () {
    const [activeAttribute, setActiveAttribute] = useState("community");
    const attributes = ["community", "software", "tiny-house"];
    return(
        <div className="overlay-container" id="profile-image-div"></div>
    )
}