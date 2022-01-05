import { NavLink } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// CSS
import './HomePage.css';

// Img
import logo from '../../../../assets/img/ebike__logo-white.svg';
import heroImg from '../../../../assets/img/ebike__hero-ill.png';
import ill__simulation from '../../../../assets/img/ebike__simulation-illustration.png';
import ill__backend from '../../../../assets/img/ebike__backend-illustration.png';
import ill__frontend from '../../../../assets/img/ebike__frontend-illustration.png';
import mock__profile from '../../../../assets/img/mock__profile-pic.png';

function HomePage() {
    return (
        <>
            <div className="home-hero__outer-wrapper">
                <DocumentTitle title='Hem' ></DocumentTitle>
                <div className="home__container">
                    <div className="home-hero__nav-wrapper">
                        <div className="hero__brand">
                            <img src={logo} className="hero__logo" alt="Ebike logo"/>Ebike
                        </div>
                        <div className="home-hero__nav-center-wrapper">
                            <NavLink to="/" className="home-nav__link">Hem</NavLink>
                            <NavLink to="/" className="home-nav__link">Om</NavLink>
                            <NavLink to="/" className="home-nav__link">Rapport</NavLink>
                        </div>
                        <div className="home-hero__nav-right-wrapper">
                            <NavLink to="/login" className="home-nav__link">Logga in</NavLink>
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
                            <img src={ill__backend} className="home-grid__img" alt="Hero illustration"/>
                            <h3 className="h3__grid">Backend</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum 
                            ex nec turpis iaculis porta. Duis nec eros tincidunt, egestas </p>
                        </div>
                        <div className="home-content__grid-item">
                            <img src={ill__frontend} className="home-grid__img" alt="Hero illustration"/>
                            <h3 className="h3__grid">Front-end</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum 
                            ex nec turpis iaculis porta. Duis nec eros tincidunt, egestas </p>
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
        </>
    )
}

export default HomePage
