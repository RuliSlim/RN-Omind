import {DefaultTheme} from "react-native-paper";
import {Theme} from "react-native-paper/lib/typescript/types";

export const myTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "#009bd8",
	},
};
