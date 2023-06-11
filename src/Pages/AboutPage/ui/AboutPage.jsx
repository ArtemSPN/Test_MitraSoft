import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Row>
        <Col md='5'>
          <Image src="https://sun9-68.userapi.com/impg/uukCV39GZjuf_bD9am8BR1nZxVq9KB2-XXclZA/67QF0Bzzc0c.jpg?size=1280x960&quality=96&sign=90fa4c18dba31d4f871cfc526c8f5969&type=album" width={'100%'} rounded />
        </Col>
        <Col md='7'>
          <h1>Обо мне</h1>
          <Row>
            <Col md='3'>
              <h5>имя:</h5>
            </Col>
            <Col md='5'>
              <p>Артем</p>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <h5>образование:</h5>
            </Col>
            <Col md='8' lg='9'>
              <p>"Информатика и вычислительная техника" Саратовский Государственный 
                Технический Университет имени Ю.А.Гагарина</p>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <h5>профессия:</h5>
            </Col>
            <Col md='5'>
              <p>frontend-разработчик</p>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <h5>эл.почта:</h5>
            </Col>
            <Col md='5'>
              <p>leskin-artem@mail.ru</p>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <h5>github:</h5>
            </Col>
            <Col md='8'>
              <a href='https://github.com/ArtemSPN?tab=repositories'>https://github.com/ArtemSPN?tab=repositories</a>
            </Col>
          </Row>
        </Col>
    </Row>

  )
}

export default AboutPage;
