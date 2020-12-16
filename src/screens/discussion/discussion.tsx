import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, HeaderBackButton} from "@react-navigation/stack";
import React from "react";
import {IconButton, useTheme} from "react-native-paper";
import {GlobalInputProvider} from "../../context/input";
import CreateGroup from "./createGroup";
import HomeDiscussion from "./home";

const Stack = createStackNavigator();

const Discussion = () => {
	const {colors} = useTheme();
	return (
		<GlobalInputProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: colors.primary,
						},
						headerLeft: (props) => (
							<HeaderBackButton
								{...props}
								backImage={() => (
									<IconButton icon="chevron-left" color={props.tintColor} />
								)}
							/>
						),
					}}>
					<Stack.Screen
						name="diskusi"
						component={HomeDiscussion}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Buat Grup"
						component={CreateGroup}
						options={{headerTintColor: colors.background}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GlobalInputProvider>
	);
};

export default Discussion;
