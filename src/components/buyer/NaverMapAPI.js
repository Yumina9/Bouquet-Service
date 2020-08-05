import React, { useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
  const navermaps = window.naver.maps;

  // 사용자 위치표시 좌표
  const [userLocation, setUserLocation] = useState({
    lat: 37.4659376,
    lng: 126.9047024,
  });
  // 꽃다발 주변 위치 리스트
  const [markerPositions, setMarkerPositions] = useState([
    {
      //   title: '영플라워',
      //해당하는 위치 위도/경도를 배열로 나열하면 여러개가 나온다.
      lat: 37.4659376,
      lng: 126.9047024,
      // 영플라워
    },
    {
      // title: '물고기파는꽃집',
      lat: 37.4661635,
      lng: 126.9020374,
      // 물고기파는꽃집 37.4661635!4d126.9020374
    },
    {
      // title: '아미플로라',
      lat: 37.4630783,
      lng: 126.9059344,
      // 아미플로라 37.4630783!4d126.9059344
    },
    {
      // title: '꽃나드리',
      lat: 37.4612126,
      lng: 126.8990913,
      // 꽃나드리 37.4612126!4d126.8990913
    },
  ]);
  // 마커포지션 컴포넌트 배열로 변환하기
  const markerPositionList = markerPositions.map((markerPosition, index) => (
    <Marker
      key={index}
      position={markerPosition}
      animation={0} // 0: 기본 표현, 1:방방뛰는 마커, 2: 위에서 내려찍는 마커
      onClick={() => {
        alert(index);
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
      defaultCenter={userLocation} // 지도 초기 위치
      defaultZoom={15} // 지도 초기 확대 배율
    >
      {/* 마커 배열 생성 div */}
      <div>{markerPositionList}</div>
    </NaverMap>
  );
}

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
