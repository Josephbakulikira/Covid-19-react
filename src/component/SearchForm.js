import React,{ useState, useEffect} from 'react';

import {FetchCountries} from './api/index' 

import AutoComplete from 'react-autocomplete';
export default function SearchForm({CountrySelectHandler, country}) {
    
    const [countries, setCountriesState] = useState([])
    const [ev, setEv] = useState()


    useEffect(() => {
        const fetcher = async () => {
            setCountriesState(await FetchCountries())
        }
        fetcher()
    }, [setCountriesState])
    const onChangeHandler = (val) => {
        CountrySelectHandler(val)

    }

    let pays = []
    if(countries.length > 0){
        pays = countries.map(el => ({ id: el, label: el }))
    }
    return (
            // <Form.Control defaultValue='' size="lg" type="text" placeholder="Search Country" onChange={onChangeHandler}/>
            <div className="formSearch">
                
                <AutoComplete 
            items={pays}
              shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={item => item.label}
              renderItem={(item, highlighted) =>
                <div
                  key={item.id}
                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent', }}
                >
                  {item.label}
                </div>
              }
              value={ev? ev.target.value: ''}
              onChange={e => setEv(e)}
              onSelect={event => onChangeHandler(event)}
            />
            </div>
             
            
    )
}
