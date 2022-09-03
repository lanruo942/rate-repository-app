import { Searchbar } from 'react-native-paper';
import React, { useState } from 'react';
import useRepositoryList from '../../hooks/useRepositoryList';
import { useDebouncedCallback } from 'use-debounce';

const RepositoryListSearch = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { setOrder } = useRepositoryList();

	const debSetOrder = useDebouncedCallback((query) => {
		setOrder((o) => {
			return {
				...o,
				searchKeyword: query,
			};
		});
	}, 500);

	const onChangeSearch = (query) => {
		setSearchQuery(query);
		debSetOrder(query);
	};

	return (
		<Searchbar
			placeholder="Search"
			onChangeText={onChangeSearch}
			value={searchQuery}
			style={{
				marginTop: 10,
				marginHorizontal: 15,
				backgroundColor: 'white',
			}}
		/>
	);
};

export default RepositoryListSearch;
