import React from 'react';
import { MyInfoPanel } from './Panel/MyInfoPanel';
import { FlowerListPanel } from './Panel/FlowerListPanel';
import { BouquetListPanel } from './Panel/BouquetListPanel';
import { CurrentOrderPanel } from './Panel/CurrentOrderPanel';
import { FinishOrderPanel } from './Panel/FinishOrderPanel';

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
      return <MyInfoPanel />;
    case PanelType.BOUQUET:
      return <BouquetListPanel />;
    case PanelType.FLOWER:
      return <FlowerListPanel />;
    case PanelType.CURRENT_ORDER:
      return <CurrentOrderPanel />;
    case PanelType.FINISHED_ORDER:
      return <FinishOrderPanel />;
  }
};
