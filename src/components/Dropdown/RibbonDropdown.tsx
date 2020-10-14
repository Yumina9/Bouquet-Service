import React from 'react';
import { Dropdown } from './Dropdown';
import { Select } from '@material-ui/core';
import useRibbonDropdown from './hooks/useRibbonDropdown';
import { RibbonType } from '../flowerImg/Ribbon';

export type RibbonDropdownProps = {
  onRibbonDropdownChange: (ribbon: RibbonType) => void;
};

export const RibbonDropdown: React.FC<RibbonDropdownProps> = ({
  onRibbonDropdownChange,
}) => {
  const { ribbons, selected, handleChange } = useRibbonDropdown({
    onRibbonDropdownChange,
  });
  return (
    <Dropdown description={'리본 선택'}>
      <Select
        native
        value={selected}
        onChange={handleChange}
        label="ribbon"
        inputProps={{
          name: 'ribbon',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        {ribbons?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </Select>
    </Dropdown>
  );
};
