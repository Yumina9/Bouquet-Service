import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SellerMain from '../router/Seller/SellerMain';
import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';
import Main from '../router/Main';
import BuyerMain from '../router/Buyer/BuyerMain';
import BuyerMyPage from '../router/Buyer/BuyerMyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/buyermain" component={BuyerMain} />
        <Route path="/buyermypage" component={BuyerMyPage} />
        <Route path="/sellermain" component={SellerMain} />
        <Route path="/login" component={Login} />
        <Route paht="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
