import React from 'react';
import Header from '../../components/header/Header';
import BestItemList from '../../components/buyer/BestItemList';
import CustomAndMap from '../../components/buyer/CustomAndMap';

const BuyerMain = () => {
    return (
        <div>
            <Header />
            <BestItemList />
            <CustomAndMap />
        </div>
    );
};

export default BuyerMain;