import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	CheckBox,
	Button,
	Picker,
	StyleSheet,
} from "react-native";

const Cart = () => {
	const [onlinePayment, setOnlinePayment] = useState(false);
	const [cashOnDelivery, setCashOnDelivery] = useState(false);
	const [selfOption, setSelfOption] = useState(false);
	const [deliveryOption, setDeliveryOption] = useState(false);
	const [paymentType, setPaymentType] = useState("");

	const handleConfirmBooking = () => {
		// Handle booking confirmation logic here
		console.log("Booking confirmed");
	};

	return (
		<View style={styles.container}>
			<Image source={{ uri: "image_url" }} style={styles.image} />
			<Text style={styles.title}>Tractor</Text>
			<Text>Description and specifications of the equipment.</Text>
			<Text>Available Date- 05/3/25</Text>
			<Text>Ujjain</Text>

			<Text style={styles.sectionTitle}>Payment Options</Text>
			<CheckBox value={onlinePayment} onValueChange={setOnlinePayment} />
			<Text>Online Payment</Text>
			{onlinePayment && (
				<Picker
					selectedValue={paymentType}
					onValueChange={(itemValue) => setPaymentType(itemValue)}
				>
					<Picker.Item label='Select type' value='' />
					<Picker.Item label='Type 1' value='type1' />
					<Picker.Item label='Type 2' value='type2' />
				</Picker>
			)}
			<CheckBox
				value={cashOnDelivery}
				onValueChange={setCashOnDelivery}
			/>
			<Text>Cash on Delivery</Text>

			<Text style={styles.sectionTitle}>Additional Options</Text>
			<CheckBox value={selfOption} onValueChange={setSelfOption} />
			<Text>Self</Text>
			<CheckBox
				value={deliveryOption}
				onValueChange={setDeliveryOption}
			/>
			<Text>Delivery</Text>

			<Text style={styles.sectionTitle}>Price Breakdown</Text>
			<Text>Rental Price: 2500</Text>
			<Text>Additional Fees: 0</Text>
			<Text>Total: 2500</Text>

			<Button title='Confirm Booking' onPress={handleConfirmBooking} />
			<Button title='Cancel' onPress={() => console.log("Cancelled")} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	sectionTitle: {
		fontSize: 18,
		marginTop: 20,
	},
});

export default Cart;
