import { SAVE_QUOTE,SAVING_QUOTE,SAVED_QUOTE,SAVE_QUOTE_ERROR } from "../actions/const";
const initialState = {
  quotes: [
    
  ],
  loading:false,
  error:{}

};

const portadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUOTE:
      return { ...state, quotes: [...state.quotes, action.quote] };
    case SAVING_QUOTE:
      return { ...state, loading: true };
    case SAVED_QUOTE:
      return { ...state, loading: false };
    case SAVE_QUOTE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { portadaReducer };