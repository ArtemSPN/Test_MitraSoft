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
        <Header handleShow={handleShow}/>
        <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loader/>}>
                <MainPage />
              </Suspense>}
            />
            <Route path="/about" element={
              <Suspense fallback={<Loader/>}>
                <AboutPage />
              </Suspense>}
            />
            <Route path="/user/:id" element={
              <Suspense fallback={<Loader/>}>
                <UserPage />
              </Suspense>}
              />
            <Route path="*" element={<MainPage />}/>
        </Routes>
        <Sidebar show={show} handleClose={handleClose}/>
    </div>
  );
}

export default App;
