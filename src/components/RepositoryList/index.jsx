/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 12:27:31
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 13:21:58
 */
import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import RepositoryListContext from '../../contexts/RepositoryListContext';
import Text from '../Text';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
	const navigate = useNavigate();
	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories?.edges?.map((edge) => edge.node)
		: [];
	
	const handlePress = (id) => {
		navigate(`/repository/${id}`);
	};

	const renderHeader = useMemo(() => {
		return <RepositoryListHeader />
	}, [])

	return (
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
		/>
	);
};

const RepositoryList = () => {
	const [order, setOrder] = useState({
		orderBy: 'CREATED_AT',
		orderDirection: 'DESC',
		searchKeyword: '',
	});
	const [menuName, setMenuName] = useState('Latest repositories');
	const navigate = useNavigate();
	const { repositories } = useRepositories(
		order.orderBy,
		order.orderDirection,
		order.searchKeyword
	);

	return (
		<RepositoryListContext.Provider value={{ menuName, setMenuName, setOrder }}>
			<RepositoryListContainer
				repositories={repositories}
				navigate={navigate}
			/>
		</RepositoryListContext.Provider>
	);
};

export default RepositoryList;
