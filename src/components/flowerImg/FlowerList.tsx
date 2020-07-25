import React from 'react';
import { BouquetDummy } from '../../DummyData';
import { BouquetType } from '../../DummyData';
import Bouquet from './Bouquet';

const FlowerList = () => {
  return (
    <>
      {BouquetDummy.map((bouquet: BouquetType) => (
        <Bouquet id={bouquet.id} img={bouquet.img} title={bouquet.title} />
      ))}
    </>
  );
};

export default FlowerList;
