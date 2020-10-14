import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerDropdown } from '../Dropdown/FlowerDropdown';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import useMakingBouquetStepper from './hooks/useMakingBouquetStepper';
import { WrappingPaperDropdown } from '../Dropdown/WrappingPaperDropdown';
import { RibbonDropdown } from '../Dropdown/RibbonDropdown';
import { FlowerType } from '../flowerImg/Flower';
import { RibbonType } from '../flowerImg/Ribbon';

const MakingBouquetStepper: React.FC<BouquetType> = ({
  img,
  name,
  description,
  bouquet_paper_price,
}) => {
  const {
    amount,
    setAmount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingBouquetStepper();

  const increaseAmount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setAmount(amount + 1);
  };

  const decreaseAmount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setAmount(amount - 1);
  };

  const onFlowerDropdownChange = (flower: FlowerType) => {
    setReserve({ ...reserve, flower });
  };

  const onWrappingPaperDropdownChange = (wrappingPaper: WrappingPaperType) => {
    setReserve({ ...reserve, wrappingPaper });
  };

  const onRibbonDropdownChange = (ribbon: RibbonType) => {
    setReserve({ ...reserve, ribbon });
  };

  console.log(reserve);
  return (
    <>
      <Block>
        <span>
          <img src={`${img}`} style={{ width: '600px' }} />
        </span>

        <span>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
              {`${name}`}
            </Typography>
          </div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H7" color={palette.gray} fontWeight="medium">
              {`${description}`}
            </Typography>
          </div>
          <tbody>
            <tr>
              <th>
                <div>
                  <Typography
                    type="H6"
                    color={palette.color4}
                    fontWeight="bold"
                  >
                    꽃 선택
                  </Typography>
                </div>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <FlowerDropdown
                    onFlowerDropdownChange={onFlowerDropdownChange}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  꽃 수량 입력
                </Typography>
              </th>
              <th>
                <form>
                  <Typography type="H4" color={palette.black} fontWeight="bold">
                    {amount}
                  </Typography>
                  <button onClick={increaseAmount}>+</button>&nbsp;
                  <button onClick={decreaseAmount}>-</button>
                </form>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  포장지 선택
                </Typography>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <WrappingPaperDropdown
                    onWrappingPaperDropdownChange={
                      onWrappingPaperDropdownChange
                    }
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  리본선택
                </Typography>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <RibbonDropdown
                    onRibbonDropdownChange={onRibbonDropdownChange}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  금액
                </Typography>
              </th>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="light">
                  {resultPrice + bouquet_paper_price}원
                </Typography>
              </th>
            </tr>
          </tbody>
        </span>
      </Block>
    </>
  );
};

export default MakingBouquetStepper;

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  & > span {
    margin: 20px;
  }
  & > :first-child {
    flex: 5;
  }

  & > :last-child {
    flex: 5;
  }
`;
