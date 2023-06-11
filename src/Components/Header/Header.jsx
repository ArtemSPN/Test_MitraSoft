import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {ReactComponent as Menu} from '../../assets/Menu.svg';
import cls from './Header.module.css'


const Header = ({handleShow}) => {
  return (
    <div className={cls.header}>
        <Menu height={'50px'} cursor={'pointer'} onClick={handleShow}/>
        <h1 className={cls.logo}>MitraSoft</h1>
    </div>
  )
}

export default Header