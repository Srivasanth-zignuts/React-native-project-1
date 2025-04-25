import PokemonCard from '@/components/PokemonCard';
import { SafeAreaView, Platform, StyleSheet, ScrollView } from 'react-native';

interface Charachter {
	name: string;
	image: any;
	type: string;
	hp: number;
	attack: number;
	moves: string[];
	weaknesses: string[];
}

export default function App() {
	const charmandorData: Charachter = {
		name: 'Charmandor',
		image: require('../assets/images/charmander.png'), // Replace with the actual image path
		type: 'Fire',
		hp: 78,
		attack: 84,
		moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
		weaknesses: ['Water', 'Rock'],
	};

	const squirtleData: Charachter = {
		name: 'Squirtle',
		image: require('../assets/images/squirtle.png'), // Replace with the actual image path
		type: 'Water',
		hp: 44,
		attack: 48,
		moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
		weaknesses: ['Electric', 'Grass'],
	};

	const bulbasaurData: Charachter = {
		name: 'Bulbasaur',
		image: require('../assets/images/bulbasaur.png'), // Replace with the actual image path
		type: 'Grass',
		hp: 45,
		attack: 100,
		moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
		weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
	};

	const pikachuData: Charachter = {
		name: 'Pikachu',
		image: require('../assets/images/pikachu.png'), // Replace with the actual image path
		type: 'Electric',
		hp: 35,
		attack: 55,
		moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
		weaknesses: ['Ground'],
	};

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<PokemonCard character={charmandorData} />
				<PokemonCard character={squirtleData} />
				<PokemonCard character={bulbasaurData} />
				<PokemonCard character={pikachuData} />
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
});
