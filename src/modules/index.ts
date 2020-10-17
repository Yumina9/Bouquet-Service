import { combineReducers } from 'redux';

import member from './member';
import order from './order';

const rootReducer = combineReducers({ member, order });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
