import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/login";
import Registrate from "./pages/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage"; // Assuming you have a NoPage component

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="Registrate" element={<Registrate />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
