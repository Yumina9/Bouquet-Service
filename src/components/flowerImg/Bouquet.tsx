import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import { FlowerType } from './FlowerList';
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
  })
);

const Bouquet: React.FC<FlowerType> = ({ name, img, description, color }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Link to="/custom" style={{ color: 'inherit', textDecoration: 'none' }}>
        <Box>
          <Card className={classes.root}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={name}
              subheader="언제 올렸을까요?"
            />
            <CardMedia className={classes.media} image={img} title={name} />
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
                  {color
                    ? `${color}${name}는 ${description}라는 의미를 가지고 있습니다.`
                    : `${description}`}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Link>
    </>
  );
};

export default Bouquet;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px;
`;
