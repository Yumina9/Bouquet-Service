import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShopType } from '../../router/Shop/ShopMainPage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 320,
    margin: '30px',
  },
  media: {
    height: 170,
    width: 250,
  },
});

export default function ShopForm({ id, name, img, description }: ShopType) {
  const classes = useStyles();

  return (
    <Form>
      <Grid container spacing={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={img} title={name} />
            <CardContent style={{ height: '100px'}}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/shop/${id}/`}>
              <Button size="small" color="primary">
                바로가기
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Form>
  );
}

const Form = styled.div`
  Grid {
    Card {
      & > :first-child {
        flex: 8;
      }

      & > :last-child {
        flex: 2;
      }
    }
  }
`;
