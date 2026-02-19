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
              <div className="about__header__content">
                <h2 className="text--subtitle text-center text--white">{t('about-title')}</h2>
                <h4 className="text--slogan text--white">
                  {t('about-subtitle')}
                </h4>
                <h4 className="text--lead text--quaternary">
                  {t('about-subtitle-02')}
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
              <Fade cascade triggerOnce direction="right">
                <div className="about__content">
                  <p className='text--body text-white mb-5'>
                    {t('about-text-01')}
                  </p>
                  <p className='text--body text-white mb-5'>
                    {t('about-text-02')}
                  </p>
                </div>
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
