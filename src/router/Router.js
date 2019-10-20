import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {ExpenseList, ExpenseDetail} from '../components/';
import { PRIMARY_COLOR } from '../common/Colors';

const Router = createStackNavigator(
  {
    ExpenseList: {
      screen: ExpenseList,
      navigationOptions: {
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        title: 'Expense List',
        headerTitleStyle: {
            fontWeight: '400',
            color: '#fff'
          },
      },
    },
    
    ExpenseDetail: {
        screen: ExpenseDetail,
        navigationOptions: {
          headerStyle: {
              backgroundColor: PRIMARY_COLOR
          },
          headerTintColor: '#fff',
          title: 'Expense Detail',
          headerTitleStyle: {
              fontWeight: '400',
              color: '#fff'
            },
        },
      },
  },
  {
    initialRouteName: 'ExpenseList',
    defaultNavigationOptions: {
    }
  },
);

export default createAppContainer(Router);
