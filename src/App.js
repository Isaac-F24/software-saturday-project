import React from 'react';
import { useState } from 'react';

import './App.css';
import TitleBar from './components/TitleBar';
import CardViewer from './components/CardViewer';
import About from './components/About';

function App() {

	const [about, setAbout] = useState(false);

  	return (
    	<div className="App">
			<TitleBar about={aboutFunction} home={home}></TitleBar>


			{about ? <About></About> : <CardViewer></CardViewer>}


    	</div>
  	);

	//used to toggle 'about' popup 
	function aboutFunction() {
		setAbout(true);
		console.log("test");
	}

	function home() {
		setAbout(false);
		console.log("test");
	}
}
export default App;
