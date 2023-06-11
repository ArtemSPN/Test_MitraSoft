import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Container>
                <Suspense fallback={<Loader/>}>
                    <App />
                </Suspense>
            </Container>
        </Provider>
    </BrowserRouter>

);
