import React from 'react';
import { Dropdown } from './Dropdown';
import { Select } from '@material-ui/core';
import useWrappingPaperDropdown from './hooks/useWrappingPaperDropdown';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';

export type WrappingPaperDropdownProps = {
  onWrappingPaperDropdownChange: (wrappingPaper: WrappingPaperType) => void;
};
export const WrappingPaperDropdown: React.FC<WrappingPaperDropdownProps> = ({
  onWrappingPaperDropdownChange,
}) => {
  const { selected, handleChange, wrappingPapers } = useWrappingPaperDropdown({
    onWrappingPaperDropdownChange,
  });
  return (
    <Dropdown description={'포장지 선택'}>
      <Select
        native
        value={selected}
        onChange={handleChange}
        label="wrappingPaper"
        inputProps={{
          name: 'wrappingPaper',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        {wrappingPapers?.map(({ id, name, price }) => (
          <option value={id}>
            {name} (+{price})
          </option>
        ))}
      </Select>
    </Dropdown>
  );
};
