import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import MainPage from './MainPage';
import MyNavBar from './MyNavBar';
import RegistrationPage from './auth/RegistrationPage';

export default function App({ user, cats, prods }) {
  const [currUser, setCurrUser] = useState(user || {});


  const logOutHandler = () => {
    fetch('/auth/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <Container>
      <MyNavBar currUser={currUser} logOutHandler={logOutHandler} cats={cats} />
      <Routes>
        <Route path="/" element={<MainPage cats={cats} prods={prods} currUser={currUser} />} />
        <Route path="/auth/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/auth/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />

      </Routes>
    </Container>
  );
}
