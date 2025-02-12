import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function AddProduct() {
	const [selectedType, setSelectedType] = useState("");

	const pickImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});

			if (!result.canceled) {
				// Handle selected image
				console.log(result.assets[0].uri);
			}
		} catch (error) {
			console.log("Error picking image:", error);
		}
	};

	return (
		<ThemedView style={styles.container}>
			<ThemedText style={styles.title}>Add Product</ThemedText>

			{/* Form Fields */}
			<View style={styles.form}>
				<Text style={styles.label}>Product Name</Text>
				<TextInput style={styles.input} placeholder='Full Name' />

				<Text style={styles.label}>Email Address</Text>
				<TextInput
					style={styles.input}
					placeholder='Email Address'
					keyboardType='email-address'
				/>

				<Text style={styles.label}>Phone Number</Text>
				<TextInput
					style={styles.input}
					placeholder='Phone Number'
					keyboardType='phone-pad'
				/>

				<Text style={styles.label}>Location</Text>
				<TextInput style={styles.input} placeholder='Location' />

				<Text style={styles.label}>Price</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter Price'
					keyboardType='numeric'
				/>

				<Text style={styles.label}>Date</Text>
				<TextInput style={styles.input} placeholder='Select date' />
				<Text style={styles.label}>Upload Image</Text>
				<TouchableOpacity
					style={[
						styles.input,
						{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							height: 100,
							backgroundColor: "#f0f0f0",
							borderStyle: "dashed",
							borderWidth: 1,
							borderColor: "#ccc",
						},
					]}
					onPress={pickImage}
				>
					<Text style={{ color: "#666" }}>
						Tap to upload product image
					</Text>
				</TouchableOpacity>

				<Text style={styles.label}>Select Type</Text>
				<Picker
					selectedValue={selectedType}
					style={styles.input}
					onValueChange={(itemValue) => setSelectedType(itemValue)}
				>
					<Picker.Item label='Click to select' value='' />
					<Picker.Item label='Type 1' value='type1' />
					<Picker.Item label='Type 2' value='type2' />
					{/* Add more Picker.Item components as needed */}
				</Picker>
			</View>

			{/* Submit Button */}
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Post</Text>
			</TouchableOpacity>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "green",
	},
	form: {
		marginBottom: 20,
	},
	label: {
		marginBottom: 5,
		fontWeight: "bold",
	},
	input: {
		backgroundColor: "#e0e0e0",
		padding: 10,
		borderRadius: 5,
		marginBottom: 15,
	},
	button: {
		backgroundColor: "green",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
});
