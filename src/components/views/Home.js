import React from 'react'
import girlSitting from  '../../assets/girl_sitting.png'
import packageImg from '../../assets/package_img.png'
import newsImg from '../../assets/news.png'
import Button from '../commons/Button'
import Package from '../commons/Package'
import Factor from '../commons/Factor'
import News from '../commons/News'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'



const Home = () => {
    const packages = [
        {
            id: 1,
            img_src: packageImg, 
            title: 'HR Remote Manager', 
            price: 'N3,480', 
            package_fit: 'Basic, Bronze, Foundation', 
            category: 'Retainership Category'
        },
        {
            id: 2,
            img_src: packageImg, 
            title: 'HR Remote Manager', 
            price: 'N3,480', 
            package_fit: 'Basic, Bronze, Foundation', 
            category: 'Retainership Category'
        },
        {
            id: 3,
            img_src: packageImg, 
            title: 'HR Remote Manager', 
            price: 'N3,480', 
            package_fit: 'Basic, Bronze, Foundation', 
            category: 'Retainership Category'
        }
    ]

    const news = [
        {
            id: 1,
            headline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            date: '30th Oct, 2019',
            img_src: newsImg
        },
        {
            id: 2,
            headline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            date: '30th Oct, 2019',
            img_src: newsImg
        },
        {
            id: 3,
            headline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            date: '30th Oct, 2019',
            img_src: newsImg
        },
        {
            id: 4,
            headline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            date: '30th Oct, 2019',
            img_src: newsImg
        }
    ]

    return (
        <main className="home-component">
            <section className="section-bg-1">
                <Nav />
                <section className="section-wrap section-1">
                    <div className="heading">
                        <p>
                            We know that  you are busy with deadlines and customer demands and this consumes all your available time and as your business expands.
                        </p>
                        <h1>We are HR Experts we can help</h1>
                    </div>
                </section>
            </section>

            <section className="section-wrap section-2">
                <h2 className="section-header">Who we are</h2>
                <hr/>

                <div className="section-content section2-content">
                    <div>
                        <div className="who-we-are">
                            <div>
                                <p className="mb-1">
                                    HR Work is an advisory firm with strong competence  and experience in providing Human Resources Retainership Services  to small or  medium sized organisations.
                                </p>

                                <p className="mb-1">
                                    We know that  you are busy with deadlines and customer demands and this consumes all your available time and as your business expands, your employee challenges begin to multiply and then problems with hiring, setting and measuring performance, policies for direction among others become more evitable.
                                </p>
                            </div>
                            <div className="wwa-img-small">
                                <img src={girlSitting} alt=""/>
                           </div>
                        </div>

                        <div className="company-statement">
                            <div className="mini-box">
                                <h5>Our Mission:</h5>
                                <p>
                                    To make HR Systems work for Small to Medium sized companies.
                                </p>
                            </div>
                            <div className="mini-box">
                                <h5>Our Vission:</h5>
                                <p>
                                    To be the HR retainership firm of choice to thriving businesses
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wwa-img">
                        <img src={girlSitting} alt=""/>
                    </div>
                </div>
                <div className="mt-3">
                    <Button value="Discover more" classes="btn-primary" />
                </div>
            </section>

            <section className="section-wrap section-3">
                <h2 className="section-header">Our Packages</h2>
                <hr/>
                <div className="mt-4 package-wrap">
                    { packages.map(packageItem => (
                        <Package img_src={packageItem.img_src} 
                        title={packageItem.title}
                        price={packageItem.price}
                        package_fit={packageItem.package_fit}
                        category={packageItem.category}
                        key={packageItem.id}
                        />
                    )) }
                </div>
                <div className="mt-5">
                    <Button value="View more packages" classes="btn-primary ma-0" />
                </div>
            </section>
            
            <section className="section-bg-4">
                <section className="section-wrap section-4">
                        <p>We bring a wealth of local market knowledge…</p>
                        <h2 className="mt-1 section-header sh-odd">Why HR Work</h2>
                        <div className="factor-wrap-1 factor-wrap mt-4">
                            <Factor header="Our approach" 
                            intro="Our attention is you!"
                            text="Our consultancy model is intentionally small to put all the attention on you. We have a policy of working with very few clients within a certain period so you don’t have to be worry about  feeling like a number in a crowded room."
                            classes="factor"
                            />
                            <Factor header="Our approach" 
                            intro="Our attention is you!"
                            text="Our consultancy model is intentionally small to put all the attention on you. We have a policy of working with very few clients within a certain period so you don’t have to be worry about  feeling like a number in a crowded room."
                            classes="factor odd-factor"
                            />
                            <Factor header="Our approach" 
                            intro="Our attention is you!"
                            text="Our consultancy model is intentionally small to put all the attention on you. We have a policy of working with very few clients within a certain period so you don’t have to be worry about  feeling like a number in a crowded room."
                            classes="factor"
                            />
                        </div>

                        <div className="factor-wrap-2 factor-wrap mt-2">
                            <Factor header="Our approach" 
                            intro="Our attention is you!"
                            text="Our consultancy model is intentionally small to put all the attention on you. We have a policy of working with very few clients within a certain period so you don’t have to be worry about  feeling like a number in a crowded room."
                            classes="factor"
                            />
                            <Factor header="Our approach" 
                            intro="Our attention is you!"
                            text="Our consultancy model is intentionally small to put all the attention on you. We have a policy of working with very few clients within a certain period so you don’t have to be worry about  feeling like a number in a crowded room."
                            classes="factor odd-factor"
                            />
                        </div>
                </section>
            </section>

            <section className="section-wrap section-5 mt-4">
                <h2 className="section-header">Latest News</h2>
                <hr style={{width: '40%'}}/>

                <div className="mt-2 news-wrap">
                    { news.map(newsItem => (
                        <News img_src={newsItem.img_src} 
                        date={newsItem.date}
                        headline={newsItem.headline}
                        key={newsItem.id}
                        />
                    )) }
                </div>
            </section>
            <Footer />

        </main>
    )
}

export default Home
