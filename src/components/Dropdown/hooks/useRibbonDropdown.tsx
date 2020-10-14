import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RibbonType } from '../../flowerImg/Ribbon';
import { UseDropdownProps } from '../Dropdown';

export default function useRibbonDropdown({
  onReserveChange,
}: UseDropdownProps) {
  const [ribbons, setRibbons] = useState<RibbonType[]>([]);
  const [selected, setSelected] = useState<string | undefined>();
  const { shop_id: shopId } = useParams<{ shop_id: string }>();
  useEffect(() => {
    Axios.get(`/shop/${shopId}/ribbons`).then(({ data }) => setRibbons(data));
  }, []);

  console.log(ribbons);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    const ribbonIndex = ribbons
      .map(function (ribbon) {
        return ribbon.id;
      })
      .indexOf(Number(event.target.value));
    const selectedRibbon = ribbons[ribbonIndex];

    setSelected(event.target.value as string);
    onReserveChange({ ribbon: selectedRibbon });
  };
  return {
    ribbons,
    selected,
    handleChange,
  };
}
