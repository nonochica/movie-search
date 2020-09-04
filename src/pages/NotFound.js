import React from 'react'
import { ButtonBackHome } from '../components/Buttons/ButtonBackHome'

import './NotFound.css'

export const NotFound = () => (
    <div className="pagenotfound">
            <h1 className="h1_page_not_found">¡Error 404!</h1>
            <h2 className="h2_page_not_found">No existe la página</h2>
            <br></br>
            <br></br>
            <img className="shiba_page_not_found" src="https://i.imgflip.com/3nzkub.png" alt="Error 404"/>
            <br></br>
            <br></br>
            <ButtonBackHome />
    </div>
)