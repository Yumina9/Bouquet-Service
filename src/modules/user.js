const USER_LOGIN = 'USER_LOGIN';

export const login = (user) => ({
  type: USER_LOGIN,
  user,
});

const initialState = {
  user: {
    shop: '',
  },
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

export default user;
