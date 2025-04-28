import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import '../global.css';

export default function hello() {
	return (
		<View className='flex-1 items-center justify-center bg-cyan-400'>
			<Text className=''>Hello World</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
