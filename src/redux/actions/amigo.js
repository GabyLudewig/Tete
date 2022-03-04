import { GET_AMIGO } from "./const";

const getAmigo = (payload) => {
  return {
    type: GET_AMIGO,
    loading: true,
    amigo: {},
    payload: payload
  };
};

export { getAmigo };
