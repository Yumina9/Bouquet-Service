import React from 'react';
import { MyInfoPanel } from './Panel/MyInfoPanel';
import { FlowerListPanel } from './Panel/FlowerListPanel';
import { BouquetListPanel } from './Panel/BouquetListPanel';
// import { CurrentOrderPanel } from './Panel/CurrentOrderPanel';
import { FinishOrderPanel } from './Panel/FinishOrderPanel';
import { BouquetAddPanel } from './Panel/BouquetAddPanel';
import { FlowerAddPanel } from './Panel/FlowerAddPanel';

// FLOW
export enum PanelType {
  PROFILE = 'PROFILE',
  BOUQUET = 'BOUQUET',
  FLOWER = 'FLOWER',
  ADDBOUQUET = 'ADDBOUQUET',
  ADDFLOWER = 'ADDFLOWER',
  FINISHED_ORDER = 'FINISHED_ORDER',
}

export const Panel = ({ type }: { type: PanelType }) => {
  switch (type) {
    case PanelType.PROFILE:
      return <MyInfoPanel />;
    case PanelType.BOUQUET:
      return <BouquetListPanel />;
    case PanelType.FLOWER:
      return <FlowerListPanel />;
    case PanelType.ADDBOUQUET:
      return <BouquetAddPanel />;
    case PanelType.ADDFLOWER:
      return <FlowerAddPanel />;
    case PanelType.FINISHED_ORDER:
      return <FinishOrderPanel />;
  }
};
