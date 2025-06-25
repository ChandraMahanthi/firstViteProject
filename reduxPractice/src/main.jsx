import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {Provider} from "react-redux";
import myStore from './redux Concept/store/Store.js';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>
)
