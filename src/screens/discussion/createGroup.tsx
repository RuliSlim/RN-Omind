import {Picker} from "@react-native-picker/picker";
import React from "react";
import {TextInput, View} from "react-native";
import {Button, IconButton, Text} from "react-native-paper";
import {stylesDiscussion} from "../../styles/disscussion";

const CreateGroup = () => {
	const [level, setLevel] = React.useState<string>("Jenjang");

	return (
		<View style={stylesDiscussion.container}>
			<View style={stylesDiscussion.forms}>
				<View style={stylesDiscussion.containerUpload}>
					<View style={stylesDiscussion.uploadImage}>
						<IconButton icon="camera" />
					</View>
					<Text>Tambahkan foto grup</Text>
				</View>
				<TextInput style={stylesDiscussion.input} defaultValue="Nama Grup" />
				<View style={stylesDiscussion.bgcPicker}>
					<Picker
						selectedValue={level}
						style={stylesDiscussion.picker}
						onValueChange={(itemValue) => setLevel(itemValue.toLocaleString())}
						mode="dropdown">
						<Picker.Item label="Jenjang" value="Jenjang" />
						<Picker.Item label="SMA" value="SMA" />
						<Picker.Item label="SMP" value="SMA" />
						<Picker.Item label="SD" value="SMA" />
					</Picker>
				</View>
				<Button mode="contained" style={stylesDiscussion.button}>
					Buat Grup
				</Button>
			</View>
		</View>
	);
};

export default CreateGroup;
