import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {ReactComponent as Menu} from '../../assets/Menu.svg';


const Header = ({handleShow}) => {
  return (
    <Row>
        <Col md='9'>
          <Menu height={'50px'} cursor={'pointer'} onClick={handleShow}/>
          </Col>
        <Col md='1'>
        <h1>MitraSoft</h1>
        </Col>
    </Row>
  )
}

export default Header