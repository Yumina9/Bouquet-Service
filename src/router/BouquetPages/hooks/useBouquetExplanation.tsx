import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BouquetType } from '../../../components/flowerImg/Bouquet';
import { FlowerType } from '../../../components/flowerImg/Flower';
import { RibbonType } from '../../../components/flowerImg/Ribbon';
import { WrappingPaperType } from '../../../components/flowerImg/WrappingPaper';
import useOrderConfirmForm from '../../../components/OrderConfirm/hooks/useOrderConfirmForm';

export default function useBouquetExplanation() {
  const { shop_id, bouquet_id } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();

  const [bouquet, setBouquet] = useState<BouquetType>();

  var flowerName = bouquet?.flower.map((flower: FlowerType) => {
    return flower?.name;
  });

  var wrappingPaperName = bouquet?.wrappingpaper.map(
    (wrappingPaper: WrappingPaperType) => {
      return wrappingPaper?.name;
    },
  );

  var ribbonName = bouquet?.ribbon.map((ribbon: RibbonType) => {
    return ribbon?.name;
  });

  useEffect(() => {
    Axios.get(`/bouquets/${bouquet_id}`).then(({ data }) => setBouquet(data));
  }, []);

  return {
    bouquet,
    shop_id,
    bouquet_id,
    flowerName,
    wrappingPaperName,
    ribbonName,
  };
}
