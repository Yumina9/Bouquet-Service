import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Circle,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

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
    sellerName: '가나다',
    lat: 37.4659376,
    lng: 126.9047024,
    // 영플라워
  },
  {
    title: '물고기파는꽃집',
    sellerName: '라마바',
    lat: 37.4661635,
    lng: 126.9020374,
    // 물고기파는꽃집 37.4661635!4d126.9020374
  },
  {
    title: '아미플로라',
    sellerName: '사아자',
    lat: 37.4630783,
    lng: 126.9059344,
    // 아미플로라 37.4630783!4d126.9059344
  },
  {
    title: '꽃나드리',
    sellerName: '차타카',
    lat: 37.4612126,
    lng: 126.8990913,
    // 꽃나드리 37.4612126!4d126.8990913
  },
];
const markerPositionList = positionList.map((item) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <Marker
      key={item.id}
      position={item}
      onClick={(e) => {
        // alert('Shop : ' + item.title + 'Florist : ' + item.sellerName); // 경고창으로 확인 완료
        onClick();
      }}
      onMouseOver={(e) => {
        console.log(item.title); //마우스 오버시 인포박스를 보여주고 싶은데 어떻게?
      }}
      onMouseOut={(e) => {
        console.log('OK'); //마우스 아웃시 인포박스가 사라지기를
      }}
    />
  );
});

const onLoad = (infoWindow) => {
  console.log('infoWindow: ', infoWindow);
};
const options = { closeBoxURL: '', enableEventPropagation: true };

const circleOptions = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 70,
  zIndex: 1,
};
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

{
  /* <InfoWindow onLoad={onLoad} position={center}> //  마우스 오버시 보여주고 사라지는 것을 보여주고 싶은데...?
          <div style={divStyle}>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow> */
}
function GoogleApiMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAZsf_zeX02qdI-TRq2Vch0PXcRwHgT_90">
      <GoogleMap
        id="InfoBox-example"
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
      >
        <Circle
          // optional
          onLoad={onLoad}
          // required
          center={center}
          // required
          options={circleOptions}
        />

        {markerPositionList}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleApiMap);
