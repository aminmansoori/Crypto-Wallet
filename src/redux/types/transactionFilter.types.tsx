export interface transactionFilterInterface {
  id: any;
  filter: any;
}

export const ADD_TO_TRANSACTION_CHIP = 'ADD_TO_TRANSACTION_CHIP';
export const REMOVE_FROM_TRANSACTION_CHIP = 'REMOVE_FROM_TRANSACTION_CHIP';
export const REMOVE_ALL_TRANSACTION_CHIP = 'REMOVE_ALL_TRANSACTION_CHIP';
export const GET_SEARCHED_RESULT = 'GET_SEARCHED_RESULT';
export const GET_TRANSACTION_DETAIL = 'GET_TRANSACTION_DETAIL';

interface AddToTransactionAction {
  type: typeof ADD_TO_TRANSACTION_CHIP;
  payload: transactionFilterInterface;
}

interface RemoveFromTransactionAction {
  type: typeof REMOVE_FROM_TRANSACTION_CHIP;
  payload: transactionFilterInterface;
}

interface RemoveAllTransactionFilters {
  type: typeof REMOVE_ALL_TRANSACTION_CHIP;
  payload: transactionFilterInterface;
}

interface GetSearchedResult {
  type: typeof GET_SEARCHED_RESULT;
  payload: transactionFilterInterface;
}

interface GetTransactionDetailes {
  type: typeof GET_TRANSACTION_DETAIL;
  payload: [];
}

export type TransactionChipActionTypes =
  | AddToTransactionAction
  | RemoveFromTransactionAction
  | RemoveAllTransactionFilters
  | GetSearchedResult
  | GetTransactionDetailes;
