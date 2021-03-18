import {
  HANDLE_INPUT,
  HANDLE_NEWS,
  HANDLE_PRIVACY,
  HANDLE_SUBMIT,
  REFRESH_FORM,
} from "./types";
export interface store {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    company: string;
    industry: string;
    country: string;
    operatingGeography: string;
    about: string;
  };
  isPrivacy: boolean;
  isNews: boolean;
  isSubmit: boolean;
}
const initState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    industry: "",
    country: "",
    operatingGeography: "",
    about: "",
  },
  isPrivacy: false,
  isSubmit: false,
  isNews: false,
};

export default function reducer(state: store = initState, action: any) {
  switch (action.type) {
    case HANDLE_INPUT:
      if (state.user.industry === "") {
        return {
          ...state,
          user: { ...state.user, industry: "Banking", ...action.payload },
        };
      }
      return { ...state, user: { ...state.user, ...action.payload } };
    case HANDLE_SUBMIT:
      if (
        state.isPrivacy &&
        state.user.firstName &&
        state.user.email &&
        state.user.company &&
        state.user.country &&
        state.user.industry
      ) {
        return { ...state, isSubmit: true };
      }
      return { ...state, isSubmit: false };
    case HANDLE_PRIVACY:
      return {
        ...state,
        isPrivacy: !state.isPrivacy,
      };

    case HANDLE_NEWS:
      return { ...state, isNews: !state.isNews };
    case REFRESH_FORM:
      return {
        ...state,
        user: {},
        isPrivacy: false,
        isSubmit: false,
        isNews: false,
      };
    default:
      return state;
  }

  return state;
}
