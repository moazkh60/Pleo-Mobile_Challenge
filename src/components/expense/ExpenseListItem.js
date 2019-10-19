import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'; 
import { styles } from '../../../common/stylesheet';

/*
 * Expense list item for flatlist. Props
 * will be passed from ExpenseList class
 * @params {object} props 
 */
const ExpenseListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.item)} 
        style={styles.listItemcontainer}>
            <View >
            
            </View>
        </TouchableOpacity>
    )
}

export default ExpenseListItem;