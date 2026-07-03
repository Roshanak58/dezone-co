"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});
const icon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  const position = [35.75933, 51.24458];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={position}
        icon={icon}
        eventHandlers={{
          click: () => {
            window.open(
              `https://www.google.com/maps?q=${position[0]},${position[1]}`,
              "_blank"
            );
          },
        }}
      >
        <Popup className="mapFont">
          <div style={{ fontFamily: "B Koodak", fontWeight: "bold" }}>شرکت مهندسی دزون</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
