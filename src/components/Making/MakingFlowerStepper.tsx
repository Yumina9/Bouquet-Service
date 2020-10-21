import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerType } from '../flowerImg/Flower';
import useMakingFlowerStepper from './hooks/useMakingFlowerStepper';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import { RibbonType } from '../flowerImg/Ribbon';
import { BouquetDropdown } from '../Dropdown/BouquetDropdown';
import { WrappingPaperDropdown } from '../Dropdown/WrappingPaperDropdown';
import { RibbonDropdown } from '../Dropdown/RibbonDropdown';
import { useDispatch } from 'react-redux';
import { insertOrderData } from '../../modules/order';

const MakingFlowerStepper: React.FC<FlowerType> = ({
  img,
  name,
  description,
  price,
}) => {
  const { id } = useParams<{ id: string }>();
  const [bouquet, setBouquet] = useState<BouquetType>();
  const {
    flower_count,
    setFlowerCount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingFlowerStepper();

  const increaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count + 1);
  };

  const decreaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count - 1);
  };

  const onBouquetDropdownChange = (bouquet: BouquetType) => {
    setReserve({ ...reserve, bouquet });
  };

  const onWrappingPaperDropdownChange = (wrappingPaper: WrappingPaperType) => {
    setReserve({ ...reserve, wrappingPaper });
  };

  const onRibbonDropdownChange = (ribbon: RibbonType) => {
    setReserve({ ...reserve, ribbon });
  };

  const dispatch = useDispatch();

  // dispatch(
  //   insertOrderData({
  //     bouquet: reserve?.bouquet?.name,
  //     flower: undefined,
  //     flower_count: flower_count,
  //     wrappingPaper: reserve?.wrappingPaper?.name,
  //     ribbon: reserve?.ribbon?.name,
  //     resultPrice: resultPrice + price * flower_count,
  //   }),
  // );

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
                    꽃다발 선택
                  </Typography>
                </div>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <BouquetDropdown
                    onBouquetDropdownChange={onBouquetDropdownChange}
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
                    {flower_count}
                  </Typography>
                  <button onClick={increaseFlowerCount}>+</button>&nbsp;
                  <button onClick={decreaseFlowerCount}>-</button>
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
                  {resultPrice + price * flower_count}원
                </Typography>
              </th>
            </tr>
          </tbody>
        </span>
      </Block>
    </>
  );
};

export default MakingFlowerStepper;

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
