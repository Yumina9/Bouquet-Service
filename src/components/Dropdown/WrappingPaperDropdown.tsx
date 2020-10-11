import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../common/Button';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import { Dropdown } from './Dropdown';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { useParams } from 'react-router-dom';

export const WrappingPaperDropdown: React.FC<{ onReserveChange: any }> = ({
  onReserveChange,
}) => {
  const [wrappingPapers, setWrappingpapers] = useState<WrappingPaperType[]>([]);
  const [selected, setSelected] = useState<string | undefined>('');
  const { shop_id: shopId } = useParams<{ shop_id: string }>();

  useEffect(() => {
    axios
      .get(`/shop/${shopId}/wrappingPapers/`)
      .then(({ data }) => setWrappingpapers(data));
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

    onReserveChange({ key: 'wrappingPaper', data: selectedWrappingPaper });
  };
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
        {wrappingPapers.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </Select>
    </Dropdown>

    // <>
    //   <span
    //     style={{
    //       color: 'inherit',
    //       textDecoration: 'none',
    //       border: '0',
    //       outline: '0',
    //     }}
    //   >
    //     <Button
    //       name={'wrappingPaper'}
    //       value={name}
    //       color="black"
    //       bgColor="white"
    //       onClick={onReserveChange}
    //     >
    //       {name}
    //     </Button>
    //   </span>
    // </>
  );
};
