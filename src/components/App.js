import Information from './Information';
import Map from './Map';
import SearchBar from './SearchBar';
import {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null,
            loading: true,
        }
        this.findIP = this.findIP.bind(this);
    }

    async componentDidMount () {
        const result = await fetch(window.CURRENTAPI)
        .then((response) => response.json())
        .then((result) => result)
        .catch((err) => err)

        console.log(this.state);

        if (result.hasOwnProperty("ip")) {
            this.findIP(result.ip);
        }
    }

    async findIP(ip) {
        this.setState({loading: true});
        const result = await fetch(window.GEOAPI+ip)
        .then((response) => response.json())
        .then((result) => result)
        .catch((err) => err);
        
        if (result.hasOwnProperty("ip")) {
            this.setState({location: result, loading: false});
        } else {
            this.setState({location: null, loading: false});
        }
    }

  render() {
      let location = [];
      if (this.state.location) {
        location = [this.state.location.location.lat, this.state.location.location.lng];
      }
    return (
        <div className="main-container">
            <div className="detail">
                <h3 className="detail__title">IP Address Tracker</h3>
                <SearchBar findIP={this.findIP}/>
                <Information location={this.state.location} loading={this.state.loading}/>
            </div>
            {
                this.state.location ?
                <Map key={location} location={location}/>
                :
                <div className="leaflet-container"></div>
            }
        </div>
    )
  }
}


