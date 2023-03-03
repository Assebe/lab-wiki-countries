import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowCountries from './components/ShowCountries';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

  const [countries, SetCountries] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      SetCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/show-countries' element={ <ShowCountries/>}/>
        <Route path="/country-details/:countryId" element={<CountryDetails countries={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
