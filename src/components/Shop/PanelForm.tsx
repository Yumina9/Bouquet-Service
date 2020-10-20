import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import { Panel } from './Panel';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';

export type PanelFormProps = {
  title: string;
  children: React.ReactNode;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      maxWidth: '100%',

      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: '100%',
      width: '100%',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }),
);

export const PanelForm = ({ title, children }: PanelFormProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography type="H3" color="black" fontWeight="bold">
        <Title>{title}</Title>
      </Typography>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Body>{children}</Body>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Body = styled.div`
  display: flex-reverse;
  width: 100%;
  justify-content: center;
  margin: 20px;
`;
