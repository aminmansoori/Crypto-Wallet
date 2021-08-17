import {
  TransactionChipActionTypes,
  transactionFilterInterface,
  REMOVE_ALL_TRANSACTION_CHIP,
  ADD_TO_TRANSACTION_CHIP,
  REMOVE_FROM_TRANSACTION_CHIP,
  GET_SEARCHED_RESULT,
  GET_TRANSACTION_DETAIL,
} from '../types/transactionFilter.types';

interface TransactionChipState {
  transactionFilters: transactionFilterInterface[];
  searchedFilters: transactionFilterInterface[];
  transactionDetailes: [];
}

const initialState: TransactionChipState = {
  transactionFilters: [],
  searchedFilters: [],
  transactionDetailes: [],
};

export default (
  state: TransactionChipState = initialState,
  action: TransactionChipActionTypes,
): TransactionChipState => {
  switch (action.type) {
    case ADD_TO_TRANSACTION_CHIP: {
      return {
        ...state,
        transactionFilters: state.transactionFilters.concat({
          id: action.payload.id,
          filter: action.payload.filter,
        }),
      };
    }

    case REMOVE_FROM_TRANSACTION_CHIP: {
      return {
        ...state,
        transactionFilters: state.transactionFilters.filter(
          (filter) => filter.id !== action.payload.id,
        ),
      };
    }

    case REMOVE_ALL_TRANSACTION_CHIP: {
      return {
        ...state,
        transactionFilters: (state.transactionFilters = []),
      };
    }

    case GET_TRANSACTION_DETAIL: {
      return {
        ...state,
        transactionDetailes: (state.transactionDetailes = action.payload),
      };
    }

    // case GET_SEARCHED_RESULT: {
    //   return {
    //     ...state,
    //     searchedFilters: state.transactionDetailes.filter(
    //       (filter) => filter.filter === action.payload.filter,
    //     ),
    //   };
    // }

    default:
      return state;
  }
};
