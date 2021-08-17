export interface PhraseInterface {
  id: any;
  title: any;
}

export const UPDATE_SHOWN = 'UPDATE_SHOWN';
export const UPDATE_SENT = 'UPDATE_SENT';
export const ADD_TO_SHOWN_PHRASES = 'ADD_TO_SHOWN_PHRASES';
export const ADD_TO_SENT_PHRASES = 'ADD_TO_SENT_PHRASES';
export const REMOVE_FROM_SHOWN_PHRASES = 'REMOVE_FROM_SHOWN_PHRASES';
export const REMOVE_FROM_SENT_PHRASES = 'REMOVE_FROM_SENT_PHRASES';
export const FIXED_DATA = 'FIXED_DATA';

interface UpdateShownPhrasesAction {
  type: typeof UPDATE_SHOWN;
  payload: PhraseInterface[];
}

interface UpdateSentPhrasesAction {
  type: typeof UPDATE_SENT;
  payload: PhraseInterface[];
}

interface AddToShownPhrasesAction {
  type: typeof ADD_TO_SHOWN_PHRASES;
  payload: PhraseInterface;
}

interface AddToSentPhrasesAction {
  type: typeof ADD_TO_SENT_PHRASES;
  payload: PhraseInterface;
}

interface RemoveFromShownPhrasesAction {
  type: typeof REMOVE_FROM_SHOWN_PHRASES;
  payload: PhraseInterface;
}

interface RemoveFromSentPhrasesAction {
  type: typeof REMOVE_FROM_SENT_PHRASES;
  payload: PhraseInterface;
}

interface FillDataAction {
  type: typeof FIXED_DATA;
  payload: PhraseInterface[];
}

export type PhrasesActionTypes =
  | UpdateShownPhrasesAction
  | UpdateSentPhrasesAction
  | AddToShownPhrasesAction
  | AddToSentPhrasesAction
  | RemoveFromShownPhrasesAction
  | RemoveFromSentPhrasesAction
  | FillDataAction
