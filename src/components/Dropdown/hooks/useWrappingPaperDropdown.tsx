import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { UseDropdownProps } from '../Dropdown';
import { WrappingPaperDropdownProps } from '../WrappingPaperDropdown';

export default function useWrappingPaperDropdown({
  onWrappingPaperDropdownChange,
}: WrappingPaperDropdownProps) {
  const [wrappingPapers, setWrappingpapers] = useState<WrappingPaperType[]>([]);
  const [selected, setSelected] = useState<string | undefined>('');
  const { shop_id } = useParams<{ shop_id: string }>();

  useEffect(() => {
    Axios.get(`/shop/${shop_id}/wrappingPapers`).then(({ data }) =>
      setWrappingpapers(data),
    );
  }, []);

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
