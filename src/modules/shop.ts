const INSERT_SHOP_DATA = 'INSERT_SHOP_DATA' as const;

export const login = (shop) => ({
  type: INSERT_SHOP_DATA,
  shop,
});
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
