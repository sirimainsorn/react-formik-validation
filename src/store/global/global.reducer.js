import { GlobalConstant } from "./global.constant";

export const GlobalReducer = (
  state = {
    formCodeData: {
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  action
) => {
  switch (action.type) {
    case GlobalConstant.CHANGE_FORM_CODE_DATA:
      return {
        ...state,
        formCodeData: {
          ...state.formCodeData,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
};
