import React, { useState } from "react";

const Header = ({ darkMode, onDarkModeClick }) => {
    const [isdarkMode, setIsDarkMode] = useState(darkMode);
   
    const handleDarkModeClick = () => {
        setIsDarkMode(!isdarkMode)
        onDarkModeClick()
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick} >
                {isdarkMode? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    )
    }

    export default Header;