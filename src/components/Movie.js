import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import './Movie.css'

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render () {
        const { id, poster, title, year } = this.props
    
    return (
        <Link to={`/detail/${id}`}>
            <div className="card-image">
                <figure className="movie-image">
                    <img
                        alt={title}
                        src={poster}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="movie-title">{title}</p>
                        <p className="movie-year">{year}</p>
                    </div>
                </div>
            </div>
        </Link>
        
        )
    }
}