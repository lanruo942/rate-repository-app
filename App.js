/*
 * @Author: Summer Lee
 * @Date: 2022-08-14 00:32:14
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-24 18:37:03
 */
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

const App = () => {
	return (
		<>
			<NativeRouter>
				<Main />
			</NativeRouter>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
