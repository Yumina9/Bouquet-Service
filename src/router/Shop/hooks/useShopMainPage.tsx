import { useEffect, useState } from 'react';
import axiosInstance from '../../../components/login/axios';
import { ShopType } from '../ShopMainPage';

export default function useShopMainPage({ id }: { id: string }) {
  const [shop, setShop] = useState<ShopType>();

  useEffect(() => {
    axiosInstance.get(`/shop/${id}/`).then(function (response) {
      setShop(response.data);
    });
  }, []);

  return {
    shop,
  };
}
