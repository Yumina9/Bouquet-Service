import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../router/Main';
import BuyerMyPage from '../router/User/BuyerMyPage';
import ShopMainPage from '../router/Shop/ShopMainPage';
import UserMain from '../router/User/UserMain';
import Confirmation from '../router/Shop/Confirmation';
import Login from '../router/Login/LoginPage';
import SignUp from '../router/Login/SignUp';
import ShopMyPage from '../router/Shop/ShopMyPage';
import FlowerMorePage from '../router/FlowerPages/FlowerMorePage';
import BouquetMorePage from '../router/BouquetPages/BouquetMorePage';
import FlowerExplanationPage from '../router/FlowerPages/FlowerExplanationPage';
import BouquetExplanationPage from '../router/BouquetPages/BouquetExplanationPage';
import BouquetMakingPage from '../router/BouquetPages/BouquetMakingPage';
import FlowerMakingPage from '../router/FlowerPages/FlowerMakingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />

        {/* shop page */}
        <Route exact path="/shop/:id" component={ShopMainPage} />

        {/* FIXME:  id 지우고 로그인된 토큰으로 본인 정보만 가져오기 */}
        <Route path="/shop/:id/mypage" component={ShopMyPage} />

        <Route exact path="/shop/:id/flowers" component={FlowerMorePage} />
        <Route exact path="/shop/:id/bouquets" component={BouquetMorePage} />
        <Route
          exact
          path="/shop/:shop_id/flower/:flower_id"
          component={FlowerExplanationPage}
        />
        <Route
          exact
          path="/shop/:shop_id/bouquet/:bouquet_id"
          component={BouquetExplanationPage}
        />
        <Route
          path="/shop/:shop_id/flower/:flower_id/making"
          component={FlowerMakingPage}
        />
        <Route
          path="/shop/:shop_id/bouquet/:bouquet_id/making"
          component={BouquetMakingPage}
        />
        <Route
          path="/shop/:shop_id/bouquet/:bouquet_id/confirmation"
          component={Confirmation}
        />
        <Route path="/usermain" component={UserMain} />
        <Route path="/buyermypage" component={BuyerMyPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
