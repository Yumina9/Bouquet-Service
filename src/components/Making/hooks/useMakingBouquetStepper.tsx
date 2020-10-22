import { useState } from 'react';
import { FlowerType } from '../../flowerImg/Flower';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { RibbonType } from '../../flowerImg/Ribbon';

export default function useMakingBouquetStepper() {
  const [flower_count, setFlowerCount] = useState(1);

  // 예약
  const [reserve, setReserve] = useState<{
    flower?: FlowerType; // 꽃 선택
    wrappingPaper?: WrappingPaperType; // 포장지
    ribbon?: RibbonType; // 리본
  } | null>(null);

  var bouquetPrice = reserve?.flower?.price
    ? reserve?.flower?.price * flower_count
    : 0;

  var wrappingPaperPrice = reserve?.wrappingPaper?.price
    ? reserve?.wrappingPaper?.price
    : 0;

  var ribbonPrice = reserve?.ribbon?.price ? reserve?.ribbon?.price : 0;
  var resultPrice = bouquetPrice + wrappingPaperPrice + ribbonPrice;

  return {
    flower_count,
    setFlowerCount,
    reserve,
    setReserve,
    resultPrice,
  };
}
