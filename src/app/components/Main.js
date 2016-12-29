import React from "react";

export const Main = (props) => { 
	return (
		<div>
			<div className="row">
				<div className="col-xs-12">
					<h1> The main page </h1>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<button 
						className="btn btn-primary" 
						onClick={()=> props.changeUsername('Shiv')}> Change username</button>
				</div>
			</div>

		</div>

	);
}