import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlowerType } from '../../../components/flowerImg/Flower';

export default function useFlowerMakingPage() {
  const { shop_id: shopId, flower_id: flowerId } = useParams<{
    shop_id: string;
    flower_id: string;
  }>();
  const [flower, setFlower] = useState<FlowerType>();

  useEffect(() => {
    axios.get(`/flowers/${flowerId}`).then(({ data }) => setFlower(data)); // setState -> state 변경 -> rerender -> 데이터가 반영된 새로운 화면이 그려진다.
  }, []);

  return {
    shopId,
    flowerId,
    flower,
  };
}
