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

  const [totalPrice, setTotalPrice] = useState(0);

  return {
    amount,
    setAmount,
    reserve,
    setReserve,
    totalPrice,
  };
}
