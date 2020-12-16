import {StateGlobalInput} from "../../models/input/userInput";
import {ON_CHANGE} from "./constant";

export const onChange = (data: any): any => {
	console.log(data, "ini data<<<<<<");
	return {type: ON_CHANGE, payload: data, loading: false};
};
