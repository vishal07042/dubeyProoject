import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Handle login logic here
		console.log("Login attempted");
	};

	return (
		<ThemedView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.keyboardAvoid}
				>
					<View style={styles.headerContainer}>
						<Image
							source={require("@/assets/images/icon.png")}
							style={styles.logo}
						/>
						<Text style={styles.title}>Welcome Back!</Text>
						<Text style={styles.subtitle}>
							Sign in to continue
						</Text>
					</View>

					<View style={styles.form}>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>Email</Text>
							<TextInput
								style={styles.input}
								placeholder="Enter your email"
								value={email}
								onChangeText={setEmail}
								keyboardType="email-address"
								autoCapitalize="none"
							/>
						</View>

						<View style={styles.inputContainer}>
							<Text style={styles.label}>Password</Text>
							<TextInput
								style={styles.input}
								placeholder="Enter your password"
								value={password}
								onChangeText={setPassword}
								secureTextEntry
							/>
						</View>

						<TouchableOpacity style={styles.forgotPassword}>
							<Text style={styles.forgotPasswordText}>
								Forgot Password?
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={handleLogin}
						>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>

						<View style={styles.signupContainer}>
							<Text style={styles.signupText}>
								Don't have an account?{" "}
							</Text>
							<TouchableOpacity>
								<Text style={styles.signupLink}>
									Sign Up
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollContainer: {
		flexGrow: 1,
	},
	keyboardAvoid: {
		flex: 1,
	},
	headerContainer: {
		alignItems: "center",
		paddingTop: 60,
		paddingBottom: 40,
	},
	logo: {
		width: 120,
		height: 120,
		marginBottom: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#4CAF50",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: "#666",
	},
	form: {
		padding: 20,
	},
	inputContainer: {
		marginBottom: 20,
	},
	label: {
		fontSize: 14,
		color: "#333",
		marginBottom: 8,
		fontWeight: "500",
	},
	input: {
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		padding: 15,
		fontSize: 16,
		borderWidth: 1,
		borderColor: "#e0e0e0",
	},
	forgotPassword: {
		alignSelf: "flex-end",
		marginBottom: 20,
	},
	forgotPasswordText: {
		color: "#4CAF50",
		fontSize: 14,
	},
	button: {
		backgroundColor: "#4CAF50",
		padding: 18,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	signupContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	signupText: {
		color: "#666",
	},
	signupLink: {
		color: "#4CAF50",
		fontWeight: "bold",
	},
});
