import React from 'react';
import styled from 'styled-components';

// FLOW
export enum PanelType {
  PROFILE = 'PROFILE',
  BOUQUET = 'BOUQUET',
  FLOWER = 'FLOWER',
  CURRENT_ORDER = 'CURRENT_ORDER',
  FINISHED_ORDER = 'FINISHED_ORDER',
}

export const Panel = ({ type }: { type: PanelType }) => {
  switch (type) {
    case PanelType.PROFILE:
      return <>내 정보</>;
    case PanelType.BOUQUET:
      return (
        <>
          <h1>꽃다발 패널</h1>
        </>
      );
    case PanelType.FLOWER:
      return <>꽃</>;
    case PanelType.CURRENT_ORDER:
      return <>현재 주문 목록</>;
    case PanelType.FINISHED_ORDER:
      return <>주문 완료 목록</>;
  }
};
