import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: '2px solid gray',
        padding: theme.spacing(6),
        
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (    
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>Flamingo</Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
        >
          그 계절 가장 이쁜 꽃으로 행복을 채워드릴게요.
        </Typography>
        <Copyright />
      </footer>
    );
};

export default Footer;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Flamingo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}