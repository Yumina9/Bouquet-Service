import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Bouquet, { BouquetType } from '../../flowerImg/Bouquet';

export const BouquetListPanel = () => {
  const { id } = useParams();
  const [bouquets, setBouquets] = useState<BouquetType[]>([]);
  useEffect(() => {
    Axios.get(`/shop/${id}/bouquets`).then(({ data }) => setBouquets(data));
  }, []);

  return (
    <>
      <BouquetList>
        {bouquets.map(({ id, name, img, description }) => {
          return (
            <Bouquet id={id} name={name} img={img} description={description} />
          );
        })}
      </BouquetList>
    </>
  );
};

const BouquetList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;
