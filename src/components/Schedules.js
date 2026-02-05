import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
// import Table from 'react-bootstrap/Table';
import { Fade } from 'react-awesome-reveal';

import img01 from '../images/img-destino-02.jpg';
import img02 from '../images/img-destino-06.jpg';
import img03 from '../images/img-destino-07.jpg';
import img04 from '../images/img-destino-08.jpg';
import img05 from '../images/img-destino-09.jpg';
import img06 from '../images/img-destino-10.jpg';

const Schedules = () => {
    return(
        <div className="schedules">
            <Container>
                <Row>
                    <Col>
                        <div className="schedules__container">
                            <Fade cascade triggerOnce direction="up">
                                <div className="headercontent">
                                    <div className="headercontent__content">
                                        <h2 className="text--subtitle text-center text-uppercase text--white">Horarios y Precios</h2>
                                        <p className='text--body text-center text-white'>
                                        En Lobo Tours, te llevamos a donde necesites con horarios flexibles y precios accesibles.<br />¡Viaja sin preocupaciones desde <strong>Tuxtla Gutiérrez, Chiapas!</strong>
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                            
                            {/* <Table striped bordered hover responsive dark>
                                <caption>*Los precios y horarios pueden estar sujetos a cambios</caption>
                                <thead>
                                    <tr>
                                        <th>Nuestros Destinos</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miércoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                        <th>Sábado</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Puerto Vallarta, Jalisco</td>
                                        <td></td>
                                        <td></td>
                                        <td><span>6:00 am</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span>6:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Guadalajara, Jalisco</td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Ciudad Juárez, Chihuahua</td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td></td>
                                        <td><span>8:00 am</span></td>
                                        <td><span>$2,500</span></td>
                                    </tr>
                                    <tr>
                                        <td>Monterrey, Nuevo León</td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>9:00 am</span></td>
                                        <td><span>$1,600</span></td>
                                    </tr>
                                    <tr>
                                        <td>Cancún, Quintana Roo</td>
                                        <td><span>12:00 pm</span></td>
                                        <td></td>
                                        <td><span>12:00 pm</span></td>
                                        <td></td>
                                        <td><span>12:00 pm</span></td>
                                        <td><span>12:00 pm</span></td>
                                        <td><span>$1,000</span></td>
                                    </tr>
                                    <tr>
                                        <td>Tijuana, Baja California</td>
                                        <td></td>
                                        <td></td>
                                        <td><span>3:00 pm</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span>3:00 pm</span></td>
                                        <td><span>$2,500</span></td>
                                    </tr>
                                </tbody>
                            </Table> */}

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className="accordion__content__title">Puerto Vallarta, Jalisco</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img01} alt="horario-vallarta"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Miércoles y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>6:00 am</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$1,600</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Vallarta">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='accordion__content__title'>Guadalajara, Jalisco</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img02} alt="horario-guadalajara"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Lunes, Miércoles y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>8:00 am</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$1,600</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Guadalajara">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='accordion__content__title'>Ciudad Juárez, Chihuahua</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img03} alt="horario-Juárez"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Martes, Juéves y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>8:00 am</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$2,500</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Ciudad%20Juárez">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='accordion__content__title'>Monterrey, Nuevo León</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img04} alt="horario-Monterrey"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Lunes, Martes, Miércoles, Juéves, Viernes y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>9:00 am</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$1,600</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Monterrey">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><span className="accordion__content__title">Cancún, Quintana Roo</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img05} alt="horario-Cancún"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Lunes, Miércoles, Viernes y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>12:00 pm</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$1,000</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Cancún">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><span className="accordion__content__title">Tijuana, Baja California</span></Accordion.Header>
        <Accordion.Body>
            <div className="accordion__content">
                <div className="accordion__content__column">
                    <img className="accordion__content__img" src={img06} alt="horario-vallarta"/>
                </div>
                <div className="accordion__content__column">
                    <ul className="accordion__content__list">
                        <li className="accordion__content__item"><span className="accordion__content__subtitle">🚐 Próximas Salidas</span></li>
                        <li className="accordion__content__item">📅 Días: <span className="accordion__content__days">Miércoles y Sábados</span></li>
                        <li className="accordion__content__item">⏰ Hora: <span className='accordion__content__time'>3:00 pm</span></li>
                        <li className="accordion__content__item">💵 Precio: <span className="accordion__content__price">$2,500</span></li> 
                    </ul>
                    <a className="btn btn--secondary" target="__blank" href="https://wa.me/+5219613037177?text=Lobo%20Tours:%20Estoy%20interesado%20en%20un%20viaje%20a%20Guadalajara">¡Reservar Ahora¡</a>
                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p className='text--small'>*Los precios y horarios pueden estar sujetos a cambios</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;
