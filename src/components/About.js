import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';
import { FaMobileAlt, FaTv, FaHeadset, FaServer  } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

import partners01 from '../images/logo-roku.png';
import partners02 from '../images/logo-apple.webp';
import partners03 from '../images/logo-android.png';
import partners04 from '../images/logo-firetv.png';
import partners05 from '../images/logo-chrome.png';

import Products from './Products';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-01.jpg'),
  require('../images/img-04.jpg'),
  require('../images/img-16.webp'),
  require('../images/img-06.jpg'),
  require('../images/img-17.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-18.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-13.jpg'),
  require('../images/img-15.jpg'),
  require('../images/img-19.jpg'),
  require('../images/img-07.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-08.jpg'),
];

export default function About() {
  const {t} = useTranslation();
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="left">
            <div className="about__header">
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text--white">{t('about-title')}</h2>
                <h4 className="text--lead text--quaternary">
                  {t('about-subtitle')}
                </h4>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
              <Fade triggerOne>
                <div className="about__header">
                  <div className="about__header__content">
                    <p className='text--body text-center text-white mb-5'>
                      {t('about-text-01')}
                      <strong><span className="text--tertiary">{t('about-price')}</span></strong>
                      {t('about-text-02')} 
                      <strong><span className="text--quaternary">{t('about-text-03')}</span></strong>
                      {t('about-text-04')}
                    </p>
                    <a className="btn btn--primary" target="__blank" href="https://wa.me/+529992709199?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">👉 {t('about-call')}</a>
                  </div>
                </div>
                <div className='headercontent'>
                  <div className="headercontent__content">
                    <h4 className="text--lead text-center text--quaternary">{t('about-02')}</h4>
                    <h4 className="text--lead text-center"><span className="text--tertiary">{t('about-03')}</span></h4>
                  </div>
                </div>
                <div className="about__content">
                  <ul className="boxes">
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaMobileAlt size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">{t('about-feature-01')}</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaTv size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">{t('about-feature-02')}</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaHeadset size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">{t('about-feature-03')}</h4>
                    </li>
                    <li className="boxes__item">
                      <div className="boxes__icon">
                        <FaServer size={45}/>
                      </div>
                      <h4 className="text--lead boxes__title">{t('about-feature-04')}</h4>
                    </li>
                  </ul>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
      <Products />
      <Container>
        <Row>
          <Col>
            <Fade cascade triggerOnce direction="right">
              <div className="about__content">
                <div className="about__header">
                  <div className="about__header__content">
                    <h2 className="text--subtitle text--white">{t('about-02-title')}</h2>
                    <h4 className="text--lead text--quaternary">
                      {t('about-02-subtitle')}
                    </h4>
                  </div>
                </div>
                <ul className='about__partners'>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--roku" src={partners01} alt="roku"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--apple" src={partners02} alt="apple"/>
                  </li>
                  <li className='about__partners__item about__partners__item--android'>
                    <img className="about__partners__item__img about__partners__item__img--android" src={partners03} alt="android"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--chrome" src={partners05} alt="google-chrome"/>
                  </li>
                  <li className='about__partners__item'>
                    <img className="about__partners__item__img about__partners__item__img--fire" src={partners04} alt="fire-tv"/>
                  </li>
                </ul>
                <div className='text-center'>
                  <a className="btn btn--primary" target="__blank" href="https://wa.me/+529992709199?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20entretenimiento">💬 {t('about-02-cta')}</a>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
