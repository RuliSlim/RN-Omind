import React from "react";
import {BottomNavigation} from "react-native-paper";
import {Disccusion, Home, Live, Profile} from "../../screens";
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
	);
};

export default MyNavbar;
