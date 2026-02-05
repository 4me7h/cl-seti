import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

import { useTranslation, Trans } from 'react-i18next';

import imgBackground01 from '../images/img-01.jpg';
import imgBackground02 from '../images/img-02.jpg';
import imgBackground03 from '../images/img-03.jpg';
import imgBackground04 from '../images/img-04.jpg';

const Hero = () => {
    const {t} = useTranslation();
    // const {t, i18n} = useTranslation();
    // const changeLanguage = (language) => {
    //     i18n.changeLanguage(language);
    // }

    <Trans 
      i18nKey="hero-01"
      components={{
        span: <span className="text--tertiary font-bold text-xl" />
      }}
    />

    const [currentSlide, setCurrentSlide] = useState(0);
    const backgrounds = [
        imgBackground01, 
        imgBackground02, 
        imgBackground03, 
        imgBackground04
    ];
    // Cambia la imagen de fondo cada 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
    , [backgrounds.length]);

    const backgroundImage = `url(${backgrounds[currentSlide]})`;

    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage}}>
            <div className="hero__overlay hero__overlay--black"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                {/* <ul className="translation__list">
                                    <li className="translation__item">
                                        <button className="translation__btn translation__btn--es" onClick={() => changeLanguage('es')}>Español</button>
                                    </li>
                                    <li className="translation__item">
                                        <button className="translation__btn translation__btn--en" onClick={() => changeLanguage('en')}>English</button>
                                    </li>
                                </ul>  */}
                                <Zoom triggerOnce cascade>
                                    {/* <h4 className="text--lead text-white"><span className="lighted--tertiary">{t('hero-mini')}</span></h4> */}
                                    <h1 className="text--title text-white">
                                        {t('hero-title')}
                                    </h1>
                                    <h4 className="text--lead text-white">
                                        {t('hero-subtitle')}
                                    </h4>
                                    {/* <ul className="hero__list">
                                        <li className="hero__list__item">&rarr; {t('hero-01')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-02')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-03')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-04')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-05')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-06')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-07')}</li>
                                        <li className="hero__list__item">&rarr; {t('hero-08')}</li>
                                    </ul> */}
                                    {/* <a className="btn btn--primary" target="__blank" href="https://wa.me/+529992709199?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">🔥 {t('hero-call')}</a> */}

                                    <div className="slider-controls">
                                    {backgrounds.map((_, index) => (
                                        <button 
                                            key={index}
                                            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                            aria-label={`Ir a slide ${index + 1}`}
                                        />
                                    ))}
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;