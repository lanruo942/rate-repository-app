/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 12:27:31
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 13:21:58
 */
import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import RepositoryListContext from '../../contexts/RepositoryListContext';
import useRepositories from '../../hooks/useRepositories';
import ItemSeparator from '../ItemSeparator';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';


export const RepositoryListContainer = ({ repositories, onEndReach }) => {
	const navigation = useNavigation();
	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories?.edges?.map((edge) => edge.node)
		: [];

	const handlePress = (id) => {
		/* navigate(`/repository/${id}`); */
		navigation.navigate('Repository', { id });
	};

	const renderHeader = useMemo(() => {
		return <RepositoryListHeader />;
	}, []);

	return (
		<>
			<FlatList
				data={repositoryNodes}
				renderItem={({ item }) => (
					<Pressable onPress={() => handlePress(item.id)}>
						<RepositoryItem item={item} />
					</Pressable>
				)}
				ItemSeparatorComponent={ItemSeparator}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={renderHeader}
				onEndReached={onEndReach}
				onEndReachedThreshold={0.5}
			/>
		</>
	);
};

const RepositoryList = () => {
	const [order, setOrder] = useState({
		orderBy: 'CREATED_AT',
		orderDirection: 'DESC',
		searchKeyword: '',
		first: 8,
	});
	const { repositories, fetchMore } = useRepositories(order);

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<RepositoryListContext.Provider value={{ setOrder }}>
			<RepositoryListContainer
				repositories={repositories}
				onEndReach={onEndReach}
			/>
		</RepositoryListContext.Provider>
	);
};

export default RepositoryList;
