/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const ToxicMapGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{lat: 39.833333, lng: -98.583333}}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class ToxicMapCanvas extends Component {

  render() {
    return (
      <ToxicMapGoogleMap
        containerElement={
        //   <div style={{ height: `100%` } id="map-canvas"/>
          <div id="map-canvas"/>
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}
