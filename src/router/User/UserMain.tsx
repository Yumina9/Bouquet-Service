import React from 'react';
import MiniHeader from '../../components/header/MiniHeader';
import MainSlider from '../../components/header/MainSlider';
import BestItemList from '../../components/user/BestItemList';
import CustomSelect from '../../components/user/CustomSelect';
import CustomContainer from '../../components/user/CustomContainer';
const BuyerMain = () => {
  return (
    <div>
      <MiniHeader />

      <MainSlider />
      <BestItemList />
      <CustomContainer />
    </div>
  );
};

export default BuyerMain;
