import React from 'react';
import ReactDOM from 'react-dom/client';


//   <!-- Icon Font Stylesheet -->
import "./utils/css/bootstrap-icons1.4.1.css";
import "./utils/css/font-awesome5.10.0.min.css";

//  <!-- Libraries Stylesheet -->
import "./utils/lib/owlcarousel/assets/owl.carousel.min.css";
import "./utils/lib/animate/animate.css"

// <!-- Customized Bootstrap Stylesheet -->
import './utils/bootstrap/bootstrap.min.css';

import './index.css';


// imports
// import * from "bootstrap/dist/js/bootstrap.bundle.min.js"
// import $ from './utils/jQuery/jquery-3.4.1.min.js';
// import * from "./utils/jQuery/jquery-3.4.1.min.js";
// import * from "./utils/lib/wow/wow.min.js";
// import * from "./utils/lib/easing/easing.min.js";
// import * from "./utils/lib/waypoints/waypoints.min.js";
// import * from "./utils/lib/counterup/counterup.min.js";
// import * from "./utils/lib/owlcarousel/owl.carousel.min.js";
// import * from "./utils/js/main.js";

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename='/planet1'>
        <App /> 
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
