import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../router/Main';
import UserMyPage from '../router/User/UserMyPage';
import ShopMainPage from '../router/Shop/ShopMainPage';
import UserMain from '../router/User/UserMain';
import OrderConfirmPage from '../router/Shop/OrderConfirmPage';
import SignUp from '../router/Login/SignUp';
import Logout from '../components/login/Logout';
import ShopMyPage from '../router/Shop/ShopMyPage';
import FlowerMorePage from '../router/FlowerPages/FlowerMorePage';
import BouquetMorePage from '../router/BouquetPages/BouquetMorePage';
import FlowerExplanationPage from '../router/FlowerPages/FlowerExplanationPage';
import BouquetExplanationPage from '../router/BouquetPages/BouquetExplanationPage';
import BouquetMakingPage from '../router/BouquetPages/BouquetMakingPage';
import FlowerMakingPage from '../router/FlowerPages/FlowerMakingPage';
import LoginPage from '../router/Login/LoginPage';
import ShopMorePage from '../router/Shop/ShopMorePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shops/" component={ShopMorePage} />
        <Route path="/mypage" component={ShopMyPage} />
        <Route exact path="/shop/:id/" component={ShopMainPage} />
        <Route exact path="/shop/:id/flowers" component={FlowerMorePage} />
        <Route exact path="/shop/:id/bouquets" component={BouquetMorePage} />
        <Route exact path="/shop/:shop_id/flower/:flower_id/" component={FlowerExplanationPage} />
        <Route exact path="/shop/:shop_id/bouquet/:bouquet_id/" component={BouquetExplanationPage} />
        <Route path="/shop/:shop_id/flower/:flower_id/making" component={FlowerMakingPage} />
        <Route path="/shop/:shop_id/bouquet/:bouquet_id/making" component={BouquetMakingPage} />
        <Route path="/shop/:shop_id/orderConfirm" component={OrderConfirmPage} />
        <Route path="/usermain" component={UserMain} />
        <Route path="/usermypage" component={UserMyPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
