import { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import useRepositoryList from '../../hooks/useRepositoryList';
import theme from '../../theme';

const RepositoryListMenu = () => {
	const [visible, setVisible] = useState(false);
	const [menuName, setMenuName] = useState('Latest repositories');
	const { setOrder } = useRepositoryList();

	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);

	const handlePress = (orderBy, orderDirection, menu) => {
		setMenuName(menu);
		setOrder((o) => {
			return {
				...o,
				orderBy,
				orderDirection,
			};
		});
	};

	const menuItems = [
		{
			name: 'Latest repositories',
			orderBy: 'CREATED_AT',
			orderDirection: 'DESC',
		},
		{
			name: 'Highest rated repositories',
			orderBy: 'RATING_AVERAGE',
			orderDirection: 'DESC',
		},
		{
			name: 'Lowest rated repositories',
			orderBy: 'RATING_AVERAGE',
			orderDirection: 'ASC',
		},
	];

	return (
		<View
			style={{
				justifyContent: 'flex-start',
				paddingVertical: 15,
			}}
		>
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={
					<Button
						mode="text"
						textColor={theme.colors.textPrimary}
						onPress={openMenu}
						icon="menu-down"
						contentStyle={{
							flexDirection: 'row-reverse',
							justifyContent: 'space-between',
						}}
					>
						{menuName}
					</Button>
				}
				statusBarHeight={0}
				style={{
					position: 'absolute',
					right: '5%',
					left: '5%',
				}}
				contentStyle={{
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: 'white'
				}}
			>
				{menuItems.map(({ name, orderBy, orderDirection }) => (
					<Menu.Item
						key={name}
						onPress={() => handlePress(orderBy, orderDirection, name)}
						title={name}
						style={{
							width: 600,
						}}
					/>
				))}
			</Menu>
		</View>
	);
};

export default RepositoryListMenu;
