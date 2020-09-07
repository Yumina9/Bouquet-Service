import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import palette from '../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import { BouquetType } from '../flowerImg/FlowerList';
import Typography from '../common/Typography';

const MakingBouquetStepper = ({}) => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<BouquetType>();
  const [flowers, setFlowers] = useState<BouquetType[]>([]);

  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);

  console.log(bouquet);

  useEffect(() => {
    axios.get('/flowers/').then(({ data }) => setFlowers(data));
  }, []);
  console.log(flowers);

  return (
    <>
      <Block>
        <span>
          <img src={`${bouquet?.img}`} style={{ width: '400px' }} />
          <Typography type="H5" color={palette.color4} fontWeight="middle">
            {`${bouquet?.name}`}
          </Typography>
        </span>
        <span>
          <div>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
              세부사항
            </Typography>
          </div>
          <div>
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃 선택
            </Typography>
            <p>꽃을 선택하세요</p>
            {flowers.map(({ img }) => {
              return (
                <>
                  <img
                    src={`${img}`}
                    style={{ width: '100px', height: '100%' }}
                  />
                </>
              );
            })}
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
