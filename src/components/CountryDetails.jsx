import React from 'react'
import { useParams } from 'react-router-dom';



function CountryDetails({countries}) {
  const { countryId } = useParams();


 const [country] = countries.filter(el => el.alpha3Code === countryId);

  return (
    <div>
      <h1>Details</h1>

      <h3>{country.name.common}</h3>
    </div>
  );
}

export default CountryDetails