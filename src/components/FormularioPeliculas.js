import React, { Component } from 'react'
import './FormularioPeliculas.css'

const API_KEY = '54314ee5'

export class FormularioPeliculas extends Component {
    state = {
        inputMovie: ''
    };
    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const { Search = [], totalResults = "0"} = results
            console.log({ Search, totalResults })
            this.props.onResults(Search)
        });
    };
    render () {
        return (
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <div className="SearchForm__inputContainer">
              
                <input
                  className="SearchForm__input"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Try with 'Star Wars'" 
              />
            </div>
            <button className="boton-buscadorpeliculas">Search!</button>
          </form>
        );
      }
    }