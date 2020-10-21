import axiosInstance from '../../../components/login/axios';
import { BouquetType } from '../../../components/flowerImg/Bouquet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useBouquetMakingPage() {
  const { shop_id, bouquet_id: bouquetId } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();
  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    axiosInstance
      .get(`/bouquets/${bouquetId}`)
      .then(({ data }) => setBouquet(data));
  }, []);

  return { shop_id, bouquetId, bouquet };
}
