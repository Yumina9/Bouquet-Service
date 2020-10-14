import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BouquetType } from '../../DummyData';

export const MadeOrder = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<BouquetType>();
  useEffect(() => {
    Axios.get(`/bouquets/${id}`).then(({ data }) => setInfo(data));
  }, []);

  return <></>;
};
