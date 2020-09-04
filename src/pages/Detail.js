import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import './detail.css'

import { ButtonBackHome } from '../components/Buttons/ButtonBackHome'

const API_KEY = '54314ee5'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({ movie })
            this.setState({ movie })
        })
    }

    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this.fetchMovie({ id: movieId })
    }

    render () {
        const { Title, Actors, Country, Released, Type, imdbRating ,Poster, Plot } = this.state.movie

        return (
            <div>
                <Navbar />
                <div className="Detail">
                    <div className="Detail__card">
                        <div className="Detail__column Detail__column_img">
                            <img src={Poster} alt={Title} className="Detail__poster Detail__poster_blured"/>
                            <img src={Poster} alt={Title} className="Detail__poster"/>
                        </div>
                        <div className="Detail__column Detail__description">
                            <h2 className="Detail__title">{Title}</h2>
                            <div>
                            <br/><strong>Released year:</strong> {Released}<br/>
                            <br/><strong>Country:</strong> {Country}<br/>
                            <br/><strong>Type:</strong> {Type}<br/>
                            </div>

                            <p>
                            <strong>IMDB Rating:</strong> 
                                <span>
                                    <i className="fas fa-star Detail__star">
                                    </i> {imdbRating}
                                </span>
                            </p>
                            <p>
                            <strong>Actors:</strong>
                            <br/>
                            {Actors}
                            </p>
                            <p>
                            <strong>Plot:</strong>
                            <br/>
                            {Plot}
                            </p>
                                <ButtonBackHome/>
                          
                        </div>
                    </div>
                    
                </div>
                <Footer />
            </div>
        );
    }
}