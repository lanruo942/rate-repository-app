import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoryList from '../RepositoryList';
import SingleRepository from '../SingleRepository';

const Stack = createNativeStackNavigator();

const RepositoryStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Repositories List" component={RepositoryList} />
			<Stack.Screen name="Repository">
				{({ route }) => {
					return <SingleRepository id={route.params?.id} />;
				}}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

export default RepositoryStack;
