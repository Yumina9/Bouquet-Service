import { BouquetType } from '../components/flowerImg/Bouquet';
import { FlowerType } from '../components/flowerImg/Flower';
import { RibbonType } from '../components/flowerImg/Ribbon';
import { WrappingPaperType } from '../components/flowerImg/WrappingPaper';

const INSERT_ORDER_DATA = 'INSERT_ORDER_DATA' as const;

export type OrderType = {
  bouquet: BouquetType | BouquetType[] | null;
  flower: FlowerType | FlowerType[] | null;
  flower_count: number;
  wrappingPaper: string | WrappingPaperType[] | undefined;
  ribbon: string | RibbonType[] | undefined;
  resultPrice: number;
  shop_id: string | null;
};

export const insertOrderData = ({
  bouquet,
  flower,
  flower_count,
  wrappingPaper,
  ribbon,
  resultPrice,
  shop_id,
}: OrderType) => ({
  type: INSERT_ORDER_DATA,
  bouquet,
  flower,
  flower_count,
  wrappingPaper,
  ribbon: ribbon,
  resultPrice: resultPrice,
  shop_id,
});

export const initialState: OrderType = {
  bouquet: null,
  flower: null,
  flower_count: 1,
  wrappingPaper: '',
  ribbon: '',
  resultPrice: 0,
  shop_id: null,
};

type OrderAction = ReturnType<typeof insertOrderData>;

function order(state = initialState, action: OrderAction) {
  switch (action.type) {
    case INSERT_ORDER_DATA:
      return {
        ...state,
        bouquet: action.bouquet,
        flower: action.flower,
        flower_count: action.flower_count,
        wrappingPaper: action.wrappingPaper,
        ribbon: action.ribbon,
        resultPrice: action.resultPrice,
        shop_id: action.shop_id,
      };
    default:
      return state;
  }
}

export default order;
