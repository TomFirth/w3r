import { React, Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Marker } from './'

const defaultProps = {
  center: {
    lat: 51.5074,
    lng: 0.1272
  },
  zoom: 11
};

export default class Map extends Component {
  render () {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
