import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen() {
	return (
		<ThemedView style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<ThemedText style={styles.headerTitle}>Rent</ThemedText>
				<View style={styles.headerIcons}>
					<FontAwesome name='bell' size={24} color='black' />
					<FontAwesome name='bars' size={24} color='black' />
				</View>
			</View>

			{/* Profile and Add Product Cards */}
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<FontAwesome name='user-circle' size={50} color='black' />
					<ThemedText style={styles.cardText}>PROFILE</ThemedText>
				</View>
				<View style={styles.card}>
					<FontAwesome name='plus-square' size={50} color='black' />
					<ThemedText style={styles.cardText}>ADD PRODUCT</ThemedText>
				</View>
			</View>

			{/* Product Card */}
			<View style={styles.productCard}>
				<Image
					source={{ uri: "https://example.com/tractor.jpg" }}
					style={styles.productImage}
				/>
				<View style={styles.productInfo}>
					<ThemedText style={styles.productTitle}>Tractor</ThemedText>
					<ThemedText style={styles.productPrice}>
						2500/day
					</ThemedText>
					<ThemedText>Available Date - 05/3/25</ThemedText>
					<ThemedText>📍 Ujjain</ThemedText>
					<TouchableOpacity style={styles.editButton}>
						<Text style={styles.editButtonText}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: "bold",
	},
	headerIcons: {
		flexDirection: "row",
		width: 60,
		justifyContent: "space-between",
	},
	cardContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 20,
	},
	card: {
		backgroundColor: "#4CAF50",
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
	},
	cardText: {
		color: "#fff",
		marginTop: 10,
	},
	productCard: {
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	productImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginRight: 15,
	},
	productInfo: {
		flex: 1,
	},
	productTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	productPrice: {
		color: "green",
		fontWeight: "bold",
		marginBottom: 5,
	},
	editButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	editButtonText: {
		color: "#fff",
		textAlign: "center",
	},
});
