import RepositoryListMenu from './RepositoryListMenu';
import RepositoryListSearch from './RepositoryListSearch';

const RepositoryListHeader = ({ setOrder }) => {
	return (
		<>
			<RepositoryListSearch setOrder={setOrder} />
			<RepositoryListMenu />
		</>
	);
};

export default RepositoryListHeader;
