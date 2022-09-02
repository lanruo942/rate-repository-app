import { Searchbar } from 'react-native-paper';
import React, { useState } from 'react';
import useRepositoryList from '../../hooks/useRepositoryList';

const RepositoryListSearch = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { setOrder } = useRepositoryList();

	const onChangeSearch = (query) => {
		setSearchQuery(query);
		setOrder((o) => {
			return {
				...o,
				searchKeyword: query,
			};
		});
	};

	return (
		<Searchbar
			placeholder="Search"
			onChangeText={onChangeSearch}
			value={searchQuery}
			style={{
				marginTop: 10,
				marginHorizontal: 15,
				backgroundColor: 'white'
			}}
		/>
	);
};

export default RepositoryListSearch;
