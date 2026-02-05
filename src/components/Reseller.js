import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useTranslation } from 'react-i18next';

import icon01 from '../images/icon-reseller.png';

const Reseller = () => {
    const { t } = useTranslation();

    return (
        <section className="reseller">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="reseller__header">
                            <h2 className="text--subtitle text--white text-uppercase">{t('reseller-title')}</h2>
                            <h4 className="text--lead text--quaternary">
                                {t('reseller-subtitle')}
                            </h4>
                        </div>
                    </Col>
                    <Col sm={12} lg={5}>
                        <div className="text-center">
                            <img src={icon01} alt="Reseller Program" className="reseller__img img-fluid" />
                        </div>
                    </Col>
                    <Col sm={12} lg={7}>
                        <div className="reseller__content">
                            <p className="text--body text-white">
                                {t('reseller-text-01')}
                            </p>
                            <p className="text--body text-white">
                                {t('reseller-text-02')}
                            </p>
                            <p className='text--body text-white mb-5'>
                                {t('reseller-text-03')}
                            </p>
                            <a className="btn btn--primary" target="__blank" href="https://wa.me/+529992709199?text=Hola,%20estoy%20interesado%20en%20ser%20relleser%20de%20Kaelus">
                                🔥 {t('reseller-cta')} 
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Reseller;