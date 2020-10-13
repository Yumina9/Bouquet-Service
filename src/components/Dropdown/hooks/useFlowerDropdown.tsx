import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlowerType } from '../../flowerImg/Flower';
import { UseDropdownProps } from '../Dropdown';

export default function useFlowerDropdown({
  onReserveChange,
}: UseDropdownProps) {
  const { shop_id: shopId } = useParams<{
    shop_id: string;
  }>();

  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  const [selected, setSelected] = useState<string | undefined>();
  console.log('selected', selected);

  useEffect(() => {
    Axios.get(`/shop/${shopId}/flowers`).then(({ data }) => {
      setFlowers(data);
    });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    // TODO: selected에는 value id -> flowers 해당 id의 name

    const flowerIndex = flowers
      .map(function (flower) {
        return flower.id;
      })
      .indexOf(Number(event.target.value));

    const selectedFlower = flowers[flowerIndex];

    setSelected(event.target.value as string);

    // NOTE: reserve = { flower: xxx, ribbon: xxx, wrapping paper: xxx }
    onReserveChange({ flower: selectedFlower });
  };
  console.log(flowers);

  return {
    flowers,
    selected,
    handleChange,
  };
}
