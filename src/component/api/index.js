import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export async function FetchData(country){
    let dynamicUrl = url
    if(country && country.toLowerCase() !== 'world'){
        dynamicUrl = `${url}/countries/${country}`
    }
    try {
        const {data} = await axios.get(dynamicUrl);
        const res = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return res
    }
    catch(error){
        throw error;
    }
}

export async function FetchDailySummary(){
    try{
        const {data} = await axios.get(`${url}/daily`);
        const res = data.map((dailySum) => ({
            confirmed: dailySum.confirmed,
            deaths: dailySum.deaths,
            date: dailySum

        }))
        return res
    }catch(err){
        throw err
    }
}
export async function FetchCountries() {
    try{
        const {data} = await axios.get(`${url}/countries`);

        return data.countries.map((country) => country.name)
    }catch(err){
        console.log(err)
    }
}