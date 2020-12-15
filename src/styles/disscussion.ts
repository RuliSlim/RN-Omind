import {StyleSheet} from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const stylesDiscussion = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: hp("5%"),
	},
	forms: {
		height: hp("45%"),
		width: wp("60%"),
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "flex-start",
	},
	uploadImage: {
		height: hp("10%"),
		width: hp("10%"),
		backgroundColor: "#c9ced4",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: wp("1%"),
	},
	containerUpload: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	bgcPicker: {
		backgroundColor: "#c9ced4",
	},
	picker: {
		width: wp("30%"),
		height: hp("5%"),
		borderRadius: wp("1%"),
	},
	input: {
		width: wp("60%"),
		height: hp("5%"),
		backgroundColor: "#c9ced4",
		borderRadius: wp("1%"),
	},
	button: {
		width: wp("60%"),
	},
});
