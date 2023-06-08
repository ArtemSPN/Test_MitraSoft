import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Button from 'react-bootstrap/Button';
import { AboutPage } from './Pages/AboutPage';
import { UserPage } from './Pages/UserPage';
import { MainPage } from './Pages/MainPage';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Row>
          <Col md='2'>Logo</Col>
          <Col md='8'>Menu</Col>
        </Row>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/user/:id" element={<UserPage />}/>
            <Route path="*" element={<MainPage />}/>
        </Routes>
    </div>
  );
}

export default App;
