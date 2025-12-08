import { useEffect, useRef, useState } from 'react';

// Make L available in the global scope
declare const L: any;

import type { Project } from '../types';

export function useLeafletMap(mapContainerRef: React.RefObject<HTMLDivElement | null>, showAbout: boolean, selectedProject: Project | null) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapInstanceRef = useRef<any>(null);
  const [mapStats, setMapStats] = useState({ lat: 0, lng: 0, zoom: 13 });

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.async = true;
    script.onload = () => setIsMapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !mapContainerRef.current) return;
    if (mapInstanceRef.current) {
        // Update map opacity without re-initializing
        const newOpacity = selectedProject || showAbout ? 0.3 : 0.85;
        if (mapContainerRef.current) {
            mapContainerRef.current.style.opacity = newOpacity.toString();
        }
        return;
    };


    const initialLat = 25.0330;
    const initialLng = 121.5654;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLng],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      subdomains: 'abcd'
    }).addTo(map);

    const icon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color: #4ade80; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #4ade80; animation: pulse 2s infinite;'></div>",
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    L.marker([initialLat, initialLng], { icon: icon }).addTo(map);

    const updateStats = () => {
      const center = map.getCenter();
      setMapStats({
        lat: center.lat.toFixed(5),
        lng: center.lng.toFixed(5),
        zoom: map.getZoom().toFixed(1)
      });
    };
    
    updateStats();
    map.on('move', updateStats);
    map.on('zoom', updateStats);
    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isMapLoaded, mapContainerRef, showAbout, selectedProject]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
        70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
        100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
      }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => {
        document.head.removeChild(style)
    };
  }, []);

  return { isMapLoaded, mapStats };
}