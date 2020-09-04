import React, { Component } from 'react'

import { Title } from '../components/Title';
import { FormularioPeliculas } from '../components/FormularioPeliculas'
import { MoviesList } from '../components/MoviesList';
import Navbar from '../components/Navbar/Navbar'
import './Search.css'


export class Search extends Component {
    state = { usedSearch: false, results: [] }


    handleResults = (results) => {
      this.setState({ results, usedSearch: true })
    }
    
    renderResults () {
      return this.state.results.length === 0
        ? <p className="search-text2">Oh, no! We didn't find anything <span role="img" aria-label="akward face">😅</span></p>
        : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div className="page-search">
                    <Navbar />
                <div className="page-search-content">
                    <Title>Movie Search</Title>
                    <div className="Form-Wrapper">
                    <FormularioPeliculas onResults={this.handleResults} />
            
                    </div>
                    
                    {this.state.usedSearch
                        ? this.renderResults()
                        : <div className="search-text"><p>You haven't search anything yet</p></div>
                    }
                </div>
            </div>
        );
    }
}