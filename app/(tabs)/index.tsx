import {
	Image,
	StyleSheet,
	Platform,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
	return (
    
		<ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.welcomeText}>Rent your equipment</Text>
          </View>
          <View>
            <Text style={styles.locationText}>notification</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationText}>==</Text>
          </TouchableOpacity>
        </View>
      </View>
			<View style={styles.filterContainerbg}>
				<TextInput
					style={styles.searchBar}
					placeholder='Search equipment...'
				/>

				<View style={styles.filterContainer}>
					<TouchableOpacity style={styles.filterButton}>
						<Text>All Equipment</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.filterButton}>
						<Text>Tractors</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.filterButton}>
						<Text>Harvesters</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.card}>
				<Image
					source={require("@/assets/images/icon.png")}
					style={styles.cardImage}
				/>
				<View style={styles.cardContent}>
					<Text style={styles.cardTitle}>Tractor</Text>
					<Text>Available Date - 05/3/25</Text>
					<Text>Ujjain</Text>
					<Text style={styles.price}>2500/day</Text>
					<TouchableOpacity style={styles.bookButton}>
						<Text style={styles.bookButtonText}>Book Now</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.separator} />
				<View style={styles.cardContent}>
					<Text style={styles.cardTitle}>Tractor</Text>
					<Text>Available Date - 05/3/25</Text>
					<Text>Ujjain</Text>
					<Text style={styles.price}>2500/day</Text>
					<TouchableOpacity style={styles.bookButton}>
						<Text style={styles.bookButtonText}>Book Now</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* Repeat the card for more items */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	searchBar: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 8,
		marginBottom: 16,
    backgroundColor: "#fff",
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 16,
		
	},
	filterButton: {
		padding: 18,
		backgroundColor: "#e0e0e0",
		borderRadius: 16,
		
	},
	card: {
		flexDirection: "column",
		backgroundColor: "#fff",
		borderRadius: 8,
		overflow: "hidden",
		marginBottom: 16,
		elevation: 2,
	},
	cardImage: {
		width: 100,
		height: 100,
	},
	cardContent: {
		padding: 8,
		flex: 1,
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 16,
	},
	price: {
		color: "green",
		fontWeight: "bold",
	},
	bookButton: {
		backgroundColor: "green",
		padding: 8,
		borderRadius: 8,
		marginTop: 8,
	},
	bookButtonText: {
		color: "#fff",
		textAlign: "center",
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	separator: {
		height: 9,
		backgroundColor: "#000",
		marginVertical: 8,
	},
  filterContainerbg: {
    backgroundColor: "#4CAF50",
    borderRadius: 16,
    padding: 8,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  }   
});
