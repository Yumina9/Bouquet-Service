import axiosInstance from '../../../components/login/axios';
import { FlowerType } from '../../../components/flowerImg/Flower';
import { useEffect, useState } from 'react';

export default function useFlowerMakingPage(flower_id: string) {
  const [flower, setFlower] = useState<FlowerType>();

  useEffect(() => {
    axiosInstance
      .get(`/flowers/${flower_id}`)
      .then(({ data }) => setFlower(data)); // setState -> state 변경 -> rerender -> 데이터가 반영된 새로운 화면이 그려진다.
  }, [flower_id]);

  return {
    flower,
  };
}
