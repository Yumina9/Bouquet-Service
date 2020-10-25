import { useEffect, useState } from 'react';
import axiosInstance from '../../../components/login/axios';
import { ShopType } from '../../Shop/ShopMainPage';

export default function useBouquetMorePage({ shopId }: { shopId: string }) {
  const [shop, setShop] = useState<ShopType>();

  useEffect(() => {
    axiosInstance.get(`/shop/${shopId}/`).then(({ data }) => setShop(data));
  }, [shopId]);

  return {
    shop,
  };
}
