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
import ShopMyPage from '../router/Shop/ShopMyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shop/:id" component={ShopMainPage} />
        <Route path="/shop/:id/mypage" component={ShopMyPage} />
        <Route exact path="/shop/:id/flowers" component={FlowerMore} />
        <Route exact path="/shop/:id/bouquets" component={BouquetMore} />
        <Route
          exact
          path="/shop/:shop_id/flower/:flower_id"
          component={FlowerExplanation}
        />
        <Route
          exact
          path="/shop/:shop_id/bouquet/:bouquet_id"
          component={BouquetExplanation}
        />
        <Route
          path="/shop/:shop_id/flower/:id/making"
          component={FlowerMaking}
        />
        <Route
          path="/shop/:shop_id/bouquet/:bouquet_id/making"
          component={BouquetMaking}
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
