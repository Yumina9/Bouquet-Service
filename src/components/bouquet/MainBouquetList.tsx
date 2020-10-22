import axiosInstance from '../login/axios';
import palette from '../../lib/styles/palette';
import React, { useEffect, useState } from 'react';
import { BouquetType } from '../flowerImg/Bouquet';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  viewSection: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  viewButton: {
    fontSize: '1.3rem',
    color: `${palette.color3}`,
  },
}));

export default function MainBouquetList() {
  const classes = useStyles();
  const [bouquets, setBouquets] = useState<BouquetType[] | undefined>();

  useEffect(() => {
    axiosInstance
      .get('/bouquets')
      .then((response) => setBouquets(response.data));
  }, []);

  return (
    <Grid container spacing={4}>
      {bouquets &&
        bouquets.map((bouquet) => {
          if (bouquet.id < 8) {
            return (
              <Grid item key={bouquet.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${bouquet.img}`}
                    title={`${bouquet.name}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`${bouquet.name}`}
                    </Typography>
                    <Typography>{`${bouquet.description}`}</Typography>
                  </CardContent>
                  <CardActions className={classes.viewSection}>
                    <Link
                      to={`/shop/${bouquet.shops}/bouquet/${bouquet.id}/`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <Button
                        className={classes.viewButton}
                        size="large"
                        color="primary"
                      >
                        View
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          } else {
            return null;
          }
        })}
    </Grid>
  );
}
