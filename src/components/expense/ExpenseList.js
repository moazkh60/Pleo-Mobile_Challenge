import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {fetchExpenseList} from '../../actions/ExpenseListActions';
import {styles} from '../../common/Stylesheet';

class ExpenseList extends Component {

  componentDidMount(){
      this.props.fetchExpenseList(25, 5)
  }  
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.expenses}
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
    expenses: state.expenseList.expenses,
    error: state.error,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {fetchExpenseList},
)(ExpenseList);
