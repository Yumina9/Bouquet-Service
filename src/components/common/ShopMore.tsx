import React from 'react';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Typography from './Typography';

export const ShowMore = ({ to }: { to: string }) => (
  <Link
    to={to}
    style={{
      color: 'inherit',
      textDecoration: 'none',
      float: 'right',
    }}
  >
    <Typography type="H7" color={palette.color4} fontWeight="bold">
      더보기
    </Typography>
  </Link>
);
