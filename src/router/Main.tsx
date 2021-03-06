import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/header/Header';
import MainBouquetList from '../components/bouquet/MainBouquetList';
import palette from '../lib/styles/palette';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
const Main = () => {
  return (
    <>
      <Album />
    </>
  );
};

export default Main;

const useStyles = makeStyles((theme) => ({
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    padding: theme.spacing(8, 0, 6),

    '&::before': {
      zIndex: -1,
      content: '""',
      backgroundImage:
        'url(https://cdn.pixabay.com/photo/2017/08/01/12/46/people-2565128_1280.jpg)',
      backgroundSize: 'cover',
      height: '100%',
      position: 'absolute',
      top: '64px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      opacity: 0.75,
    },
  },
  heroTitle: {
    fontFamily: "'Lobster'",
    color: 'white',
    zIndex: 2,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  button: {
    fontSize: '1.5rem',
    backgroundColor: palette.color1,
    '&:hover': {
      backgroundColor: palette.color3,
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export function Album() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              className={classes.heroTitle}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Make Own your Bouquets.
            </Typography>
            <Typography
              className={classes.heroTitle}
              variant="h3"
              align="center"
              color="textSecondary"
              paragraph
            >
              나만의 꽃다발을 만들어보세요.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      history.push(`/shops/`);
                    }}
                  >
                    Explore flower Shop
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* 인기 꽃다발 섹션 */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h3" align="center" color="textPrimary" paragraph>
            <span role="img" aria-label="">
              🌹
            </span>{' '}
            인기 꽃다발{' '}
            <span role="img" aria-label="">
              🌹
            </span>
          </Typography>

          <MainBouquetList />
        </Container>
      </main>
      <Footer />
    </>
  );
}

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
