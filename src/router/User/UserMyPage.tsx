import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import './buyerCss.css';
import Grid from '@material-ui/core/Grid';
import axios from '../../components/login/axios';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserToken } from '../../components/login/authUtils';

type userInfoType ={
  id : number;
  username: string;
  firstname: string;
  email: string;
}

const UserMyPage = () => {

  const [userInfo, setUserInfo] = useState<userInfoType>();

  useEffect(()=>{
    axios.get(`/user/users/1`).then(({data})=>setUserInfo(data));
  },[])
  
  

  return (
    <div>
      <MiniHeader />
      <BuyerInfo>
        <UserImage src={require('../../image/user.png')} />
        <UserInfomation>
        
          <table>
            <tbody>
              <tr>
                
                <th>성명 : </th>
                <td>{userInfo?.username}</td>
                
              </tr>
              <tr>
                <th>전화 : </th>
                <td>010 - 1234 - 5678</td>
              </tr>
              <tr>
                <th>이메일 : </th>
                <td>{userInfo?.email}</td>
              </tr>
              <tr>
                <th>주소 : </th>
                <td>서울시 서울구 서울동 123번길 45-6, 서울빌라 506동 301호</td>
              </tr>
            </tbody>
          </table>
        </UserInfomation>
      </BuyerInfo>
      <DeliveryList>
        <table className="deliveryCaption">
          <caption>배송목록</caption>
          <thead>
            <tr>
              <th>NO</th>
              <th>content</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>꽃다말 외 4</td>
              <td>2020. 04. 20</td>
            </tr>
            <tr>
              <td>1</td>
              <td>꽃다말 외 4</td>
              <td>2020. 04. 20</td>
            </tr>
            <tr>
              <td>1</td>
              <td>꽃다말 외 4</td>
              <td>2020. 04. 20</td>
            </tr>
          </tbody>
        </table>
      </DeliveryList>
    </div>
  );
};

const BuyerInfo = styled.div`
  background: #f1f2f3;
  max-width: 1080px;
  display: flex;
  margin: 100px auto;
  padding: 50px;
`;
const UserImage = styled.img`
  width: 200px;
  height: 200px;
  margin: auto 0;
  margin-right: 100px;
`;
const UserInfomation = styled.div`
  padding: 30px 0;
`;
const DeliveryList = styled.div`
  background-color: #f1f2f3;
  max-width: 1080px;
  display: flex;
  margin: 100px auto;
  padding: 50px;
`;
export default UserMyPage;
