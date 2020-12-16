import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View} from "react-native";
import {Button} from "react-native-paper";
import {stylesDiscussion} from "../../styles/disscussion";

const HomeDiscussion = () => {
	const navigation = useNavigation();
	const handlePress = () => {
		navigation.navigate("Buat Grup");
	};

	return (
		<View style={stylesDiscussion.container}>
			<Button mode="contained" onPress={handlePress}>
				Buat group
			</Button>
		</View>
	);
};

export default HomeDiscussion;
