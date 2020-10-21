import axiosInstance from '../../login/axios';
import { BouquetDropdownProps } from '../BouquetDropdown';
import { BouquetType } from '../../flowerImg/Bouquet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useBouquetDropdown({
  onBouquetDropdownChange,
}: BouquetDropdownProps) {
  const { shop_id } = useParams<{
    shop_id: string;
  }>();

  const [bouquets, setBouquets] = useState<BouquetType[]>([]);
  const [selected, setSelected] = useState<string | undefined>();

  useEffect(() => {
    axiosInstance.get(`/shop/${shop_id}/bouquets`).then(({ data }) => {
      setBouquets(data);
    });
  }, []);

  // Dropdown의 onChange
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    // TODO: selected에는 value id -> flowers 해당 id의 name

    // STEP1.
    const bouquetIndex = bouquets
      .map(function (bouquet) {
        return bouquet.id;
      })
      .indexOf(Number(event.target.value));

    const selectedBouquet = bouquets[bouquetIndex];

    setSelected(event.target.value as string);

    // NOTE: reserve = { flower: xxx, ribbon: xxx, wrapping paper: xxx }
    onBouquetDropdownChange(selectedBouquet);
  };
  console.log(bouquets);

  return {
    bouquets,
    selected,
    handleChange,
  };
}
