import { combineReducers } from 'redux';
import phrasesReducer from './phrases.reducer';
import transactionFilterReducer from './transactionChip.reducer';

export const rootReducer = combineReducers({
    phrases: phrasesReducer,
    transactionFilters:transactionFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>