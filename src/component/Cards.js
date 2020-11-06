import React, {Fragment} from 'react';
import {Card, Row, Container} from 'react-bootstrap'
import CountUp from 'react-countup';
import './Cards.css';
import ReactLoading from 'react-loading';
 
    
export default function Cards({data}) {
    const load = ({ type, color }) => (
        <ReactLoading type={type} color={color} height={667/3} width={375/3} />
    );
    return (
        <Fragment>
            <Container fluid className="d-flex justify-content-center nkk">
            
            <Card className="cards card-1" >
                <Card.Title className="cardTitle">Cases</Card.Title>
                {data.confirmed ? <CountUp className="countup"start={0} end={data.confirmed.value} duration={3} separator=","/>: load("bubbles", 'red')}
            </Card>

            <Card className="cards card-2" >
                <Card.Title className="cardTitle">Recovered</Card.Title>
                {data.recovered? <CountUp className="countup" start={0} end={data.recovered.value} duration={3} separator=","/>: load("bubbles", 'red')}
            </Card>

            <Card className="cards card-3" >
                <Card.Title className="cardTitle">Deaths</Card.Title>
                
                {data.deaths? <CountUp className="countup" start={0} end={data.deaths.value} duration={3} separator=","/>: load("bubbles", 'red')}
            </Card>
            
            </Container>
            
        </Fragment>
    )
}
