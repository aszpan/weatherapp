import { AsyncPaginate } from "react-select-async-paginate";
import React, { useEffect, useState } from "react";
import  { GEO_API_URL, geoApiOptions } from '../api';



const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);
    
    //will use input to pass into fetch method into url to get the data
    const loadOptions = (inputValue) => {
        //specified a minimum population for better search results
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude}, ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }
    
    //will retrieve data
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    
    return (
       <AsyncPaginate 
            placeholder="Search for city"
            //debounce keeps us from requesting info from the API each time a key is pressed
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}

            //load options will fill autocomplete in "search for city"
            loadOptions={loadOptions}

       /> 
    )
}

export default Search;
