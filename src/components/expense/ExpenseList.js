import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {fetchExpenseList, sortExpenses} from '../../actions/ExpenseListActions';
import {styles} from '../../common/Stylesheet';
import {PRIMARY_COLOR} from '../../common/Colors';

class ExpenseList extends Component {
  // To show 25 items at a time
  limit = 25;

  // To offset the number of records
  offset = 0;

  /**
   * Fetch expense list on initial start of
   * the app
   */
  componentDidMount() {
    this.props.fetchExpenseList(this.limit, this.offset);
  }

  /**
   * When end of flatlist is reached check the
   * limit and offset difference and then reduce the
   * limit to remaining no of items
   */
  handleEndReached = () => {
    this.offset = this.offset + this.limit;
    if (this.offset > this.props.total) {
      this.offset = this.props.total;
      this.limit = this.offset - (this.props.total - this.offset);
    } else if (this.offset < this.props.total) {
      this.props.fetchExpenseList(this.limit, this.offset);
    }
  };

  /**
   * Show loading indicator when app starts if
   * there are no items then show no expense data
   * to show then text. Otherwise hide this view
   */
  showLoadingIndicator = () => {
    if (this.props.isLoading) {
      return (
        <View style={styles.loadingView}>
          <ActivityIndicator
            color={PRIMARY_COLOR}
            animating={this.props.isLoading}
            size={'large'}
          />
          <Text>Loading ...</Text>
        </View>
      );
    } else if (this.props.expenses.length == 0) {
      return (
        <View
          style={[
            styles.loadingView,
            {left: Dimensions.get('window').width / 2 - 100},
          ]}>
          <Text style={[styles.largeText]}>No Expense Data to Show</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.showLoadingIndicator()}
        <View style={styles.topView}>
          <FlatList
            extraData={this.props.expenseList}
            data={this.props.expenses}
            renderItem={({item}) => (
              <ExpenseListItem
                item={item}
                onPress={item =>
                  this.props.navigation.navigate('ExpenseDetail', {item})
                }
              />
            )}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.1}
            onEndReached={this.handleEndReached}
          />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.sortExpenses()}>
            <Text style={styles.whiteText}>Sort Expenses By Name</Text>
          </TouchableOpacity>
        </View>
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
  return {
    expenseList: state.expenseList,
    total: state.expenseList.total,
    expenses: state.expenseList.expenses,
    error: state.error,
    isLoading: state.expenseList.isLoading,
  };
};

export default connect(
  mapStateToProps,
  {fetchExpenseList, sortExpenses},
)(ExpenseList);
