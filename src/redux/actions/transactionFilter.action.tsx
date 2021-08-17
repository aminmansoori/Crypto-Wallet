import {
    TransactionChipActionTypes,
    transactionFilterInterface,
    ADD_TO_TRANSACTION_CHIP,
    REMOVE_ALL_TRANSACTION_CHIP,
    REMOVE_FROM_TRANSACTION_CHIP,
    GET_SEARCHED_RESULT,
    GET_TRANSACTION_DETAIL
} from '../types/transactionFilter.types';

import { ActionCreator } from 'redux';

export const addToTransactionFilters: ActionCreator<TransactionChipActionTypes> = (filter: transactionFilterInterface) => {
    return {
        type: ADD_TO_TRANSACTION_CHIP,
        payload: filter
    }
}

export const removeFromTransactionFilters: ActionCreator<TransactionChipActionTypes> = (filter: transactionFilterInterface) => {
    return {
        type: REMOVE_FROM_TRANSACTION_CHIP,
        payload: filter
    }
}

export const removeAllTraansactionFilters: ActionCreator<TransactionChipActionTypes> = (filter: transactionFilterInterface) => {
    return {
        type: REMOVE_ALL_TRANSACTION_CHIP,
        payload: filter
    }
}

// export const getSearchedFilter: ActionCreator<TransactionChipActionTypes> = (filter: transactionFilterInterface) => {
//     return {
//         type: GET_SEARCHED_RESULT,
//         payload: filter
//     }
// }

export const getTransactionDetailes: ActionCreator<TransactionChipActionTypes> = (transactionDetailes: []) => {
    return {
        type: GET_TRANSACTION_DETAIL,
        payload: transactionDetailes
    }
}
