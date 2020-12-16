import {CallApi} from "../models/api/apiCall";

export const callApi = async (props: CallApi, data?: any) => {
	const {type, url} = props;
	const token = "userToken";

	const option = {
		"Content-Type": "application/json",
		...(url !== "loginURL" &&
			url !== "registerURL" && {Authorization: `Token ${token}`}),
	};

	const response = await fetch(url, {
		method: type,
		headers: option,
		body: JSON.stringify(data),
	});

	return response;
};
