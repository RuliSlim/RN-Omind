import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {GlobalInputProvider} from "../../context/input";
import CreateGroup from "./createGroup";
import HomeDiscussion from "./home";

const Stack = createStackNavigator();

const Discussion = () => {
	return (
		<GlobalInputProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="diskusi"
						component={HomeDiscussion}
						options={{headerShown: false}}
					/>
					<Stack.Screen name="create group" component={CreateGroup} />
				</Stack.Navigator>
			</NavigationContainer>
		</GlobalInputProvider>
	);
};

export default Discussion;
