import React from 'react'
import './homepage.css'
import heroImg from '../../assets/img/ebike__hero-ill.png'
import ill__simulation from '../../assets/img/ebike__simulation-illustration.png'
import ill__frontend from '../../assets/img/ebike__frontend-illustration.png'


function HomepageApp() {
    return (
        <div>
            <div className="home-hero__outer-wrapper">
                <div className="home__container">
                    <div className="home-hero__nav-wrapper">
                        <div className="hero__brand">
                            Ebike
                        </div>
                        <div className="home-hero__nav-center-wrapper">
                            <a href="#">Home</a>
                            <a href="#">Om</a>
                            <a href="#">Rapport</a>
                        </div>
                        <div className="home-hero__nav-right-wrapper">
                            <a href="#">Logga in</a>
                        </div>
                    </div>
                    <div className="home-hero__content-outer-wrapper">
                        <div className="home-hero__content-inner-wrapper">
                            <h1>Skriv en rubrik här och lite mer text</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                            <button className="home-hero__button">Registrera dig</button>
                        </div>
                    </div>
                    <img src={heroImg} className="home-hero__img" alt="Hero illustration"/>
                </div>
            </div>
            <div className="home-content__outer-wrapper">
                <div className="home__container">
                    <div className="home-content__content-outer-wrapper">
                        <div className="home-content__content-inner-wrapper">
                            <h2>Skriv en rubrik här och lite mer text</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris fermentum ex nec turpis iaculis porta. </p>
                        </div>
                    </div>
                    <div className="home-content__grid-wrapper">
                        <div className="home-content__grid-item">
                            <img src={ill__simulation} className="home-grid__img" alt="Hero illustration"/>
                            <h3 className="h3__grid">Simulering</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum 
                            ex nec turpis iaculis porta. Duis nec eros tincidunt, egestas </p>
                        </div>
                        <div className="home-content__grid-item">
                        </div>
                        <div className="home-content__grid-item">
                            <img src={ill__frontend} className="home-grid__img" alt="Hero illustration"/>
                            <h3 className="h3__grid">Simulering</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum 
                            ex nec turpis iaculis porta. Duis nec eros tincidunt, egestas </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content__testimonial-wrapper">
                <div className="home__container">
                    <div className="home-content__testimonial-outer-wrapper">
                        <div className="home-content__testimonial-inner-wrapper">
                            <h4>Våra kunder</h4>
                            <p className="p__testimonial">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum
                            </p>
                            <div className="author__wrapper">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-footer__wrapper">
                <div className="home__container">
                    <div className="home-footer__inner-wrapper">
                        <div className="home-footer__left-wrapper">
                            Ebike
                        </div>
                        <div className="home-footer__right-wrapper">
                            Registrera dig
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageApp
