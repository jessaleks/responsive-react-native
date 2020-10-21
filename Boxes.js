import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native'


export default function Boxes() {
	let boxesArray = [];

	for (var i = 0; i < 5; i++) {
			boxesArray.push(
				<View style={styles.box}>
					<View style={styles.inner} key={Math.floor(Math.random() * 100)}>
						<Text>Box {i+1}</Text>
					</View>
				</View>
				)
		}

	return (
		<View style={styles.container}>
			{boxesArray}
		</View>
	)
}
// getting window's size. You may also get device's width instead
// You can do this by calling Dimensions.get("screen")
// like this: const screen = Dimensions.get("screen")
const window = Dimensions.get('window'); 

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '85%',
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	box: {
		width: window.width < 320 ? "100%" : "49.5%", // here's the magic
		height: '50%',
		padding: 5,
		margin: 1
	},
	inner: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center'

	}
})