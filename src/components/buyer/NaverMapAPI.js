import React, { useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const NaverMapAPI = () => {
  const navermaps = window.naver.maps;
  // const userLocation = window.naver.maps.LatLng(
  //   position.coords.latitude,
  //   position.coords.longitude
  // );
  // console.log(userLocation);

  // 위치 추적
  // navigator.geolocation.getCurrentPosition(
  //   function (position) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     console.log(latitude);
  //     console.log(longitude);
  //   },
  //   function success(position) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );

  // 사용자 위치표시 좌표
  const [userLocation, setUserLocation] = useState({
    // LatLng: (37.3595704, 127.105399),
    // LatLng: 0,
    lat: 37.4652876,
    lng: 126.900341,
  });
  // 꽃다발 주변 위치 리스트
  const [markerPositions, setMarkerPositions] = useState([
    {
      //해당하는 위치 위도/경도를 배열로 나열하면 여러개가 나온다.
      lat: 37.4659376,
      lng: 126.9047024,
      // 영플라워
    },
    {
      lat: 37.4661635,
      lng: 126.9020374,
      // 물고기파는꽃집 37.4661635!4d126.9020374
    },
    {
      lat: 37.4630783,
      lng: 126.9059344,
      // 아미플로라 37.4630783!4d126.9059344
    },
    {
      lat: 37.4612126,
      lng: 126.8990913,
      // 꽃나드리 37.4612126!4d126.8990913
    },
  ]);

  // 마커포지션 컴포넌트 배열로 변환하기
  const markerPositionList = markerPositions.map((markerPosition) => (
    <Marker
      position={markerPosition}
      animation={0} // 0: 기본 표현, 1:방방뛰는 마커, 2: 위에서 내려찍는 마커
      onClick={() => {
        alert('여기는 네이버 입니다.');
      }}
    />
  ));
  return (
    <NaverMap
      id="maps-examples-marker"
      style={{
        width: '100%',
        height: '500px',
      }}
      defaultCenter={userLocation}
      // defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      // defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
      defaultZoom={15}
      default
    >
      <div>{markerPositionList}</div>
    </NaverMap>
  );
};
function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'viyk1mmx53'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;

// // import React from 'react';
// import React, { useState } from 'react';
// import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기
// // import useGeolocation from 'react-hook-geolocation';

// function NaverMapAPI() {
//   const navermaps = window.naver.maps;

//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;
//       console.log('위도 : ' + latitude);
//       console.log('경도 : ' + longitude);
//       console.log('First Location', position.coords);
//     },
//     function (error) {
//       console.log(error);
//     }
//   );
// 사용자 위치표시 좌표
//   const [userLocation, setUserLocation] = useState({
//     latitude: 37.4652876, // number 초기값은 0
//     longitude: 126.900341,
//   });
// 꽃다발 주변 위치 리스트
//   const [markerPositions, setMarkerPositions] = useState([
// 배열에 접근하는 방법 Map()
//     {
//       key: 0,
//       latitude: 37.3633324,
//       longitude: 129.1054988,
//     },
//     {
//       key: 1,
//       latitude: 37.3632916,
//       longitude: 129.1085015,
//     },
//     {
//       key: 2,
//       latitude: 37.3632507,
//       longitude: 129.1115043,
//     },
//   ]);

// const markerPositions = array.map((item) => {
//   return {item.latitude} && {item.longitude}
// });
//   return (
//     <NaverMap
//       id="naver-map"
//       style={{
//         width: '100%',
//         height: '600px',
//       }}
//       zoom="16"
//       defaultCenter={userLocation}
//     >
//       <Marker
// key={markerPositions.key} // 순서? 확인해야할 것
//         key={0}
// position={markerPositions.latitude}
// position={markerPositions.longitude}
//         position={(37.3633324, 129.1054988)}
//         animation={1} // 0~2까지 애니메이션이 존재
//       />
//     </NaverMap>
//   );
// }

// function NaverAPIMap() {
//   return (
//     <RenderAfterNavermapsLoaded
//       ncpClientId={'viyk1mmx53'} // 자신의 네이버 계정에서 발급받은 Client ID
//       error={<p>Maps Load Error</p>}
//       loading={<p>Maps Loading...</p>}
//     >
//       <NaverMapAPI />
//     </RenderAfterNavermapsLoaded>
//   );
// }

// export default NaverAPIMap;
