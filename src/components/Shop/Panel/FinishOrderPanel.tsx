import React from 'react';
import styled from 'styled-components';
import { PanelBlock } from '../../../lib/styles/styled';
import { PanelForm } from '../PanelForm';

export const FinishOrderPanel = () => {
  return (
    <>
      <PanelBlock>
        <PanelForm title="주문완료 목록">주문완료</PanelForm>
      </PanelBlock>
    </>
  );
};
