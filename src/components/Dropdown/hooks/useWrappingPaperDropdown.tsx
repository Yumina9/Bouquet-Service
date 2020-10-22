import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WrappingPaperDropdownProps } from '../WrappingPaperDropdown';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import axiosInstance from '../../login/axios';

export default function useWrappingPaperDropdown({
  onWrappingPaperDropdownChange,
}: WrappingPaperDropdownProps) {
  const [wrappingPapers, setWrappingpapers] = useState<WrappingPaperType[]>([]);
  const [selected, setSelected] = useState<string | undefined>('');
  const { shop_id } = useParams<{ shop_id: string }>();

  useEffect(() => {
    axiosInstance
      .get(`/shop/${shop_id}/wrappingPapers`)
      .then(({ data }) => setWrappingpapers(data));
  }, [shop_id]);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    const wrappingPaperIndex = wrappingPapers
      .map(function (wrappingPaper) {
        return wrappingPaper.id;
      })
      .indexOf(Number(event.target.value));
    const selectedWrappingPaper = wrappingPapers[wrappingPaperIndex];
    setSelected(event.target.value as string);

    onWrappingPaperDropdownChange(selectedWrappingPaper);
  };
  return {
    wrappingPapers,
    selected,
    handleChange,
  };
}
