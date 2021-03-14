import {
  REFRESH_FORM,
  HANDLE_INPUT,
  HANDLE_SUBMIT,
  HANDLE_PRIVACY,
  HANDLE_NEWS,
} from "./types";

export const refreshForm = () => ({
  type: REFRESH_FORM,
});
export const handlePrivacy = () => ({
  type: HANDLE_PRIVACY,
});
export const handleNews = () => ({
  type: HANDLE_NEWS,
});
export const handleInput = (data: any) => ({
  type: HANDLE_INPUT,
  payload: data,
});
export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});
