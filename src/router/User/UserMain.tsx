import React from 'react';
import MiniHeader from '../../components/header/MiniHeader';
import MainInfo from '../../components/header/MainInfo';
import BestItemList from '../../components/user/BestItemList';
import CustomSelect from '../../components/user/CustomSelect';
import CustomContainer from '../../components/user/CustomContainer';
const BuyerMain = () => {
  return (
    <div>
      <MiniHeader />

      <MainInfo />
      <BestItemList />
      <CustomContainer />
    </div>
  );
};

export default BuyerMain;
