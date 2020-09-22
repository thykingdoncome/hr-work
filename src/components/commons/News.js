import React from 'react'

const News = ({ headline, img_src, date }) => {
    return (
        <div className="news" style={{ display: "flex", justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div className="news-preview">
                <h4 style={{lineHeight: '1.7', color: '#EF0633'}}>{headline}</h4>
                <small style={{ color: '#888888' }} className="mt-2">{date}</small>
            </div>
            <div className="news-img" style={{ width: '40%' }}>
                <img style={{ height: '100%' }} src={img_src} alt="news"/>
            </div>
        </div>
    )
}

export default News
