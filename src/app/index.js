import React from "react";
import { render } from "react-dom";

import { Root } from "./components/Root";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state ={
			homeLink : "Home",
			homeMounted : true		
		}

		console.log("constructor");		
	}

	onGreet() {
		alert("Hello ...!");
	}

	onChangeLinkName (newName) {
		this.setState({
			homeLink : newName 
		});
	}

	onChangeHomeMounted() {
		this.setState(
			{
				homeMounted : !this.state.homeMounted
			}
		);	
	}

	render () {
		var user = {
			name : "anvi",
			hobbies : ["watching tomas", "playing cars"]
		};

		let homeCmp = "";
		if (this.state.homeMounted) {
			homeCmp =(
						<Home 
							name={"Shiv"}
						 	initialAge={4} 
						 	greet={this.onGreet}
						 	changeLink = {this.onChangeLinkName.bind(this)}
						 	initialLinkName = {this.state.homeLink}
						 />
					);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header  homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{homeCmp}
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button onClick ={this.onChangeHomeMounted.bind(this)} className = "btn btn-primary"> (Un) mounted home component </button>
					</div>
				</div>

			</div>

		);

	}	
}

render(<App/>, window.document.getElementById("app"));