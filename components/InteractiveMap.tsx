"use client";

import { locations } from '@/constants';
import { getStationsFromContract } from '@/utils/service';
import React, { useEffect, useRef, useState } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl';

const InteractiveMap = () => {
  const mapRef = useRef<MapRef>(null);

  // const [pitch, setPitch] = useState(60);
  const [zoom, setZoom] = useState(11);
  const [selectedLocation, setSelectedLocation] = useState("lyon");
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/streets-v9");
  const [dumpsterLocation, setDumpsterLocation] = useState({ latitude: 0, longitude: 0 });
  const [dumpstersLocations, setDumpstersLocations] = useState([]);

  const switchLocation = (location: { name: string, latitude: number, longitude: number }) => {
    setSelectedLocation(location.name);

    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: zoom,
        speed: 1.5,
        curve: 1.5,
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getStationsFromContract(selectedLocation)
      .then((res) => {
        console.log(res);
        setDumpstersLocations(res);
      })
    }, 2000);

    if(!mapRef.current) {
      return;
    } else {
      const currentContract = locations.find((location) => location.name === selectedLocation);
      if(!currentContract) {
        return;
      }
      switchLocation(currentContract && currentContract);
    }

  }, [selectedLocation, zoom]);

  return (
    <div className="relative w-full h-[calc(100vh-260px)] overflow-hidden mt-4 border">
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 4.828339,
          latitude: 45.7417843,
          zoom: zoom,
          // pitch: 60,
        }}
        mapStyle={mapStyle}
      >
        {/* Dumpsters */}
        {dumpstersLocations.map((station: any) => (
          <Marker longitude={station.position.longitude} latitude={station.position.latitude} key={station.name} style={{ zIndex: 1 }}>
            <div key={station.number} className="flex relative justify-center cursor-pointer hover:scale-125 transition-transform">
              {dumpsterLocation.latitude === station?.position.latitude && dumpsterLocation.longitude === station?.position.longitude
              ?
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 animate-bounce" viewBox="0 0 24 24"><path fill="#7e22ce" fillRule="evenodd" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clipRule="evenodd"/></svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" opacity=".5"/><path fill="#ffffff" d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>
              }
            </div>
          </Marker>
        ))}
      </Map>

      {/* Locations */}
      <div className="absolute top-4 left-4 flex gap-2 px-2 z-10">
        {locations.map((location, index) => (
          <button
            key={index}
            className={`text-sm font-medium ${selectedLocation === location.name ? 'bg-zinc-900 text-white' : 'bg-white hover:bg-gray-100'} rounded-lg p-2 capitalize shadow-xl`}
            onClick={() => switchLocation(location)}
          >
            {location.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default InteractiveMap