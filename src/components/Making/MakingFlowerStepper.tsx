import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerType } from '../flowerImg/Flower';

const MakingFlowerStepper: React.FC<FlowerType> = ({ img, name }) => {
  const { id } = useParams<{ id: string }>();
  const [bouquets, setBouquets] = useState<BouquetType[]>([]);

  useEffect(() => {
    axios.get('/bouquets/').then(({ data }) => setBouquets(data));
  }, []);

  return (
    <>
      <Block>
        <span>
          <img src={`${img}`} style={{ width: '400px' }} />
          <Typography type="H5" color={palette.color4} fontWeight="middle">
            {`${name}`}
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
              꽃다발 선택
            </Typography>
            <p>꽃다발을 선택하세요</p>
            {bouquets.map(({ img }) => {
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
