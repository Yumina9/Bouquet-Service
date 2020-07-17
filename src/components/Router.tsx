import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import SellerMain from '../router/Seller/SellerMain';
import Login from '../router/Login/Login';
import SignUp from '../router/Login/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/sellermain" component={SellerMain} />
        <Route path="/login" component={Login} />
        <Route paht="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
