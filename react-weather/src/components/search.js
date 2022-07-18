import { AsyncPaginate } from "react-select-async-paginate";
import React, { useEffect, useState } from "react";
import  { GEO_API_URL, geoApiOptions } from '../api';



const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);
    
    //will use input to pass into fetch method into url to get the data
    const loadOptions = (inputValue) => {
        //specified a minimum population for better search results
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    
    return (
       <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}

            //load options will fill autocomplete in "search for city"
            loadOptions={loadOptions}

       /> 
    )
}

export default Search;
