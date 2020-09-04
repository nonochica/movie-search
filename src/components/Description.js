
import React from "react";
import "./Description.css"

const Description = props => (
	<div className="poster-wrapper">
		{props.title &&
			<div>
				<p className="poster-descr">{props.title}{`(${parseInt(props.release)})`}</p>
                <img className="poster-img" src={`https://image.tmdb.org/t/p/w342/${props.poster}`} alt=""/>
			</div>
            
		}
	</div>
);


export default Description;