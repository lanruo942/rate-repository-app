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
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
	console.log(Constants.manifest)
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<Main />
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
