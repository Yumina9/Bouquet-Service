import { RibbonType } from '../components/flowerImg/Ribbon';
// const cBouquet = document.querySelector('bouquet');
// const cFlower = document.querySelector('flower');
// const cFlower_count = document.querySelector('flower_count');
// const cWrappingPaper = document.querySelector('wrappingPaper');
// const cRibbon = document.querySelector('ribbon');
// const cResultPrice = document.querySelector('resultPrice');
// const BOUQUET = 'BOUQUET' as const;
// const FLOWER = 'FLOWER' as const;
// const FLOWER_COUNT = 'FLOWER_COUNT' as const;
// const WRAPPINGPAPER = 'WRAPPINGPAPER' as const;
// const RIBBON = 'RIBBON' as const;
// const RESULTPRICE = 'RESULTPRICE' as const;

import { WrappingPaperType } from '../components/flowerImg/WrappingPaper';

export interface OrderDataParams {
  bouquet?: string | undefined;
  flower?: string[] | string | undefined;
  flower_count?: number | undefined;
  wrappingPaper?: string[] | string | undefined;
  ribbon?: string[] | string | undefined;
  resultPrice?: number | undefined;
}

export interface OrderState {
  orderItems: OrderDataParams;
}

const INSERT_ORDER_DATA = 'INSERT_ORDER_DATA' as const;

// export const bouquet = () => ({ type: BOUQUET });
// export const flower = () => ({ type: FLOWER });
// export const flower_count = () => ({ type: FLOWER_COUNT });
// export const wrappingPaper = () => ({ type: WRAPPINGPAPER });
// export const ribbon = () => ({ type: RIBBON });
// export const resultPrice = () => ({ type: RESULTPRICE });

export const insertOrderData = ({
  bouquet,
  flower,
  flower_count,
  wrappingPaper,
  ribbon,
  resultPrice,
}) => ({
  type: INSERT_ORDER_DATA,
  bouquet: bouquet,
  flower: flower,
  flower_count: flower_count,
  wrappingPaper: wrappingPaper,
  ribbon: ribbon,
  resultPrice: resultPrice,
});

export type OrderAction = ReturnType<typeof insertOrderData>;
// | ReturnType<typeof flower>
// | ReturnType<typeof flower_count>
// | ReturnType<typeof wrappingPaper>
// | ReturnType<typeof ribbon>
// | ReturnType<typeof resultPrice>;

export const initialState: OrderState = {
  orderItems: {
    bouquet: '',
    flower: '',
    flower_count: 1,
    wrappingPaper: '',
    ribbon: '',
    resultPrice: 0,
  },
};

function order(state = initialState, action) {
  switch (action.type) {
    case INSERT_ORDER_DATA:
      return {
        ...state,
        orderItems: {
          bouquet: action.bouquet,
          flower: action.flower,
          flower_count: action.flower_count,
          wrappingPaper: action.wrappingPaper,
          ribbon: action.ribbon,
          resultPrice: action.resultPrice,
        },
      };
    default:
      return state;
  }
}

export default order;
