import React from 'react'
import './Navbutton.css'
import { Link } from 'react-router-dom'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Navbutton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <div className="navbutton">
            <Link to="/login">
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
                type={type}>
                    {children}           
                </button>
            </Link>
        </div>
    )
}