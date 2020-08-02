import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const NaverMapAPI = () => {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '500px', // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {
          alert('여기는 N서울타워입니다.');
        }}
      />
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
//   // 사용자 위치표시 좌표
//   const [userLocation, setUserLocation] = useState({
//     latitude: 37.4652876, // number 초기값은 0
//     longitude: 126.900341,
//   });
//   // 꽃다발 주변 위치 리스트
//   const [markerPositions, setMarkerPositions] = useState([
//     // 배열에 접근하는 방법 Map()
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

//   // const markerPositions = array.map((item) => {
//   //   return {item.latitude} && {item.longitude}
//   // });
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
//         // key={markerPositions.key} // 순서? 확인해야할 것
//         key={0}
//         // position={markerPositions.latitude}
//         // position={markerPositions.longitude}
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
