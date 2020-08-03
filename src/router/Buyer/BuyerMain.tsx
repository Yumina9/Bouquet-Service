import React from 'react';
import {MiniHeader} from '../../components/header/MiniHeader';
// import Header from '../../components/header/Header';
import BestItemList from '../../components/buyer/BestItemList';
import CustomSelect from '../../components/buyer/CustomSelect';

const BuyerMain = () => {
    return (
        <div>
            <MiniHeader />
            <BestItemList />
            <CustomSelect />
        </div>
    );
};

export default BuyerMain;