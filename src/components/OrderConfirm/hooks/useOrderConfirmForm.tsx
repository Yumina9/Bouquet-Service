import React, { useState } from 'react';
import { BouquetType } from '../../flowerImg/Bouquet';

export default function useOrderConfirmForm() {
  const [order, setOrder] = useState<{
    bouquet?: BouquetType;
  }>();

  console.log('useOrderConfirmform');
  return { order, setOrder };
}
