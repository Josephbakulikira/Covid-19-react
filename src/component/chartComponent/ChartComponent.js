import React, {Fragment, useState, useEffect} from 'react';
import {FetchDailySummary} from '../api/index';
import {Line, Bar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import './ChartComponent.css'
export default function ChartComponent({data, country}) {
    const [dailySummary, setDailySummaryData] = useState([]);
    
    useEffect( () => {
        const fetcher = async () => {
            
            setDailySummaryData(await FetchDailySummary()) 
        }
        fetcher()
    }, [])
    const charBar = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Cases', 'Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#3fbafe', 'green', 'red'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]

                    }],
                }} 
                options={{
                    legend: {display: true},
                    title: {display: true, text: country ? `current state in ${country}`: 'World'},
                }}   
            />
        ):null
    )
    const chartLine = (
        dailySummary.length !== 0 ?
        <Line data={{
                labels: dailySummary.map(({date}) => date.reportDate), 
                datasets:[
                {
                    data: dailySummary.map(({confirmed}) => confirmed.total),
                    label: 'Cases',
                    
                    borderColor: '#3fbafe',
                    fill: true
                }, 
                {
                    data: dailySummary.map(({deaths}) => deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }
            ] 
            }}>
        
        </Line> : null)

    let displayedGraph = country && country.toLowerCase() !== 'world'  ? charBar :  chartLine
    return (
        <Fragment>
            <div>
                <Card className="graphCards">{displayedGraph}</Card>
                <br></br>
                <Card calssName="graphCards">{displayedGraph !== chartLine ? chartLine: charBar}</Card>
                
            </div>
        </Fragment>
    )
}
