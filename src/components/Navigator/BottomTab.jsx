import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useUser from '../../hooks/useUser';
import theme from '../../theme';
import Logout from '../Logout';
import MyReviews from '../MyReviews';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import RepositoryStack from './RepositoryStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { me } = useUser();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Repositories') {
						iconName = focused
							? 'ios-information-circle'
							: 'ios-information-circle-outline';
					} else if (route.name === 'Sign in') {
						iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
					} else if (route.name === 'Sign up') {
						iconName = focused ? 'ios-ribbon' : 'ios-ribbon-outline';
					} else if (route.name === 'My reviews') {
						iconName = focused
							? 'ios-chatbubble-ellipses'
							: 'ios-chatbubble-ellipses-outline';
					} else if (route.name === 'Logout') {
						iconName = focused ? 'ios-log-out' : 'ios-log-out-outline';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.textSecondary,
			})}
		>
			<Tab.Screen name="Repositories" component={RepositoryStack} />
			{me ? (
				<>
					<Tab.Screen name="My reviews" component={MyReviews} />
					<Tab.Screen name="Logout" component={Logout} />
				</>
			) : (
				<>
					<Tab.Screen name="Sign in" component={SignIn} />
					<Tab.Screen name="Sign up" component={SignUp} />
				</>
			)}
		</Tab.Navigator>
	);
};

export default BottomTab;
