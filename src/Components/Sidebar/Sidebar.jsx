import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import cls from './Sidebar.module.css';

function Sidebar({show, handleClose}) {

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MitraSoft</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav.Link><Link to={'/'} onClick={handleClose} className={cls.navItem}>Главная страница</Link></Nav.Link>
            <Nav.Link><Link to={'/about'} onClick={handleClose} className={cls.navItem}>Обо мне</Link></Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;