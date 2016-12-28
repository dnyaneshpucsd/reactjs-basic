import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age : props.initialAge,
			status : 1,
			homeLink : props.initialLinkName
			
		}
	
		setTimeout (() => {
			this.setState({
				status : 0
			});
		}, 1000);
	}


	onMakeOlder () {
		this.setState({
			age : this.state.age + 2
		})
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);	
	}

	onHandleChange(event) {
		this.setState({
			homeLink:event.target.value
		});
		//this.state.homeLink = event.target.value;

	}
	componentWillMount() {
		console.log("component will mount");
	}

	componentDidMount() {
		console.log("component did mount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("component will recive props " , nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("should component wll update ", nextProps, nextState);
		// if (nextState.status === 1) {
		// 	return false;
		// }
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
	 	console.log("component will update ", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("component did update ", prevProps, prevState);
	}

	componentWillUnmount(){
		console.log("component will unmount");
	}




	render() {

		return (
			<div> 
				<p> New Component </p>
				<p> Your name is  {this.props.name}  and you are {this.state.age} old </p>
				<p> status : {this.state.status} </p>
				<hr/>
				<button onClick= { () => this.onMakeOlder(this)} className="btn btn-primary"> Make me older </button>
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary"> GreetMe </button>
				<hr/>
				<input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
			  <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary"> Change home link </button>

			</div>
		);	
	}	
}


Home.propTypes = {
	name : React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet:React.PropTypes.func,
	changeLink : React.PropTypes.func,
	initialLinkName :  React.PropTypes.string,
}
