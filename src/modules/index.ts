import { combineReducers } from 'redux';

import member from './member';
import order from './order';
import user from './user';
import shop from './shop';

const rootReducer = combineReducers({ member, order, user, shop });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
