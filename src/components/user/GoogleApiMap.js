import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import styled from 'styled-components';

const GoogleApiMap = () => {
  //Dynamically showing marker using Geolocation API
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };
  const CenterPoint = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    z-index: 2;
    font-size: 2rem;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });
  // 마커정보 보여주기/사라지기
  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
  };
  // 지도 스타일
  const mapStyles = {
    height: '500px',
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  // 지도 센터
  const defaultCenter = {
    lat: 37.4652876,
    lng: 126.900341,
  };
  // 마커 리스트
  const locations = [
    {
      name: '영플라워',
      sellername: '가나다',
      location: {
        lat: 37.4659376,
        lng: 126.9047024,
      },
      // 영플라워
    },
    {
      name: '물고기파는꽃집',
      sellername: '라마바',
      location: {
        lat: 37.4661635,
        lng: 126.9020374,
      },
      // 물고기파는꽃집 37.4661635!4d126.9020374
    },
    {
      name: '아미플로라',
      sellername: '사아자',
      location: {
        lat: 37.4630783,
        lng: 126.9059344,
      },
      // 아미플로라 37.4630783!4d126.9059344
    },
    {
      name: '꽃나드리',
      sellername: '자차카',
      location: {
        lat: 37.4612126,
        lng: 126.8990913,
      },
      // 꽃나드리 37.4612126!4d126.8990913
    },
  ];
  const mapStyle = {
    width: '100%',
  };
  return (
    <div style={mapStyle}>
      <LoadScript googleMapsApiKey="AIzaSyAZsf_zeX02qdI-TRq2Vch0PXcRwHgT_90">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={currentPosition}
        >
          <CenterPoint />
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                onClick={() => onSelect(item)}
              />
            );
          })}
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              {/* 따로 값을 줄 경우 나오지 않아서 하나에 다 넣은 상태 */}
              <div>
                Shop : {selected.name}
                <br />
                Florist : {selected.sellername}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleApiMap;
