/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 12:27:31
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 13:21:58
 */
import { FlatList, StyleSheet, View } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import Text from '../Text';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories?.edges?.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			renderItem={RepositoryItem}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={(item) => item.id}
		/>
	);
};

const RepositoryList = () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
