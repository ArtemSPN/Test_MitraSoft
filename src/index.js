import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Container>
        <Suspense fallback={<Loader/>}>
                <App />
            </Suspense>
        </Container>
    </BrowserRouter>

);
