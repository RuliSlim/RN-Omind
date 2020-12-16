/* eslint-disable indent */
import {ActionInput, UserInput} from "../../models/input/userInput";

export default function inputReducer(
	state: UserInput,
	action: ActionInput,
): UserInput {
	switch (action.type) {
		case "level":
		case "nameGroup":
		case "thumbnail": {
			return {...state, [action.type]: action.payload};
		}
		default:
			return state;
	}
}
