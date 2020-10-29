import React, { useState } from 'react';
import { BouquetType } from '../../flowerImg/Bouquet';

export default function useOrderConfirmForm() {
  const [order, setOrder] = useState<{
    bouquet?: BouquetType;
  }>();

  return { order, setOrder };
}
