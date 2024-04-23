import React from "react";
import './About.css';

function About() {

    return (

        <div className="aboutPage">

            <h2>Pokemon card viewer:</h2>

            <p>
                Created using the React library and <a href="https://pokeapi.co/">PokeAPI,</a> an API that provides
                data on the Pokemon series of video games.
                <br></br>
                <br></br>
                This web app was created as the final project for Spring 2023 <a href="https://purdueieee.org/software/">Software Saturdays,</a> a 
                course offered by the Purdue chapter of IEEE. Completion of the course and the final project awards a College of Engineering certification.
            </p>

        </div>

    );

}

export default About;