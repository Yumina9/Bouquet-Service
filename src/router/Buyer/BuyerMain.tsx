import React from 'react';
import MiniHeader from '../../components/header/MiniHeader';
import MainInfo from '../../components/header/MainInfo';
import BestItemList from '../../components/buyer/BestItemList';
import CustomSelect from '../../components/buyer/CustomSelect';

const BuyerMain = () => {
  return (
    <div>
      <MiniHeader />

      <MainInfo />
      <BestItemList />
      <CustomSelect />
    </div>
  );
};

export default BuyerMain;
