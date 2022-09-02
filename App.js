/*
 * @Author: Summer Lee
 * @Date: 2022-08-14 00:32:14
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-24 18:37:03
 */
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
	}
}

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<AuthStorageContext.Provider value={authStorage}>
						<PaperProvider theme={theme}>
							<Main />
						</PaperProvider>
					</AuthStorageContext.Provider>
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
