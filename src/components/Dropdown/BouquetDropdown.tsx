import React from 'react';
import { Dropdown } from './Dropdown';
import Select from '@material-ui/core/Select';
import useBouquetDropdown from './hooks/useBouquetDropdown';
import { BouquetType } from '../flowerImg/Bouquet';

export type BouquetDropdownProps = {
  onBouquetDropdownChange: (bouquet: BouquetType) => void;
};

export const BouquetDropdown: React.FC<BouquetDropdownProps> = ({
  onBouquetDropdownChange,
}) => {
  const { bouquets, handleChange, selected } = useBouquetDropdown({
    onBouquetDropdownChange,
  });

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
        {bouquets?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </Select>
    </Dropdown>
  );
};
