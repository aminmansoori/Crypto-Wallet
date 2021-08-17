import {
    PhrasesActionTypes,
    PhraseInterface,
    UPDATE_SENT,
    UPDATE_SHOWN,
    ADD_TO_SHOWN_PHRASES,
    ADD_TO_SENT_PHRASES,
    REMOVE_FROM_SHOWN_PHRASES,
    REMOVE_FROM_SENT_PHRASES,
    FIXED_DATA,
} from '../types/phrases.types';
import { ActionCreator } from 'redux';

export const updateShownPhrases: ActionCreator<PhrasesActionTypes> = (phrases: PhraseInterface[]) => {
    return {
        type: UPDATE_SHOWN,
        payload: phrases
    }
}

export const getFixedDataPhrases: ActionCreator<PhrasesActionTypes> = (phrases: PhraseInterface[]) => {
    return {
        type: FIXED_DATA,
        payload: phrases
    }
}

export const updateSentPhrases: ActionCreator<PhrasesActionTypes> = (phrases: PhraseInterface[]) => {
    return {
        type: UPDATE_SENT,
        payload: phrases
    }
}

export const addToShownPhrases: ActionCreator<PhrasesActionTypes> = (phrase: PhraseInterface) => {
    return {
        type: ADD_TO_SHOWN_PHRASES,
        payload: phrase
    }
}

export const addToSentPhrases: ActionCreator<PhrasesActionTypes> = (phrase: PhraseInterface) => {
    return {
        type: ADD_TO_SENT_PHRASES,
        payload: phrase
    }
}

export const removeFromShownPhrases: ActionCreator<PhrasesActionTypes> = (phrase: PhraseInterface) => {
    return {
        type: REMOVE_FROM_SHOWN_PHRASES,
        payload: phrase
    }
}

export const removeFromSentPhrases: ActionCreator<PhrasesActionTypes> = (phrase: PhraseInterface) => {
    return {
        type: REMOVE_FROM_SENT_PHRASES,
        payload: phrase
    }
}

