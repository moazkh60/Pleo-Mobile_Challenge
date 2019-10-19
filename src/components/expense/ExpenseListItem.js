import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from '../../common/Stylesheet';

const getDate = date => {
    return date = date.split('T')[0]
}

/*
 * Expense list item for flatlist. Props
 * will be passed from ExpenseList class
 * @params {object} props
 */
const ExpenseListItem = props => {
  let {user, amount, date} = props.item;
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.item)}>
      <View style={styles.listItemcontainer}>
        <View style={styles.leftContainer}>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Name: </Text>
            <Text>{user.first + ' ' + user.last}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Email: </Text>
            <Text>{user.email}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Amount: </Text>
            <Text>{amount.value + ' ' + amount.currency}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Date Added: </Text>
            <Text>{getDate(date)}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
        <Image 
        style={styles.imageContainer}
        source={require('../../common/assets/right_arrow_thin.png')} /> 
        </View>
     </View>
    </TouchableOpacity>
  );
};

export default ExpenseListItem;
