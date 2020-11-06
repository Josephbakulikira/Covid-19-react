import React, {Fragment, Component} from 'react';
import Cards from './component/Cards';
import CountrySelector from './component/CountrySelector';
import logoImg from './auctux-logo.png'
import ChartComponent from './component/chartComponent/ChartComponent';
import {Container, Form, } from 'react-bootstrap';
import SearchForm from './component/SearchForm';
import {FetchData} from './component/api/index';
import Particles from 'react-particles-js';
class App extends Component {
    state = {
        data: {},
        country: ''

    }
    async componentDidMount(){
        const data = await FetchData();
        
        this.setState({data: data})
    }

    CountrySelectHandler = async(country) => {
      const data = await FetchData(country);
      this.setState({data: data, country: country})

    }

    render(){
        const {data, country} = this.state;
        return (
            <Fragment>
            
              <Particles className="particles" params={
                {
                  "particles": {
                    "number": {
                      "value": 160,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 1,
                      "random": true,
                      "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 1,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 400,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }
              }/>

              <div className="App">

                <div className="navBar">

                    <div><a href='http://auctux.com/'><img width="80px" height="auto" src={logoImg} alt='logo'/></a></div>
                    <div><a class="a-glow" href="https://www.youtube.com/channel/UCjPk9YDheKst1FlAf_KSpyA" target="_blank">Subscribe</a></div>

                </div>
                
                <div>
                  
                </div>
                <Container className="text-center">
                    <h1 className='covid'>COVID 19</h1>
                    <span>lastUpdate: {data.lastUpdate ? new Date(data.lastUpdate).toDateString(): "loading..."}</span>
                    <div className=''>
                    <Cards data={data}/>
                    <br></br>
                    <Form.Group>
                      <SearchForm CountrySelectHandler={this.CountrySelectHandler} countries ={country}/>
                      <br></br>
                      <CountrySelector CountrySelectHandler={this.CountrySelectHandler}/>

                    </Form.Group>
                    
                    <ChartComponent data={data} country={country}/>
                    </div>
                </Container>
                <br></br>
                <footer>
                  <div>Copyright © 2020 All Rights Reserved by <a href='http://auctux.com/'>Auctux</a>.</div>
                  </footer>
              </div>
              

            </Fragment>
        )

    }
    
}

export default App;
