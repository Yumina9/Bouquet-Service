import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlowerType } from '../flowerImg/Flower';
import Button from '../common/Button';
import { Dropdown } from './Dropdown';
import Select from '@material-ui/core/Select';
import { useParams } from 'react-router-dom';

export const FlowerDropdown: React.FC<{ onReserveChange: any }> = ({
  onReserveChange,
}) => {
  const { shop_id: shopId } = useParams<{
    shop_id: string;
  }>();

  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  const [selected, setSelected] = useState<string | undefined>('');

  useEffect(() => {
    axios.get(`/shop/${shopId}/flowers`).then(({ data }) => {
      setFlowers(data);
    });
  }, []);
  console.log('flower:', flowers);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    // TODO: selected에는 value id -> flowers 해당 id의 name

    const flowerIndex = flowers
      .map(function (flower) {
        return flower.id;
      })
      .indexOf(Number(event.target.value));

    const selectedFlower = flowers[flowerIndex];

    setSelected(event.target.value as string);

    // id에 해당하는 객체를 통채로 전달
    onReserveChange({ key: 'flower', data: selectedFlower });
  };

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
