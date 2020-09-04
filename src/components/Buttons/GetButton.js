
import React from "react";
import "./GetButton.css"

class GetBtn extends React.Component {
	render() {
		return (
			<form className="getMovie" onSubmit={this.props.getMovie}>
				<button className="getMovie__btn">Random movie button</button>
			</form>
		);
	}
}





export default GetBtn;