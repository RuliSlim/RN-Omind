import React from "react";
import {Picker} from "@react-native-picker/picker";
import {TextInput, View} from "react-native";
import {Button, IconButton, Text} from "react-native-paper";
import {globalInputContext} from "../../context/input";
import {stylesDiscussion} from "../../styles/disscussion";
import {createGroupUrl} from "../../libs/url";

const CreateGroup = () => {
	const {values, action} = React.useContext(globalInputContext);
	const {handleChange, handleSubmit} = action;

	return (
		<View style={stylesDiscussion.container}>
			<View style={stylesDiscussion.forms}>
				<View style={stylesDiscussion.containerUpload}>
					<View style={stylesDiscussion.uploadImage}>
						<IconButton icon="camera" />
					</View>
					<Text>Tambahkan foto grup</Text>
				</View>
				<TextInput
					style={stylesDiscussion.input}
					defaultValue="Nama Grup"
					onChangeText={handleChange("nameGroup")}
					value={values.nameGroup}
				/>
				<View style={stylesDiscussion.bgcPicker}>
					<Picker
						selectedValue={values.level}
						style={stylesDiscussion.picker}
						//@ts-ignore
						onValueChange={handleChange("level")}
						mode="dropdown">
						<Picker.Item label="Jenjang" value="1" />
						<Picker.Item label="1" value="1" />
						<Picker.Item label="2" value="2" />
						<Picker.Item label="3" value="3" />
					</Picker>
				</View>
				<Button
					mode="contained"
					style={stylesDiscussion.button}
					onPress={handleSubmit({
						type: "POST",
						url: createGroupUrl,
						route: "create group",
					})}>
					Buat Grup
				</Button>
			</View>
		</View>
	);
};

export default CreateGroup;
