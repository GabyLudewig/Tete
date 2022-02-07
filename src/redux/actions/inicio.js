import { SAVE_QUOTE, SAVING_QUOTE, SAVED_QUOTE } from "./const";

const saving = () => {
  return {
    type: SAVING_QUOTE,
    loading: true,
  };
};

const saved = () => {
  return {
    type: SAVED_QUOTE,
    loading: false,
  };
};

const save = (quote) => {
  return {
    type: SAVE_QUOTE,
    quote: quote,
    loading: false,
  };
};

export { save, saving, saved };