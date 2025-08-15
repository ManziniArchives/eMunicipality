import React, { useEffect, useState } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';
import api from '../api/axios';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapboxHeatmap() {
  const [viewport, setViewport] = useState({ latitude: -26.2, longitude: 28.0, zoom: 10 });
  const [geojson, setGeojson] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    api.get('/complaints/heatmap').then(res => {
      const features = res.data.map(c => ({
        type: 'Feature',
        properties: { title: c.title, status: c.status },
        geometry: { type: 'Point', coordinates: [c.location.lng, c.location.lat] }
      }));
      setGeojson({ type: 'FeatureCollection', features });
    });
  }, []);

  return (
    <MapGL {...viewport} width="100%" height="400px" onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
      <Source type="geojson" data={geojson}>
        <Layer type="circle" paint={{ 'circle-color': '#ff0000', 'circle-radius': 6 }} />
      </Source>
    </MapGL>
  );
}