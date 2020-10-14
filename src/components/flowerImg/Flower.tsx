import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface FlowerType {
  id: number;
  name: string;
  img: string;
  description: string;
  color: string;
  price: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
    media: {
      height: 0,
      paddingTop: '100%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const Flower: React.FC<FlowerType> = ({ ...flowers }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box>
        <Card className={classes.root}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${flowers.color} ${flowers.name}`}
            subheader="언제 올렸을까요?"
          />
          <Link
            to={`flower/${flowers.id}/`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <CardMedia
              className={classes.media}
              image={flowers.img}
              title={flowers.name}
            />
          </Link>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography type="H7" color={palette.color4} fontWeight="light">
                {`${flowers.color}${flowers.name}는 ${flowers.description}라는 의미를 가지고 있습니다.`}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
};

export default Flower;

const Box = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;
`;
