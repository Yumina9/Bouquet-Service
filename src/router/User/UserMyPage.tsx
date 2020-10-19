import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import './buyerCss.css';
import axios from '../../components/login/axios';

type userInfoType ={
  id : number;
  username: string;
  firstname: string;
  email: string;
  user_phone: string;
  user_address: string;
}

const UserMyPage = () => {

  const [userInfo, setUserInfo] = useState<userInfoType>();

  useEffect(()=>{
    console.log(userInfo?.id);
    axios.get(`/user/me`).then(({data})=>{setUserInfo(data);
       console.log("유저초이스 마이페이지", userInfo?.username);
      //  console.log(id);
      });
    
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
                <td>{userInfo?.user_phone}</td>
              </tr>
              <tr>
                <th>이메일 : </th>
                <td>{userInfo?.email}</td>
              </tr>
              {/* <tr>
                <th>주소 : </th>
                <td>{userInfo?.user_address}</td>
              </tr> */}
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
