import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface Charachter {
	name: string;
	image: any;
	type: string;
	hp: number;
	attack: number;
	moves: string[];
	weaknesses: string[];
}

const getTypeDetails = (type: string) => {
	switch (type.toLowerCase()) {
		case 'electric':
			return { borderColor: '#FFD700', emoji: '⚡️' };
		case 'water':
			return { borderColor: '#6493EA', emoji: '💧' };
		case 'fire':
			return { borderColor: '#FF5733', emoji: '🔥' };
		case 'grass':
			return { borderColor: '#66CC66', emoji: '🌿' };
		default:
			return { borderColor: '#A0A0A0', emoji: '❓' };
	}
};

export default function PokemonCard({ character }: { character: Charachter }) {
	const { borderColor, emoji } = getTypeDetails(character.type);

	return (
		<View style={styles.card}>
			<View style={styles.nameContainer}>
				<Text style={styles.name}>{character.name}</Text>
				<Text style={styles.hp}>
					<AntDesign
						name='heart'
						color='red'
						size={15}
					/>
					{character.hp}
				</Text>
			</View>

			<Text style={styles.attackContainer}>
				Attak Power : <Text style={styles.attack}> {character.attack}</Text>
			</Text>

			<Image
				source={character.image}
				style={{
					width: '100%',
					height: 200,
					resizeMode: 'contain',
					marginBottom: 20,
				}}
			/>

			<View style={styles.typeContainer}>
				<View style={[styles.badge, { borderColor }]}>
					<Text style={styles.typeEmoji}>{emoji}</Text>
					<Text style={styles.typeText}>{character.type}</Text>
				</View>
			</View>

			<View style={styles.movesContainer}>
				<Text style={styles.movesText}>
					Moves: {character.moves.join(', ')}
				</Text>
			</View>

			<View style={styles.weaknessContainer}>
				<Text style={styles.weaknessText}>
					Weakness: {character.weaknesses.join(', ')}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'lightblue',
		borderRadius: 16,
		borderWidth: 2,
		padding: 16,
		margin: 16,
		...Platform.select({
			ios: {
				shadowOffset: { width: 2, height: 2 },
				shadowColor: '#333',
				shadowOpacity: 0.2,
				shadowRadius: 4,
			},
			android: {
				elevation: 5,
			},
		}),
	},
	nameContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	hp: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	attack: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	attackContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 205,
		marginBottom: 40,
	},
	typeContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	badge: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 20,
		borderWidth: 4,
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	typeEmoji: {
		fontSize: 30,
		marginRight: 12,
	},
	typeText: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	movesContainer: {
		marginBottom: 12,
	},
	movesText: {
		fontSize: 15,
		fontWeight: '400',
	},
	weaknessContainer: {
		marginBottom: 8,
	},
	weaknessText: {
		fontSize: 15,
		fontWeight: '400',
	},
});
