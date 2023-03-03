import React from 'react'
import ShowCountries from './ShowCountries'
import { Link, useParams } from 'react-router-dom';


function CountriesList() {
  return (
    <div>
        <ShowCountries></ShowCountries>
{/*       {<Link to={`/country-details/${country._id}`}></Link>} */}
    </div>
  );}

export default CountriesList