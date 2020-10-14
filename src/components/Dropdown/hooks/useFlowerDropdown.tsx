import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlowerType } from '../../flowerImg/Flower';
import { UseDropdownProps } from '../Dropdown';
import { FlowerDropdownProps } from '../FlowerDropdown';

export default function useFlowerDropdown({
  onFlowerDropdownChange,
}: FlowerDropdownProps) {
  const { shop_id: shopId } = useParams<{
    shop_id: string;
  }>();

  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  const [selected, setSelected] = useState<string | undefined>();

  useEffect(() => {
    Axios.get(`/shop/${shopId}/flowers`).then(({ data }) => {
      setFlowers(data);
    });
  }, []);

  // Dropdown의 onChange
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    // TODO: selected에는 value id -> flowers 해당 id의 name

    // STEP1.
    const flowerIndex = flowers
      .map(function (flower) {
        return flower.id;
      })
      .indexOf(Number(event.target.value));

    const selectedFlower = flowers[flowerIndex];

    setSelected(event.target.value as string);

    // NOTE: reserve = { flower: xxx, ribbon: xxx, wrapping paper: xxx }
    onFlowerDropdownChange(selectedFlower);
  };
  console.log(flowers);

  return {
    flowers,
    selected,
    handleChange,
  };
}
