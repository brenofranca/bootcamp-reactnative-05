import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Home from '~/pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
