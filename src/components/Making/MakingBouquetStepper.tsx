import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerType } from '../flowerImg/Flower';
import { Dropdown } from '../common/Dropdown';

const MakingBouquetStepper = ({}) => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);

  return (
    <>
      <Block>
        <span>
          <img src={`${bouquet?.img}`} style={{ width: '600px' }} />
        </span>

        <span>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
              {`${bouquet?.name}`}
            </Typography>
          </div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H7" color={palette.gray} fontWeight="medium">
              {`${bouquet?.description}`}
            </Typography>
          </div>

          <div style={{ margin: '20px' }}>
            <Dropdown />
          </div>

          <div>
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃 수량 입력
            </Typography>
            <input type="text" />
          </div>

          <div>
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              포장지 색상, 리본 색상 선택
            </Typography>
            <p>포장지 색상과 리본 색상을 선택하세요</p>
          </div>
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
