import { useEffect, useState } from 'react';
import { FlowerType } from '../../flowerImg/Flower';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { RibbonType } from '../../flowerImg/Ribbon';
import { BouquetType } from '../../flowerImg/Bouquet';

export default function useMakingBouquetStepper() {
  const [flower_count, setFlowerCount] = useState(1);
  const [reserve, setReserve] = useState<{
    flower?: FlowerType;
    wrappingPaper?: WrappingPaperType;
    ribbon?: RibbonType;
  } | null>(null);

  // var flowerName = reserve?.flower?.name ? reserve?.flower?.name : 0;
  // var wrappingPaperName = reserve?.wrappingPaper?.name
  //   ? reserve?.wrappingPaper?.name
  //   : 0;
  // var ribbonName = reserve?.ribbon?.name ? reserve?.ribbon?.name : 0;

  var bouquetPrice = reserve?.flower?.price
    ? reserve?.flower?.price * flower_count
    : 0;

  var wrappingPaperPrice = reserve?.wrappingPaper?.price
    ? reserve?.wrappingPaper?.price
    : 0;

  var ribbonPrice = reserve?.ribbon?.price ? reserve?.ribbon?.price : 0;
  var resultPrice = bouquetPrice + wrappingPaperPrice + ribbonPrice;

  console.log('여기는 useMakingBouquetStepper');
  console.log('reserve', reserve);
  console.log('count', flower_count);

  return {
    flower_count,
    setFlowerCount,
    reserve,
    setReserve,
    resultPrice,
  };
}
