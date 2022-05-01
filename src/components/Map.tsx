import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

export default function Map({ children, className }: any) {
  const position: any = [0.0236, 37.9062];

  const mapBoxToken =
    "pk.eyJ1IjoiZHJlYW1uZXJkIiwiYSI6ImNrenJkZnoxbzB1M2MzMWxnbTd1OHVmOGUifQ.rIafsHzLmqot_MysT57B3Q";

  return (
    <div>
      <MapContainer
        className={className}
        center={position}
        zoom={6}
        scrollWheelZoom={true}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Default layer">
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          {children}
        </LayersControl>
      </MapContainer>
    </div>
  );
}
