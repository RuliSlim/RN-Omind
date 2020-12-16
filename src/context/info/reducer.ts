/* eslint-disable indent */
import {ActionInfo, InfoModel} from "../../models/info/info";

export default function infoReducer(
	state: InfoModel,
	action: ActionInfo,
): InfoModel {
	switch (action.type) {
		case "isError":
		case "message": {
			return {...state, [action.type]: action.payload};
		}
		default:
			return state;
	}
}
