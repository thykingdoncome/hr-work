import React from 'react'

const Factor = ({ header, intro, text, classes }) => {
    return (
        <div className={classes}>
            <h2>{header}</h2>
            <div className="mt-3">
                <h3>{intro}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Factor
