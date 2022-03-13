import { GlobalConstant } from "./global.constant";

export const GlobalReducer = (
  state = {
    formData: {
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
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
};
