import React from 'react';
import Header from '../../components/header/Header';
import MainSlider from '../../components/header/MainSlider';
import BestItemList from '../../components/user/BestItemList';
import CustomSelect from '../../components/user/CustomSelect';
import CustomContainer from '../../components/user/CustomContainer';
const BuyerMain = () => {
  return (
    <div>
      <Header />

      <MainSlider />
      <BestItemList />
      <CustomContainer />
    </div>
  );
};

export default BuyerMain;
