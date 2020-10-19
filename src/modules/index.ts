import { combineReducers } from 'redux';

import member from './member';
import order from './order';
import user from './user';

const rootReducer = combineReducers({ member, order, user });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
