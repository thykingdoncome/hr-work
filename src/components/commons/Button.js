import React from 'react'
import { IoIosPlay } from 'react-icons/io'

const Button = ({ value, classes }) => {
    return (
        <button className={classes}>
            <span>{value}</span>
            <IoIosPlay />
        </button>
    )
}

export default Button
