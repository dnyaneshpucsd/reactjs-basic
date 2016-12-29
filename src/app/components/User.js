import React from "react";
import {browserHistory} from "react-router";

export const User = (props) => {
	return (
		<div>
			<div className="row">
				<div className="col-xs-12">
					<h1> The user page </h1>
				</div>
			</div>
			
			<div className="row">
				<div className="col-xs-12">
					<p> Username : {props.username}</p>
				</div>
			</div>
		</div>
	);
}