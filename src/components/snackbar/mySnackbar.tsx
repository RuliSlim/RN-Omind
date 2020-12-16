import * as React from "react";
import {Snackbar} from "react-native-paper";
import {globalInfoContext} from "../../context/info";

const MySnackbar = () => {
	const {values, action} = React.useContext(globalInfoContext);
	const {changeState} = action;

	const onDismissSnackBar = () => changeState("");

	return (
		<Snackbar visible={values.isError} onDismiss={onDismissSnackBar}>
			{values.message}
		</Snackbar>
	);
};

export default MySnackbar;
