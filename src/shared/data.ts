// @ts-nocheck
import Stations from '../assets/images/Stations.png';
// import stars from '../assets/images/Star.png';

const stations = [
    
    {
        "id": 0,
        "name": "Primăria Corbeanca [A]",
        "coords": {
            "latitude": 44.59412021772872,
            "longitude": 26.03782308728203
        },
        "maxPower": 15,
        "currentPower": 0.8,
        "plugNumber": 6,
        "freePlugs": 5,
        "busRoutes": [ "402", "441" ],
        "charging": 0.3
        
    },
    {
        "id": 1,
        "name": "Primăria Corbeanca [B]",
        "coords": {
            "latitude": 44.59416657180242, 
            "longitude": 26.037495176377107
        },
        "maxPower": 20,
        "currentPower": 0.6,
        "plugNumber": 10,
        "freePlugs": 7,
        "busRoutes": [ "402", "441" ],
        "charging": 0
    },
    {
        "id": 2,
        "name": "Policlinica [B]",
        "coords": {
            "latitude": 44.59423,
            "longitude": 26.04263
        },
        "maxPower": 10,
        "currentPower": 1,
        "plugNumber": 3,
        "freePlugs": 3,
        "busRoutes": [ "402", "441" ],
        "charging": 0
    },
    {
        "id": 3,
        "name": "Policlinica [A]",
        "coords": {
        "latitude":44.59416,
            "longitude":  26.04232
        },
        "maxPower": 30,
        "currentPower": 0.2,
        "plugNumber": 4,
        "freePlugs": 1,
        "busRoutes": [ "402", "441" ],
        "charging": 0.2
    },
    {
        "id": 4,
        "name": "Arcadei [B]",
        "coords": {
            "latitude": 44.59616,
            "longitude": 26.05034
        },
        "maxPower": 10,
        "currentPower": 1,
        "plugNumber": 0,
        "freePlugs": 0,
        "busRoutes": [],
        "charging": 0
    },
    {
        "id": 5,
        "name": "Arcadei [A]",
        "coords": {
            "latitude": 44.59617,
            "longitude": 26.05072
        },
        "maxPower": 0,
        "currentPower": 0,
        "plugNumber": 0,
        "freePlugs": 0,
        "busRoutes": [],
        "charging": 0
    },
    {
        "id": 6,
        "name": "Penny [B]",
        "coords": {
            "latitude": 44.59827,
            "longitude": 26.05923
        },
        "maxPower": 0,
        "currentPower": 0,
        "plugNumber": 0,
        "freePlugs": 0,
        "busRoutes": [],
        "charging": 0
    },
    {
        "id": 7,
        "name": "Penny [A]",
        "coords": {
            "latitude": 44.59827,
            "longitude": 26.05945
        },
        "maxPower": 0,
        "currentPower": 0,
        "plugNumber": 0,
        "freePlugs": 0,
        "busRoutes": [],
        "charging": 0
    },
];

export default stations;