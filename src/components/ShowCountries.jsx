
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ShowCountries() {

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
  <div>
    <h1>Countries: </h1>

    {countries.length && countries.map((country) => {
        return (
          <div>
            {
              <Link to={`/country-details/${country._id}`}>
                <h3>{country.name.common}</h3>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country Flag" />
              </Link>
            }
          </div>
        );
    })}
  </div>
);



}
export default ShowCountries