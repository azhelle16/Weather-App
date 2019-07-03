import React, { Component } from 'react';
import './style.css';
import './App.css';
import logo from './images/loading.gif'

class Loading extends Component {

	render() {

	    return (

			<div className="loadingDiv">
			    <img className="loadingClass" src={logo} alt="Loading GIF"/>
			 	<p id="loadingPara">Fetching Weather Information...</p>    
			</div>
	    
	    )

  	}

}

export default Loading;