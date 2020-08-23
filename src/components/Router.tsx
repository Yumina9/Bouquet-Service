import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SellerMain from '../router/Seller/SellerMain';
import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';
import Main from '../router/Main';
import BuyerMain from '../router/Buyer/BuyerMain';
import BuyerMyPage from '../router/Buyer/BuyerMyPage';
import FlowerExplanation from '../router/Seller/FlowerExplanation';
import BouquetExplanation from '../router/Seller/BouquetExplanation';
import Confirmation from '../router/Seller/Confirmation';
import FlowerMaking from '../router/Seller/FlowerMaking';
import BouquetMaking from '../router/Seller/BouquetMaking';
import SellerMyPage from '../router/Seller/SellerMyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/buyermain" component={BuyerMain} />
        <Route path="/buyermypage" component={BuyerMyPage} />
        <Route path="/sellermain" component={SellerMain} />
        <Route path="/flower/:id" component={FlowerExplanation} />
        <Route path="/bouquet/:id" component={BouquetExplanation} />
        <Route path="/making/flower/:id" component={FlowerMaking} />
        <Route path="/making/bouquet/:id" component={BouquetMaking} />
        <Route path="/confirmation/:id" component={Confirmation} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/seller/mypage" component={SellerMyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
