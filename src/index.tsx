/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {Provider} from "react-native-paper";
import MyNavbar from "./components/bottomNavbar";
import {GlobalInfo} from "./context/info";

const App = () => {
	return (
		<Provider>
			<GlobalInfo>
				<MyNavbar />
			</GlobalInfo>
		</Provider>
	);
};

export default App;
