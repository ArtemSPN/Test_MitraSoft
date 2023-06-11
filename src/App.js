import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutPage } from './Pages/AboutPage';
import { UserPage } from './Pages/UserPage';
import { MainPage } from './Pages/MainPage';
import { Col, Row } from 'react-bootstrap';
import Header from './Components/Header/Header';
import { Suspense, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Loader from './Components/Loader/Loader';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
        <Row>
          <Header handleShow={handleShow}/>
        </Row>
        <Row>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/about" element={<AboutPage />}
              />
              <Route path="/user/:id" element={<UserPage />}
                />
              <Route path="*" element={<MainPage />}/>
          </Routes>
          <Sidebar show={show} handleClose={handleClose}/>
        </Row>
    </div>
  );
}

export default App;
