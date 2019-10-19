import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ExpenseList } from '../components/'

const Router = createStackNavigator({
    ExpenseList: {
      screen: ExpenseList,
    },
  }, {
      initialRouteName: 'ExpenseList',
  });
  
  export default createAppContainer(Router)