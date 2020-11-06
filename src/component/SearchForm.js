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
                <h3 style={{paddingRight: "10%"}}>Search </h3>
                <AutoComplete  className="forr"
                items={pays}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                <div className="dss"
                  key={item.id}
                  style={{ height: "20px", backgroundColor: highlighted ? 'rgba(232, 12, 120, 0.8)' : 'black', }}
                >
                  {item.label}
                </div>
              }
              value={ev? ev.target.value: ''}
              onChange={e => setEv(e)}
              onSelect={event => onChangeHandler(event)}
              style={{ width: "100%" }}
            />
            </div>
             
            
    )
}
