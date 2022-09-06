/*
 * @Author: Summer Lee
 * @Date: 2022-08-14 00:32:14
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-24 18:37:03
 */
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
	MD3LightTheme as DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import Main from './src/components/Main';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';

const theme = {
	...DefaultTheme,
	colors: {},
};

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
	return (
		<>
			<ApolloProvider client={apolloClient}>
				<AuthStorageContext.Provider value={authStorage}>
					<NavigationContainer>
						<PaperProvider theme={theme}>
							<Main />
						</PaperProvider>
					</NavigationContainer>
				</AuthStorageContext.Provider>
			</ApolloProvider>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
