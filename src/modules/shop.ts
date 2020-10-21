const INSERT_SHOP_DATA = 'INSERT_SHOP_DATA' as const;

export const login = (shop) => ({
  type: INSERT_SHOP_DATA,
  shop,
});

// type ShopInfoType = {
//   bouquet: BouquetType | null;
//   flower: FlowerType | null;
//   bouquet_order: OrderType | null;
//   wrappingPaper: string | undefined;
//   ribbon: string | undefined;
//   name: string | undefined;
//   location: string | undefined;
//   florist: string | undefined;
//   description: string | undefined;
//   phone: string | undefined;
//   instagram: string | undefined;
//   facebook: string | undefined;
// };

const initialState = {
  shop: {
    shop: '',
  },
};

function shop(state = initialState, action) {
  switch (action.type) {
    case INSERT_SHOP_DATA:
      return { ...state, shop: action.shop };
    default:
      return state;
  }
}

export default shop;
