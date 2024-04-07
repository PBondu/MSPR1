import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useState } from "react";


const createRoutineMachineLayer = ({ latDestination, lngDestination, latUser, lngUser }) => {



  const instance = L.Routing.control({
    waypoints: [
      L.latLng(latUser, lngUser),
      L.latLng(latDestination, lngDestination)
    ],    
    lineOptions: {
      styles: [{ color: "green", weight: 4 }]
    },
    addWaypoints: false,
    draggableWaypoints: false,
    position:'bottomleft',
    language:'fr',
    fitSelectedRoutes:true,
    routeWhileDragging:true,
    showAlternatives: false
  });
  return instance;

};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;