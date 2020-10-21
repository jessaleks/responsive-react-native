import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Header Component</Text>
		</View>
		)
}


const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: "15%",
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee' 
	},
	text: {
		fontSize: 20,
		color: "#000"
	}
})