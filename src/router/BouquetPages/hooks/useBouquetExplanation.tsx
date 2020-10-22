import axiosInstance from '../../../components/login/axios';
import { BouquetType } from '../../../components/flowerImg/Bouquet';
import { useEffect, useState } from 'react';

export default function useBouquetExplanation(bouquetId: string) {
  const [bouquet, setBouquet] = useState<BouquetType>();

  // bouquet을 조회한다.
  useEffect(() => {
    axiosInstance
      .get(`/bouquets/${bouquetId}`)
      .then(({ data }) => setBouquet(data));
  }, []);

  return {
    bouquet,
  };
}
