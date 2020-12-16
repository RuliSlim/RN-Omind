export interface InfoModel {
	isError: boolean;
	message: string;
}

export interface ActionInfo {
	type: keyof InfoModel;
	payload: boolean | string;
}

export interface StateGlobalInput {
	fields: InfoModel;
	loading: boolean;
	error?: Error;
}

export interface GlobalInfoContext {
	values: InfoModel;
	action: {
		changeState: (message: string) => void;
	};
}

export const initialData: InfoModel = {
	isError: false,
	message: "",
};
