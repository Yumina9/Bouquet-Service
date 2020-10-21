import useModal from 'antd/lib/modal/useModal';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BouquetType } from '../../../components/flowerImg/Bouquet';

export default function useBouquetMakingPage() {
  const { shop_id, bouquet_id: bouquetId } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();
  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    Axios.get(`/bouquets/${bouquetId}`).then(({ data }) => setBouquet(data));
  }, []);

  return { shop_id, bouquetId, bouquet };
}
