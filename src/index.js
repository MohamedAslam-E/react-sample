import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import NavBar from './components/NavBar';
//import SideBar from './components/SideBar';
//import FormComponent from './components/FormComponent';
//import StudentTable from './components/StudentTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBar/> 
    <SideBar/>
    <FormComponent/>
    <StudentTable/> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();
