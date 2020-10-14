import { useEffect, useState } from 'react';
import { FlowerType } from '../../flowerImg/Flower';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { RibbonType } from '../../flowerImg/Ribbon';

export default function useMakingBouquetStepper() {
  const [amount, setAmount] = useState(1);
  const [reserve, setReserve] = useState<{
    flower?: FlowerType;
    wrappingPaper?: WrappingPaperType;
    ribbon?: RibbonType;
  } | null>(null);

  var flowerPrice = reserve?.flower?.price
    ? amount * reserve?.flower?.price
    : 0;

  var wrappingPaperPrice = reserve?.wrappingPaper?.price
    ? reserve?.wrappingPaper?.price
    : 0;

  var ribbonPrice = reserve?.ribbon?.price ? reserve?.ribbon?.price : 0;
  var resultPrice = flowerPrice + wrappingPaperPrice + ribbonPrice;

  console.log(resultPrice);
  console.log(amount);

  return {
    amount,
    setAmount,
    reserve,
    setReserve,
    resultPrice,
  };
}
