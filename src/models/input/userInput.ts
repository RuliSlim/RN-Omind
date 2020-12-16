import {CallApi} from "../api/apiCall";

export interface UserInput {
	nameGroup: string;
	level: "1" | "2" | "3";
	thumbnail: string;
}

export interface ActionInput {
	type: keyof UserInput;
	payload: string;
}

export interface StateGlobalInput {
	fields: UserInput;
	loading: boolean;
	error?: Error;
}

export interface GlobalContext {
	values: UserInput;
	action: {
		handleChange: (value: keyof UserInput) => (text: string) => void;
		handleSubmit: (type: CallApi) => () => void;
	};
}

export const initialData: UserInput = {
	level: "1",
	nameGroup: "",
	thumbnail: "",
};
