import {
  RESET,
  INCREMENT,
  DECREMENT,
} from './SignUpActionTypes';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

export type FormField = "name" | "image" | "dob" | "email" | "number" | "male";

export const setFormValue = (field: FormField, value: any) => ({
	type: "FORM_SET_TEXT",
	field,
	value
});