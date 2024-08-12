
import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import getCountry from './countryDetector';
import { useTranslation } from 'react-i18next';

const countryLanguageMap ={
  US:'en',
  ES:'es',
  // Add more mappings as needed
}
function App() {

  const {t} = useTranslation();


  useEffect(() => {
    const setLanguageByCountry = async () => {
      const country = await getCountry();
      const language = countryLanguageMap[country] || 'en';
      i18n.changeLanguage(language);
    };

    setLanguageByCountry();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>{t('welcome')}</h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
