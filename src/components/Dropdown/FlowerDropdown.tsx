import React from 'react';
import { Dropdown } from './Dropdown';
import Select from '@material-ui/core/Select';
import useFlowerDropdown from './hooks/useFlowerDropdown';

export const FlowerDropdown: React.FC<{
  onReserveChange: any;
}> = ({ onReserveChange }) => {
  const { flowers, handleChange, selected } = useFlowerDropdown(
    onReserveChange,
  );

  return (
    <Dropdown description={'꽃다발 선택'}>
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
