import {
  PhrasesActionTypes,
  PhraseInterface,
  UPDATE_SHOWN,
  UPDATE_SENT,
  ADD_TO_SHOWN_PHRASES,
  ADD_TO_SENT_PHRASES,
  REMOVE_FROM_SHOWN_PHRASES,
  REMOVE_FROM_SENT_PHRASES,
  FIXED_DATA,
} from '../types/phrases.types';

interface PhraseState {
  shownPhrases: PhraseInterface[];
  sentPhrases: PhraseInterface[];
  fixedPhrases: PhraseInterface[];
}

const initialState: PhraseState = {
  shownPhrases: [],
  sentPhrases: [],
  fixedPhrases: [],
};

export default (
  state: PhraseState = initialState,
  action: PhrasesActionTypes,
): PhraseState => {
  switch (action.type) {
    case UPDATE_SHOWN: {
      return {
        ...state,
        shownPhrases: action.payload,
        fixedPhrases: action.payload,
      };
    }
    case FIXED_DATA: {
      return {
        ...state,
        fixedPhrases: action.payload,
      };
    }
    case UPDATE_SENT: {
      return {
        ...state,
        sentPhrases: action.payload,
      };
    }
    case ADD_TO_SHOWN_PHRASES: {
      return {
        ...state,
        shownPhrases: state.shownPhrases.concat({
          id: action.payload.id,
          title: action.payload.title,
        }),
      };
    }
    case ADD_TO_SENT_PHRASES: {
      return {
        ...state,
        sentPhrases: state.sentPhrases.concat({
          id: action.payload.id,
          title: action.payload.title,
        }),
      };
    }
    case REMOVE_FROM_SHOWN_PHRASES: {
      return {
        ...state,
        shownPhrases: state.shownPhrases.filter(
          (phrase) => phrase.id !== action.payload.id,
        ),
      };
    }
    case REMOVE_FROM_SENT_PHRASES: {
      return {
        ...state,
        sentPhrases: state.sentPhrases.filter(
          (phrase) => phrase.id !== action.payload.id,
        ),
      };
    }
    default:
      return state;
  }
};
