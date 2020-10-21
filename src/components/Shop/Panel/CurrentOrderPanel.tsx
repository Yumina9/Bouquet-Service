import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { BouquetType } from '../../flowerImg/Bouquet';
import { FlowerType } from '../../flowerImg/Flower';
import Axios from 'axios';

type BouquetOrderType = {
  id?: number | undefined;
  bouquet?: BouquetType | undefined;
  flower?: FlowerType | undefined;
  flower_count?: number | undefined;
  price?: number | undefined;
  ribbon?: string | undefined;
  wrappingPaper?: string | undefined;
  shops?: number | undefined;
  users?: number | undefined;
};

const columns: ColDef[] = [
  { field: 'bouquet', headerName: '꽃다발', width: 150 },
  { field: 'flower', headerName: '꽃', width: 150 },
  { field: 'flowerCount', headerName: '꽃 수량', width: 70 },
  { field: 'ribbon', headerName: '리본', width: 150 },
  { field: 'wrappingPaper', headerName: '포장지', width: 150 },
  { field: 'price', headerName: '금액', width: 70 },
];

const rows = [];

export const CurrentOrderPanel = () => {
  const user = useSelector((state: RootState) => state?.user.user);
  const [orderList, setOrderList] = React.useState<
    BouquetOrderType | undefined
  >();
  React.useEffect(() => {
    // Axios.get(`/bouquet_order/${user.shop}/orderlist`).then((data)=>setOrderList(data))
  }, []);

  const userBouquetOrder: BouquetOrderType | undefined = user?.bouquet_order;
  console.log('악', userBouquetOrder);
  // setOrderList({ ...orderList, userBouquetOrder });
  // const orderItem = user?.bouquet_order.map(
  //   ({ userBouquetOrder }) => {
  //     return setOrderList({ ...orderList, userBouquetOrder  });
  //   },
  // );
  // const rows: BouquetOrderType[]|undefined = [
  //   {
  //     bouquet: `${orderList?.bouquet}`,
  //     flower: `${orderList?.flower}`,
  //     flowerCount: `${orderList?.flower_count}`,
  //     ribbon: `${orderList?.ribbon}`,
  //     wrappingPaper: `${orderList?.wrappingPaper}`,
  //     price: `${orderList?.price}`,
  //   },
  // ];
  console.log(user?.bouquet_order);
  return (
    <div style={{ height: 400, width: '100%' }}>
      {user?.bouquet_order && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      )}
    </div>
  );
};
