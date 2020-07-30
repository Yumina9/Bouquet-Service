import React from 'react';

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.3595704, lng: 127.105399 }} // 지도 초기 위치
      defaultZoom={15} // 지도 초기 확대 배율
    >
      <Marker 
        position={new navermaps.LatLng(37.3595704, 127.105399)}
        animation={navermaps.Animation.BOUNCE}
        onClick={() => {
          alert('여기는 네이버 입니다.')
        }}
      />
    </NaverMap>
    
  );
}

function NaverAPIMap() {
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

export default NaverAPIMap;
