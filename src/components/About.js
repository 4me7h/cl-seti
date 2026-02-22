import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';

const imagePaths = [  
  require('../images/img-01.jpg'),
  require('../images/img-02.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-04.jpg'),
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
              <h2 className="text--subtitle text-center text--dark-primary">{t('about-title')}</h2>
              <h4 className="text--slogan text--dark-secondary">
                {t('about-subtitle')}
              </h4>
              <h4 className="text--lead text--dark-secondary-hover">
                {t('about-subtitle-02')}
              </h4>
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
          <Col md={6}>
            <Fade triggerOnce direction="right">
              <div className="about__content">
                <p className='text--body text--dark-primary'>
                  {t('about-text-01')}
                </p>
                
              </div>
            </Fade>
          </Col> 
          <Col md={6}>
            <Fade triggerOnce direction="left">
              <div className="about__content">
                <p className='text--body text--dark-primary'>
                {t('about-text-02')}
                </p>
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade triggerOnce direction="right">
              <div className="about__content mt-5">
                <h4 className='text--lead text--dark-secondary-hover text-center'>
                  {t('about-highlight')}
                </h4>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
