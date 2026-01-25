'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with Next.js
const icon = L.icon({
    iconUrl: '/location-pin.svg', // We'll need to ensure this asset exists or use a default one
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

interface JobLocationMapProps {
    latitude: number;
    longitude: number;
    popupText?: string;
}

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, 13);
    }, [center, map]);
    return null;
}

const JobLocationMap: React.FC<JobLocationMapProps> = ({ latitude, longitude, popupText }) => {
    // Use a default icon if custom one fails or for simplicity, create a divIcon? 
    // For now let's assume we might not have the svg, so we can use a CDN or fallback.
    // Actually, let's construct a simple marker using L.Icon.Default if we can, but webpack issues often arise.
    // A safer bet for immediate rendering without assets is a CircleMarker or custom divIcon.

    // Let's use standard OSM tiles by default.

    useEffect(() => {
        // Fix leaflet default icon issue
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    return (
        <div className="h-[300px] w-full rounded-xl overflow-hidden z-0 relative">
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        {popupText || "Job Location"}
                    </Popup>
                </Marker>
                <MapUpdater center={[latitude, longitude]} />
            </MapContainer>
        </div>
    );
};

export default JobLocationMap;
