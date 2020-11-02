import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

export default class MapSingleAn extends Component {


    render() {
        const image = new L.Icon({
            iconUrl: "assets/icone/marker.png",
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76]// point from which the popup should open relative to the iconAnchor
        });

        return (
            <div className="container w-50 py-5">
                <div className="row">
                    <div className="col-12">
                        <MapContainer style={{height: "250px"}} center={this.props.positionEnvoi} zoom={12} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={this.props.positionEnvoi} icon={image}>
                                <Popup>
                                    {this.props.villeEnvoi}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        )
    }
}