import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

export const Headerbar = () => {
  const navigate = useNavigate();

  function HomeClick() {
    navigate("/");
  }

  return (
    <>
      <header className="head-bar sticky-top py-2">
        <Container>
          <picture className='Logo' onClick={HomeClick}>
            <img src="../img/logo-no-background.png" alt="logo" />
          </picture>
        </Container >
      </header >
    </>
  );
};
