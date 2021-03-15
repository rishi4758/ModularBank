import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/reducer";
import Form from "./form";
import {
  handleInput,
  handleNews,
  handlePrivacy,
  handleSubmit,
} from "../../store/action";
const Main: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [checkRequiredField, setCheckRequiredField] = useState(false);
  const data = useSelector<store, store>((state) => state);
  useEffect(() => {
    dispatch(handleSubmit());
  }, [checkRequiredField]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCheckRequiredField(!checkRequiredField);
    if (event.target.name === "privacy") dispatch(handlePrivacy());
    if (event.target.name === "news") dispatch(handleNews());
    else {
      dispatch(handleInput({ [event.target.name]: event.target.value }));
    }
  };
  const submitForm = (event: FormEvent): void => {
    event.preventDefault();
    history.push("/success");
  };
  return (
    <Form
      handleChange={handleChange}
      submitForm={submitForm}
      isSubmit={data.isSubmit}
    />
  );
};

export default Main;
