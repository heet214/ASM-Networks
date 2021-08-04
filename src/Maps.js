import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "50%",
  height: "50%",
};
export class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 48.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAlWQ5G4fyCufP3qHvuV6-_cREPu7-es50",
})(Maps);
