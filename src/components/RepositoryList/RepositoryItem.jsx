/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 12:27:42
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 22:48:21
 */
import { Image, Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.backgroundColors.white,
		padding: 15,
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexColumn: {
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'center',
		paddingVertical: 15,
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	mainInfo: {
		flexShrink: 1,
		flexDirection: 'column',
		overflow: 'hidden',
		paddingLeft: 20,
	},
	title: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
	},
	description: {
		color: theme.colors.textSecondary,
		marginVertical: 5,
		flexShrink: 1,
	},
	language: {
		color: theme.colors.white,
		backgroundColor: theme.backgroundColors.primary,
		borderRadius: 3,
		overflow: 'hidden',
		padding: 5,
		alignSelf: 'flex-start',
	},
	counts: {
		fontWeight: theme.fontWeights.bold,
	},
	button: {
		color: theme.colors.white,
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		paddingVertical: 15,
		borderRadius: 3,
		overflow: 'hidden',
	},
});

const RepositoryItem = ({ item }) => {
	const thousandsFormat = (num) => {
		if (+num < 1000) {
			return num;
		}

		num = num / 1000 + '';
		num = num.match(/^\d+(?:\.?\d?)/);

		return num + 'k';
	};

	const stars = thousandsFormat(item.stargazersCount);
	const forks = thousandsFormat(item.forksCount);
	const review = thousandsFormat(item.reviewCount);

	const handlePress = async (url) => {
		try {
			await Linking.openURL(url);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container} testID="repositoryItem">
			<View style={styles.flexRow}>
				<Image
					style={styles.avatar}
					source={{ uri: item.ownerAvatarUrl }}
					testID="repositoryAvatar"
				/>
				<View style={styles.mainInfo}>
					<Text style={styles.title}>{item.fullName}</Text>
					<Text style={styles.description}>{item.description}</Text>
					<Text style={styles.language}>{item.language}</Text>
				</View>
			</View>
			<View style={styles.flexRow}>
				<View style={styles.flexColumn}>
					<Text style={styles.counts}>{stars}</Text>
					<Text style={styles.types}>Stars</Text>
				</View>
				<View style={styles.flexColumn}>
					<Text style={styles.counts}>{forks}</Text>
					<Text style={styles.types}>Forks</Text>
				</View>
				<View style={styles.flexColumn}>
					<Text style={styles.counts}>{review}</Text>
					<Text style={styles.types}>Reviews</Text>
				</View>
				<View style={styles.flexColumn}>
					<Text style={styles.counts}>{item.ratingAverage}</Text>
					<Text style={styles.types}>Rating</Text>
				</View>
			</View>
			<View>
				{item.url && (
					<Pressable
						onPress={() => handlePress(item.url)}
						style={({ pressed }) => [
							{
								backgroundColor: pressed
									? theme.backgroundColors.grey
									: theme.backgroundColors.primary,
							},
						]}
					>
						<Text style={styles.button}>Open in Github</Text>
					</Pressable>
				)}
			</View>
		</View>
	);
};

export default RepositoryItem;
