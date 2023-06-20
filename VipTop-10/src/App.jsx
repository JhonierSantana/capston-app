import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faGlobeAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons';

export const App = () => {
  const [language, setLanguage] = useState('es');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const settingsRef = useRef(null);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleLanguageToggle = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleLanguageMenuClick = (event) => {
    event.stopPropagation();
  };

  const handleOutsideClick = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsOpen(false);
      setLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="head-bar sticky-top py-2">
        <Container>
          <picture>
            <img src="../img/logo-no-background.png" alt="logo" />
          </picture>
          <Dropdown
            className="btn-group"
            show={settingsOpen}
            onClick={handleLanguageMenuClick}
            ref={settingsRef}
          >
          <Dropdown.Toggle variant="secondary" className="btn settings-button" onClick={handleSettingsToggle}>
              <span className="dropdown-text">Settings</span>
          </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as="button" onClick={handleLanguageToggle}>
                <FontAwesomeIcon icon={faLanguage} className="me-2" />
                Language
              </Dropdown.Item>
              {languageOpen && (
                <>
                  <Dropdown.Item as="button" onClick={() => handleLanguageChange('es')}>
                    {language === 'es' && <FontAwesomeIcon icon={faCircle} className="me-2" />}
                    Spanish
                  </Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => handleLanguageChange('en')}>
                    {language === 'en' && <FontAwesomeIcon icon={faCircle} className="me-2" />}
                    English
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </header>
    </>
  );
};
