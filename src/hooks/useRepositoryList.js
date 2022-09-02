import { useContext } from 'react';
import RepositoryListContext from '../contexts/RepositoryListContext';

const useRepositoryList = () => {
	return useContext(RepositoryListContext);
};

export default useRepositoryList;
