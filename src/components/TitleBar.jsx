import React from 'react';
import { useState } from 'react';
import './TitleBar.css';

function TitleBar(props) {
    //props = functions to toggle about

    return (
        <div className='titleBar'>
            <button className='logo' onClick={props.home}><h2>Pokemon Card Viewer</h2></button>

            <button className='about' onClick={props.about}>About</button>
        </div>
    );


}


export default TitleBar;
