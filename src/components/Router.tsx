import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopMainPage from '../router/Seller/Page/ShopMainPage';
import SellerMyPage from '../router/Seller/Page/SellerMyPage';

import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';
import Main from '../router/Main';
import BuyerMain from '../router/Buyer/BuyerMain';
import BuyerMyPage from '../router/Buyer/BuyerMyPage';
import FlowerExplanation from '../router/Buyer/FlowerExplanation';
import BouquetExplanation from '../router/Buyer/BouquetExplanation';
import Confirmation from '../router/Buyer/Confirmation';
import FlowerMaking from '../router/Buyer/FlowerMaking';
import BouquetMaking from '../router/Buyer/BouquetMaking';
import FlowerMore from '../router/Buyer/FlowerMore';
import BouquetMore from '../router/Buyer/BouquetMore';
import BouquetAdd from '../router/Seller/BouquetAdd';
import FlowerAdd from '../router/Seller/FlowerAdd';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shop/:id" component={ShopMainPage} />
        <Route path="/shop/:id/flowers" component={FlowerMore} />
        <Route path="/shop/:id/bouquets" component={BouquetMore} />
        <Route path="/buyermain" component={BuyerMain} />
        <Route path="/buyermypage" component={BuyerMyPage} />
        <Route path="/flower/:id" component={FlowerExplanation} />
        <Route path="/bouquet/:id" component={BouquetExplanation} />
        <Route path="/making/flower/:id" component={FlowerMaking} />
        <Route path="/making/bouquet/:id" component={BouquetMaking} />
        <Route path="/confirmation/:id" component={Confirmation} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/seller/mypage" component={SellerMyPage} />
        <Route path="/bouquetadd" component={BouquetAdd} />
        <Route path="/floweradd" component={FlowerAdd} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
