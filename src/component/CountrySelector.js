import React, { useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import {FetchCountries} from './api/index' 
import styles from './CountrySelector.module.css';

export default function CountrySelector(props) {
    const [countries, setCountriesState] = useState([])

    useEffect(() => {
        const fetcher = async () => {
            setCountriesState(await FetchCountries())
        }
        fetcher()
    }, [setCountriesState])

    let countriesList = []
    if (countries.length){
        countriesList = countries.map( (name, index) => (<option key={index}>{name}</option>))
    }
    const onChangeHandler = (event) => {
        props.CountrySelectHandler(event.target.value)
    }

    return (
           
            <Form.Control className="text-center" style={{textAlign: "center"}} defaultValue='' as="select" size="md" onChange={onChangeHandler}>
                <option>World</option>
                {countriesList}
            </Form.Control>

    )
}
