import React from 'react';
import { GoogleMap, LoadScript, InfoBox, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.4652876,
  lng: 126.900341,
};
const positionList = [
  {
    title: '영플라워',
    lat: 37.4659376,
    lng: 126.9047024,
    // 영플라워
  },
  {
    title: '물고기파는꽃집',
    lat: 37.4661635,
    lng: 126.9020374,
    // 물고기파는꽃집 37.4661635!4d126.9020374
  },
  {
    title: '아미플로라',
    lat: 37.4630783,
    lng: 126.9059344,
    // 아미플로라 37.4630783!4d126.9059344
  },
  {
    title: '꽃나드리',
    lat: 37.4612126,
    lng: 126.8990913,
    // 꽃나드리 37.4612126!4d126.8990913
  },
];
const markerPositionList = positionList.map((item) => {
  return (
    <Marker
      key={item.id}
      position={item}
      onClick={() => {
        alert(item.title);
      }}
    />
  );
});
const onLoad = (marker) => {
  console.log('marker: ', marker);
};
const options = { closeBoxURL: '', enableEventPropagation: true };
function GoogleApiMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAZsf_zeX02qdI-TRq2Vch0PXcRwHgT_90">
      <GoogleMap
        id="InfoBox-example"
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
      >
        <InfoBox onLoad={onLoad} options={options} position={center}>
          <div
            style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}
          >
            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
              현재 지도 중심위치
            </div>
          </div>
        </InfoBox>
        {markerPositionList}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleApiMap);
