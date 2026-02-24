import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Estilos para el contenedor del mapa
const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

// Centro inicial del mapa (ejemplo: Madrid)
const center = {
  lat: 40.416775,
  lng: -3.703790,
};

const MapComponent = () => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQ7fvDxcnduJjdx8eQFLzCsXYrq9OBYVQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Marcador opcional */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;