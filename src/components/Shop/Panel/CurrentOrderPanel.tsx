import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { BouquetType } from '../../flowerImg/Bouquet';
import { FlowerType } from '../../flowerImg/Flower';
import styled from 'styled-components';

export type BouquetOrderType = {
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
  { field: 'flower', headerName: '꽃', width: 200 },
  { field: 'flowerCount', headerName: '꽃 수량', width: 200 },
  { field: 'ribbon', headerName: '리본', width: 150 },
  { field: 'wrappingPaper', headerName: '포장지', width: 150 },
  { field: 'price', headerName: '금액', width: 150 },
];

export const CurrentOrderPanel = ({
  orders,
}: {
  orders: BouquetOrderType[];
}) => {
  console.log(orders);

  const orderDto = orders.map((order) => ({
    id: order.id as number,
    bouquet: order.bouquet?.name as string,
    flower: order.flower?.name as string,
    flowerCount: order.flower_count,
    ribbon: order.ribbon,
    wrappingPaper: order.wrappingPaper,
    price: order.price,
  }));

  return (
    <Block>
      {orders && (
        <DataGrid
          rows={orderDto}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      )}
    </Block>
  );
};

const Block = styled.div`
  width: '100%';
  height: 400px;

  .MuiDataGrid-colCellTitle,
  .MuiDataGrid-cell,
  .MuiDataGrid-rowCount,
  .MuiTablePagination-caption {
    font-size: 1.5rem;
  }
`;
