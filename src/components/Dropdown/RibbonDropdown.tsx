import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import axios from 'axios';
import { FlowerType } from '../flowerImg/Flower';
import Button from '../common/Button';
import { RibbonType } from '../flowerImg/Ribbon';
import { Dropdown } from './Dropdown';
import { Select } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export const RibbonDropdown: React.FC<{ onReserveChange: any }> = ({
  onReserveChange,
}) => {
  const [ribbons, setRibbons] = useState<RibbonType[]>([]);
  const [selected, setSelected] = useState<string | undefined>('');
  const { shop_id: shopId } = useParams<{ shop_id: string }>();
  useEffect(() => {
    axios.get(`/shop/${shopId}/ribbons/`).then(({ data }) => setRibbons(data));
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

    onReserveChange({ key: 'ribbon', data: selectedRibbon });
  };

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
