import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from "./components/Landing/Landing";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import styles from "./components/Landing/Landing.module.css"
import { Provider } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import store from './redux/store';

function App() {
  const location = useLocation()
  const isLanding = location.pathname === "/";

  return (
    <Provider store={store}>
      <div className={isLanding ? styles.landing : "App"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/create' element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
