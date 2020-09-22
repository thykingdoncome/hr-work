import React from 'react'

const Package = ({ img_src, title, price, package_fit, category }) => {
    return (
        <div className="package">
            <div className="package-top">
                <img src={img_src} alt=""/>
                <span>{category}</span>
            </div>
            <div className="package-bottom">
                <p>{title}</p>
                <h4>{price}</h4>
                <span>{package_fit} </span>

                <div>
                <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Package
