import React from "react";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <h1>about</h1>
            <span>
                “Freedom is the freedom to say that two plus two make four. If that is
                granted, all else follows.”
            </span>
            <span>− George Orwell, 1984</span>
        </div>
    );
}
export default About;