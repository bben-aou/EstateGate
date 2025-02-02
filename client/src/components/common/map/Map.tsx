import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IconType } from 'react-icons';
import ReactDOMServer from 'react-dom/server';

type PredefinedMarkerStyle = 
  | 'default'
  | 'big-blue'
  | 'red-dot'
  | 'green-star'
  | 'purple-pin'
  | 'orange-flag';

type CustomMarkerStyle = {
  color?: string;
  scale?: number;
  customElement?: string;
  svgUrl?: string;
  icon?: IconType;
  iconColor?: string;
  iconSize?: number;
};

type TMap = {
  containerClassName?: string;
  markerLngLat?: [number, number];
  markerStyle?: PredefinedMarkerStyle | CustomMarkerStyle;
  scrollZoom?: boolean;
  showZoomControls?: boolean;
};

const predefinedStyles: Record<PredefinedMarkerStyle, CustomMarkerStyle> = {
  'default': {},
  'big-blue': { color: '#0000FF', scale: 1.5 },
  'red-dot': { customElement: '<div style="width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>' },
  'green-star': { svgUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='green'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E" },
  'purple-pin': { customElement: '<div style="width: 30px; height: 30px; background-color: purple; border-radius: 50% 50% 50% 0; transform: rotate(-45deg);"></div>' },
  'orange-flag': { customElement: '<div style="width: 30px; height: 20px; background-color: orange; position: relative;"><div style="position: absolute; bottom: -10px; left: 0; width: 2px; height: 20px; background-color: black;"></div></div>' },
};

const Map: React.FC<TMap> = (props) => {
  const { 
    containerClassName, 
    markerLngLat, 
    markerStyle = 'default',
    scrollZoom = true,
    showZoomControls = false
  } = props;
  
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const accessToken = import.meta.env.VITE_MAP_BOX_API_KEY as string;
    if (!accessToken) {
      console.error('Mapbox access token is not defined');
      return;
    }

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: markerLngLat || [-74.5, 40],
      zoom: 9,
      scrollZoom: scrollZoom 
    });

    mapRef.current = map;

    if (showZoomControls) {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    map.on('load', () => {
      if (markerLngLat) {
        const markerOptions: mapboxgl.MarkerOptions = {};

        const style = typeof markerStyle === 'string' ? predefinedStyles[markerStyle] : markerStyle;

        if (style.color) {
          markerOptions.color = style.color;
        }
        if (style.scale) {
          markerOptions.scale = style.scale;
        }
        if (style.customElement) {
          const el = document.createElement('div');
          el.innerHTML = style.customElement;
          markerOptions.element = el.firstChild as HTMLElement;
        } else if (style.svgUrl) {
          const el = document.createElement('div');
          el.style.backgroundImage = `url(${style.svgUrl})`;
          el.style.width = '32px';
          el.style.height = '32px';
          el.style.backgroundSize = '100%';
          markerOptions.element = el;
        } else if (style.icon) {
          const Icon = style.icon;
          const iconHtml = ReactDOMServer.renderToString(
            <Icon 
              color={style.iconColor || 'currentColor'} 
              size={style.iconSize || 24} 
            />
          );
          const el = document.createElement('div');
          el.innerHTML = iconHtml;
          markerOptions.element = el.firstChild as HTMLElement;
        }

        new mapboxgl.Marker(markerOptions)
          .setLngLat(markerLngLat)
          .addTo(map);
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [markerLngLat, markerStyle, scrollZoom, showZoomControls]);

  return (
    <div 
      id='map-container' 
      ref={mapContainerRef} 
      style={{ borderRadius: '8px', height: '100%', width: '100%' }} 
      className={`${containerClassName} relative`}
    />
  );
};

export default Map;