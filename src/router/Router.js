import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ListExpenses } from '../components/'

const Router = createStackNavigator({
    ListExpenses: {
      screen: ListExpenses,
    },
  }, {
      initialRouteName: 'ListExpenses',
  });
  
  export default createAppContainer(Router)