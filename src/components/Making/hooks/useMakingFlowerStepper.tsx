import { useEffect, useState } from 'react';
import { FlowerType } from '../../flowerImg/Flower';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { RibbonType } from '../../flowerImg/Ribbon';
import { BouquetType } from '../../flowerImg/Bouquet';
import Axios from 'axios';

export default function useMakingFlowerStepper() {
  const [flower_count, setFlowerCount] = useState(1);
  const [reserve, setReserve] = useState<{
    bouquet?: BouquetType;
    wrappingPaper?: WrappingPaperType;
    ribbon?: RibbonType;
  } | null>(null);

  var ribbonName = reserve?.ribbon?.name ? reserve?.ribbon?.name : 0;

  var bouquetPrice = reserve?.bouquet?.bouquet_paper_price
    ? reserve?.bouquet?.bouquet_paper_price
    : 0;

  var wrappingPaperPrice = reserve?.wrappingPaper?.price
    ? reserve?.wrappingPaper?.price
    : 0;

  var ribbonPrice = reserve?.ribbon?.price ? reserve?.ribbon?.price : 0;
  var resultPrice = bouquetPrice + wrappingPaperPrice + ribbonPrice;

  console.log('여기는 useMakingFlowerStepper');

  return {
    flower_count,
    setFlowerCount,
    reserve,
    setReserve,
    resultPrice,
    ribbonName,
  };
}
