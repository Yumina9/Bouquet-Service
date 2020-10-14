import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { FlowerType } from '../flowerImg/Flower';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import { RibbonType } from '../flowerImg/Ribbon';

export type UseDropdownProps = {
  onReserveChange: React.Dispatch<
    React.SetStateAction<{
      flower?: FlowerType;
      wrappingPaper?: WrappingPaperType;
      ribbon?: RibbonType;
    } | null>
  >;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const Dropdown: React.FC<{
  description: string;
  children: any; // TODO: Fix Type
}> = ({ description, children }) => {
  const classes = useStyles();

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          {description}
        </InputLabel>

        {children}
      </FormControl>
    </>
  );
};

const Menu = styled.div`
  .dropdown-button {
    background-color: ${palette.color6};
    padding: 8px;
    font-size: 15px;
    border: none;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${palette.white};
    min-width: 70px;
    padding: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    color: black;
    padding: 8px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: ${palette.color3};
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropdown-button {
    background-color: ${palette.color7};
  }
`;
