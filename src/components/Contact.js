import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';
import MapComponent from './MapComponent';

// import iconMail from '../images/icon-mail.png';
// import iconWhats from '../images/icon-whats.png';

const Contact = () => {
    const { t } = useTranslation();
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className="about__header">
                                    <h2 className="text--subtitle text-center text--dark-primary">{t('contact-title')}</h2>
                                    <h4 className="text--slogan text--dark-secondary">
                                        {t('contact-subtitle')}
                                    </h4>
                                    <h4 className="text--lead text--dark-secondary-hover">
                                        {t('contact-subtitle-02')}
                                    </h4>
                                </div>
                               
                                {/* <ul className="contact__buttons">
                                    <li className='contact__buttons__item'>
                                        <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Reserva Aquí</a>
                                    </li>
                                    <li className="contact__buttons__item">
                                        <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20de%20clase%20económica">Reserva Aquí</a>
                                    </li>
                                </ul> */}
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='d-flex'>
                    <Col md={6} className='d-flex'>
                        <MapComponent />
                    </Col>
                    <Col md={6} className='d-flex'>
                        <ul className="contact__information">
                            <li className='contact__information__item'>
                                <span className='contact__information__title'>
                                    {t('contact-information-01')}
                                </span>
                                <span className='contact__information__text'>
                                    {t('contact-information-text-01')} <br />
                                    {t('contact-information-text-01-02')}
                                </span>
                            </li>
                            <li className='contact__information__item'>
                                <span className='contact__information__title'>
                                    {t('contact-information-02')}
                                </span>
                                <span className='contact__information__text'>
                                    {t('contact-information-text-02')}
                                </span>
                            </li>
                            <li className='contact__information__item'>
                                <span className='contact__information__title'>
                                    {t('contact-information-03')}
                                </span>
                                <span className='contact__information__text'>
                                    {t('contact-information-text-03')}
                                </span>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="contact__content text-center mt-5">
                            <a className="btn btn--secondary btn--secondary--dark" target="__blank" href="https://wa.me/+17273405713?text=Hi,%20I'm%20interested%20in%20the%20remodelling%20service">{t('hero-call')}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;