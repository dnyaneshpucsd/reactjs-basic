export function setUsername(username) {
	// return dispatch => {
	// 	setTimeout(() => {
	// 		dispatch({ 
	// 			type: "SET_NAME",
	// 			payload: username
	// 		});
	// 	}, 2000);	
	// };

	return {
		type: "SET_NAME",
		payload: new Promise((resolve, reject) =>{
			setTimeout(()=>{
				resolve(username);
			}, 2000);
		})
	}
}

export function setAge(age) {
	return {
		type : "SET_AGE",
		payload : age
	};
}