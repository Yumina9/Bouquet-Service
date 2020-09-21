import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../router/Main';
import FlowerMore from '../router/FlowerPages/FlowerMore';
import BuyerMyPage from '../router/User/BuyerMyPage';
import ShopMainPage from '../router/Shop/ShopMainPage';
import BouquetMore from '../router/BouquetPages/BouquetMore';
import UserMain from '../router/User/UserMain';
import FlowerExplanation from '../router/FlowerPages/FlowerExplanation';
import BouquetExplanation from '../router/BouquetPages/BouquetExplanation';
import FlowerMaking from '../router/FlowerPages/FlowerMaking';
import BouquetMaking from '../router/BouquetPages/BouquetMaking';
import Confirmation from '../router/Shop/Confirmation';
import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';
import SellerMyPage from '../router/Shop/ShopMyPage';
import BouquetAdd from '../router/BouquetPages/BouquetAdd';
import FlowerAdd from '../router/FlowerPages/FlowerAdd';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shop/:id" component={ShopMainPage} />
        <Route path="/shop/:id/flowers" component={FlowerMore} />
        <Route path="/shop/:id/bouquets" component={BouquetMore} />
        <Route path="/usermain" component={UserMain} />
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
