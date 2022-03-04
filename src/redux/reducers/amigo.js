import {GET_AMIGO,GET_AMIGO_SUCCESS,GET_AMIGO_ERROR} from "../actions/const";

const initialState = {
  amigo: {},
  loading: false,
  error: false,
};

const amigoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AMIGO:
      return { ...state, loading: true, tecler: action.payload };
    case GET_AMIGO_SUCCESS:
      return { ...state, loading: false, amigo: action.payload, error: false  };
    case GET_AMIGO_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { amigoReducer };
