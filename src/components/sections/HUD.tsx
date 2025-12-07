
import { Globe, MapPin, Scan } from 'lucide-react';

interface HUDProps {
  mapStats: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

export default function HUD({ mapStats }: HUDProps) {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block font-mono text-xs text-orange-500 tracking-widest bg-black/70 p-2 backdrop-blur-md border-l-2 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Globe size={12} className="animate-spin-slow" />
          <span>LAT: {mapStats.lat}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} />
          <span>LNG: {mapStats.lng}</span>
        </div>
        <div className="flex items-center gap-2">
          <Scan size={12} />
          <span>ZOOM: {mapStats.zoom}</span>
        </div>
      </div>
    </div>
  );
}
