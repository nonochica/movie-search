import React, { Component } from 'react';
import GetBtn from "./Buttons/GetButton"
import Description from "./Description"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

const API_KEY = "98b6d37d08a64bff3cc9004155510206";


export class Randomizer extends Component {
    
    state = {
        id: undefined,
        title: undefined,
        release: undefined,
        poster: undefined,
        error: undefined,
        movieStorage: new Map(),
    }
    getRandomNumber = (num, from) => {
      return +Math.floor(Math.random() * num + from);
    }

    getMovie = async (e) => {
      if (e) e.preventDefault();
  
      const filmsAmount = 100;
      let filmNumber = this.getRandomNumber(filmsAmount, 0);
      let filmPage = Math.floor(filmNumber / 20) + 1;
      let filmNumberOnPage = filmNumber % 20;

    const api_url = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${filmPage}`);
    const data = await api_url.json();
    
    if (localStorage.getItem(data.results[filmNumberOnPage].id)) {
			this.state.movieStorage.set(data.results[filmNumberOnPage].id, "skipped");
			this.getMovie();
			return;
		}

		if (this.state.movieStorage.has(data.results[filmNumberOnPage].id)) {
			if (this.state.movieStorage.size === filmsAmount) {
			
				return;
			}
			this.getMovie();
			return;
    }
    this.setState({
			id: data.results[filmNumberOnPage].id,
			title: data.results[filmNumberOnPage].title,
			release: data.results[filmNumberOnPage].release_date,
			poster: data.results[filmNumberOnPage].poster_path,
			error: ""
		});
    this.state.movieStorage.set(this.state.id, "skipped");
  }

  render() {
		return (
			<div className="randomizer-app">
	
				<Navbar />
				<GetBtn getMovie={this.getMovie} />
				
				<Description
					id={this.state.id}
					title={this.state.title}
					release={this.state.release}
					poster={this.state.poster}
				/>
				<Footer />
			</div>
		);
	}
}

export default Randomizer;