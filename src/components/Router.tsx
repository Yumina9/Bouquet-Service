import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SellerMain from '../router/Seller/SellerMain';
import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';
import Main from '../router/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sellermain" component={SellerMain} />
        <Route path="/login" component={Login} />
        <Route paht="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
