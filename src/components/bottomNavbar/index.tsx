import React from "react";
import {BottomNavigation} from "react-native-paper";
import {Disccusion, Home, Live, Profile} from "../../screens";
import MySnackbar from "../snackbar/mySnackbar";
import routesContent from "./routes.json";

interface Routes {
	key: string;
	title: string;
	icon?: string;
	color?: string;
}

const MyNavbar = () => {
	const [index, setIndex] = React.useState<number>(0);
	const [routes] = React.useState<Routes[]>(routesContent);

	const renderScene = BottomNavigation.SceneMap({
		home: Home,
		live: Live,
		diskusi: Disccusion,
		profile: Profile,
	});

	return (
		<React.Fragment>
			<BottomNavigation
				navigationState={{index, routes}}
				onIndexChange={setIndex}
				renderScene={renderScene}
				inactiveColor="#000"
				activeColor="#87ceeb"
				labeled={true}
				barStyle={{backgroundColor: "#fff"}}
				shifting={false}
			/>
			<MySnackbar />
		</React.Fragment>
	);
};

export default MyNavbar;
