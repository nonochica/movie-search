import React, { Component } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import imagenhome from '../assets/Tickets.png'
import imagenhome1 from '../assets/Cartel cinema.png'


import './home.css'

export class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                    <section className="home">
                        <div className="home-block1">
                            
                            <h1 className="home-block1-h1">Not sure about what to watch?</h1>
                            <h3 className="home-block1-h3">Let the fate choose for you</h3>
                            <h4 className="home-block1-h4">Click and you will get a great random movie</h4>                   
                            <a className="boton-block1-home" href="/randomizer">Give me a random movie</a>
                        </div>

                        <div className="block1-image">
                        <img className="home-block1-image" src={imagenhome} alt={imagenhome} />
                        </div>

                        <div className="home-block2">                        
                            <h1 className="home-block2-h1">Find all the info of the movie you choose</h1>
                            <h3 className="home-block2-h3">Rate, year, country, director, actors...</h3>
                            <h4 className="home-block2-h4">Don't miss anything</h4>
                            <a className="boton-block2-home" href="/search">Search</a>
                        </div> 

                        <div className="block2-image">
                        <img className="home-block2-image" src={imagenhome1} alt={imagenhome1} />
                        </div>

                
                    </section>
                <Footer />
            </div>
        );
    }
}