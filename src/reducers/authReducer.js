import produce from "immer";
import Immutable from "seamless-immutable";
import { signInRoutine } from "../util/routines";

const INITIAL_STATE = Immutable({
  error: null,
  isLoading: false,
});

export const reducer = (state = INITIAL_STATE, action = {}) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case signInRoutine.TRIGGER:
        draft.isLoading = true;
        break;
      case signInRoutine.SUCCESS: {
        break;
      }
      case signInRoutine.FAILURE:
        break;
      case signInRoutine.FULFILL:
        return draft.merge({ isLoading: false });
      default:
        return draft;
    }
  });
};
