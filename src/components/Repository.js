import { View } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryList/RepositoryItem';
import useRepository from '../hooks/useRepository';

const Repository = () => {
	const { id } = useParams();
	const { repository } = useRepository(id);

	const item = repository || {};

	return (
		<View>
			<RepositoryItem item={item} />
		</View>
	);
};

export default Repository;
