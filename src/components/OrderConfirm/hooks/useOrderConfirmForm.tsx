import React, { useState } from 'react';
import { BouquetType } from '../../flowerImg/Bouquet';
import { FlowerType } from '../../flowerImg/Flower';
import { RibbonType } from '../../flowerImg/Ribbon';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';

export default function useOrderConfirmForm() {
  const [order, setOrder] = useState<{
    bouquet?: BouquetType;
    // flower?: string | string[] | undefined;
    // flower_count?: number | undefined;
    // wrappingPaper?: string | string[] | undefined;
    // ribbon?: string | string[] | undefined;
    // resultPrice?: number | undefined;
  }>();

  console.log('useOrderConfirmform');
  // console.log('order', order);
  return { order, setOrder };
}
