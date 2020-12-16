/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
import React from "react";
import {
	ActionInfo,
	GlobalInfoContext,
	InfoModel,
	initialData,
} from "../../models/info/info";
import infoReducer from "./reducer";

interface Props {
	children: React.ReactNode;
}

export const globalInfoContext = React.createContext<GlobalInfoContext>({
	values: initialData,
	action: {
		changeState: () => (): void => undefined,
	},
});

export const GlobalInfo = (props: Props) => {
	const {children} = props;
	// eslint-disable-next-line prettier/prettier
	const [values, dispatchValues] = React.useReducer<(state: InfoModel, action: ActionInfo) => InfoModel>(infoReducer, initialData);

	const handleChange = (message: string) => {
		dispatchValues({type: "isError", payload: !values.isError});
		dispatchValues({type: "message", payload: message});
	};

	return (
		<globalInfoContext.Provider
			value={{values, action: {changeState: handleChange}}}>
			{children}
		</globalInfoContext.Provider>
	);
};
