import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {fetchListAction} from '../../actions/ExpenseListActions';
import {styles} from '../../common/Stylesheet';

class ExpenseList extends Component {
    //DUMMY DATA
  expenseList = [{id: '3334',user: {first:'Moaz', last: 'Khan',
   email: 'moazkh60@gmail.com'},
   amount: {value: '30', currency: 'EUR'}, date_added: '3-10-19'},
   {id: '3334',user: {first:'Moaz', last: 'Khan',
   email: 'moazkh60@gmail.com'},
   amount: {value: '30', currency: 'EUR'}, date_added: '3-10-19'}
]
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.expenseList}
          renderItem={({item}) => <ExpenseListItem item={item}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

/**
 * Maps properties from redux store
 * to state in a component
 * @param {object} state
 * @returns
 */
mapStateToProps = state => {
  console.log('state ', state);
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  {fetchListAction},
)(ExpenseList);
