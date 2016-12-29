import React from "react";
import {connect} from "react-redux";

import { Main } from "../components/Main";
import { User } from "../components/User";
import { setUsername } from "../actions/userActions";

class App extends React.Component {
	
	render () {
		return (
			<div className="container">
				<Main changeUsername={() => this.props.setUsername("Dnyanesh")} />
				<User username={this.props.user.username} />
			</div>
		);
	}	
}

const mapStateToProps = (state) => {
	return {
		user : state.user,
		math : state.math
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUsername : (username) => {
			dispatch(setUsername(username));	
		}
	};	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

