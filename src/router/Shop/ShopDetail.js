import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';

const ShopDetail = () => {

  const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
      }
    })
    return (
        <div>
            <Header />
            Shop 수정페이지 입니다.
            <Link to="/mypage">뒤로가기</Link>
        </div>
    );
};

export default ShopDetail;