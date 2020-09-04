import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonBackHome.css'


export const ButtonBackHome = () => (
    <Link
        to='/search'className="button-back-home">
        <i>Back to Search</i>
    </Link>
)


