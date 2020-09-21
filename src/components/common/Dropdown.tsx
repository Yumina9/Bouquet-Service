import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import axios from 'axios';
import { FlowerType } from '../flowerImg/Flower';
import { BouquetType } from '../flowerImg/Bouquet';
import { useParams } from 'react-router-dom';
import Button from './Button';

export const Dropdown = () => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<BouquetType>();
  const [flowers, setFlowers] = useState<FlowerType[]>([]);

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
      <Menu>
        <div className="dropdown">
          <button className="dropdown-button">
            꽃다발을 꾸미고 싶은 꽃을 선택하세요
          </button>
          <div className="dropdown-content">
            {flowers.map(({ name }) => {
              return (
                <>
                  <span
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      border: '0',
                      outline: '0',
                    }}
                  >
                    <Button color="black" bgColor="white">
                      {name}
                    </Button>
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </Menu>
    </>
  );
};

const Menu = styled.div`
  .dropdown-button {
    background-color: ${palette.color6};
    padding: 8px;
    font-size: 15px;
    border: none;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${palette.white};
    min-width: 70px;
    padding: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    color: black;
    padding: 8px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: ${palette.color3};
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropdown-button {
    background-color: ${palette.color7};
  }
`;
