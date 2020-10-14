import React from 'react';
import { Dropdown } from './Dropdown';
import Select from '@material-ui/core/Select';
import useFlowerDropdown from './hooks/useFlowerDropdown';
import { FlowerType } from '../flowerImg/Flower';

export type FlowerDropdownProps = {
  onFlowerDropdownChange: (flower: FlowerType) => void;
};

export const FlowerDropdown: React.FC<FlowerDropdownProps> = ({
  onFlowerDropdownChange,
}) => {
  const { flowers, handleChange, selected } = useFlowerDropdown({
    onFlowerDropdownChange,
  });

  return (
    <Dropdown description={'꽃 선택'}>
      <Select
        native
        value={selected}
        onChange={handleChange}
        label="flower"
        inputProps={{
          name: 'flower',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        {flowers?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </Select>
    </Dropdown>
  );
};
