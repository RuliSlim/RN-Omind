import React from "react";
import {
	UserInput,
	ActionInput,
	GlobalContext,
	initialData,
} from "../../models/input/userInput";
import inputReducer from "./reducers";

interface Props {
	children: React.ReactNode;
}

export const globalInputContext = React.createContext<GlobalContext>({
	values: initialData,
	action: {
		handleChange: () => (): void => undefined,
		handleSubmit: () => (): void => undefined,
	},
});

export const GlobalInputProvider = (props: Props) => {
	const {children} = props;
	// eslint-disable-next-line prettier/prettier
	const [values, dispatchValues] = React.useReducer<(state: UserInput, action: ActionInput) => UserInput>(inputReducer, initialData);

	const handleChange = (value: keyof UserInput) => (text: string) => {
		console.log(text, value, "ini hasil>>>>>>>");
		dispatchValues({type: value, payload: text});
	};

	const handleSubmit = (type: string) => () => {
		if (type === "create group") {
			console.log(values, "ini masuk di handleSubmit");
		}

		console.log(type, "masukkkkkka.sdas/fasf.as,");
	};

	return (
		<globalInputContext.Provider
			value={{values, action: {handleChange, handleSubmit}}}>
			{children}
		</globalInputContext.Provider>
	);
};
