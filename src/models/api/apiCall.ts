export interface ApiRoute {
	name: "create group" | "get data";
}

export interface CallApi {
	type: "POST";
	url: string;
	route: "create group" | "get data";
}
