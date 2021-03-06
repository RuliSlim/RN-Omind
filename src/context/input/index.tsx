/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
import React from "react";
import {CallApi, ResultApi} from "../../models/api/apiCall";
import {
	UserInput,
	ActionInput,
	GlobalContext,
	initialData,
} from "../../models/input/userInput";
import {callApi} from "../../utils/api";
import {globalInfoContext} from "../info";
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
	const {action} = React.useContext(globalInfoContext);
	const {changeState} = action;
	// eslint-disable-next-line prettier/prettier
	const [values, dispatchValues] = React.useReducer<(state: UserInput, action: ActionInput) => UserInput>(inputReducer, initialData);

	const handleChange = (value: keyof UserInput) => (text: string) => {
		dispatchValues({type: value, payload: text});
	};

	const handleSubmit = (type: CallApi) => async () => {
		let data: {} = {};

		switch (type.route) {
			case "create group": {
				data = {
					kelas_id: values.level,
					nama: values.nameGroup,
					thumbnail: values.thumbnail,
				};
			}
		}

		const response = await callApi(type, data);
		const result: ResultApi = await response.json();
		if (!result.success) {
			changeState(result.errors);
		}
	};

	return (
		<globalInputContext.Provider
			value={{values, action: {handleChange, handleSubmit}}}>
			{children}
		</globalInputContext.Provider>
	);
};
