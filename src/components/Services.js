import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Card from './Cards';

import image01 from '../images/img-01.jpg';
import image02 from '../images/img-02.jpg';
import image03 from '../images/img-03.jpg';
import image04 from '../images/img-04.jpg';
import image05 from '../images/img-05.jpg';

export default function Services() {
  const {t} = useTranslation();
  return (
    <div className="services">
      <Container>
        <Row>
          <Col>
            <div className="services__container">
              <div className="services__header text-center">
                <h2 className="text--subtitle text--dark-primary">
                  {t('services-title')}
                </h2>
                <h4 className="text--slogan text--dark-secondary">
                  {t('services-subtitle')}
                </h4>
                <h4 className="text--lead text--dark-secondary">
                  {t('services-subtitle-02')}
                </h4>
              </div>
              <div className="services__content">
                <ul className="services__list">
                  <li className="services__item">
                    <Card 
                      image = {image01}
                      name = {[t('services-list-01')]}
                      description = {[t('services-text-01')]}
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image02}
                      name = {[t('services-list-02')]}
                      description = {[t('services-text-02')]}
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image03}
                      name = {[t('services-list-03')]}
                      description = {[t('services-text-03')]}
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image04}
                      name = {[t('services-list-04')]}
                      description = {[t('services-text-04')]}
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image05}
                      name = {[t('services-list-05')]}
                      description = {[t('services-text-05')]}
                    />
                  </li>
                </ul>
                <div className="services__content text-center">
                  <a className="btn btn--secondary btn--secondary--dark" target="__blank" href="https://wa.me/+17273405713?text=Hi,%20I'm%20interested%20in%20the%20remodelling%20service">{t('service-call')}</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
