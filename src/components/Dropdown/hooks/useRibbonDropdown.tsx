import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RibbonType } from '../../flowerImg/Ribbon';
import axiosInstance from '../../login/axios';
import { RibbonDropdownProps } from '../RibbonDropdown';

export default function useRibbonDropdown({
  onRibbonDropdownChange,
}: RibbonDropdownProps) {
  const [ribbons, setRibbons] = useState<RibbonType[]>([]);
  const [selected, setSelected] = useState<string | undefined>();
  const { shop_id } = useParams<{ shop_id: string }>();
  useEffect(() => {
    axiosInstance
      .get(`/shop/${shop_id}/ribbons`)
      .then(({ data }) => setRibbons(data));
  }, [shop_id]);


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
    onRibbonDropdownChange(selectedRibbon);
  };
  return {
    ribbons,
    selected,
    handleChange,
  };
}
