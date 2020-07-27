import React from 'react';
import Header from '../../components/header/Header';
import BestItemList from '../../components/buyer/BestItemList';
import CustomSelect from '../../components/buyer/CustomSelect';

const BuyerMain = () => {
    return (
        <div>
            <Header />
            <BestItemList />
            <CustomSelect />
        </div>
    );
};

export default BuyerMain;