import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlowerType } from '../../../components/flowerImg/Flower';

export default function useFlowerMakingPage(shop_id: string) {
  const [flower, setFlower] = useState<FlowerType>();

  useEffect(() => {
    axios.get(`/flowers/${shop_id}`).then(({ data }) => setFlower(data)); // setState -> state 변경 -> rerender -> 데이터가 반영된 새로운 화면이 그려진다.
  }, []);

  return {
    // shop_id,
    // flowerId,
    flower,
  };
}
