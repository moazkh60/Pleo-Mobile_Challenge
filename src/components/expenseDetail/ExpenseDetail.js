import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../common/Stylesheet';

const ExpenseDetail = props => {
  const [comment, setComment] = useState('');
  const {navigation} = props;
  const {item} = navigation.state.params;

  return (
    <View style={styles.container}>
      <View style={[styles.listItemcontainer, {flexDirection: 'column'}]}>
        <View style={[styles.rowView, styles.borderStyle, {flex: 1}]}>
          <View style={styles.addButtonView}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.whiteText}>Add Receipt Image</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mediumViewContainer}>
            <ScrollView horizontal={true}>
            </ScrollView>
          </View>
        </View>
        <View style={styles.largeViewContainer}>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Name: </Text>
            <Text>{item.user.first + ' ' + item.user.last}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Email: </Text>
            <Text>{item.user.email}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Merchant: </Text>
            <Text>{item.merchant}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Amount: </Text>
            <Text>{item.amount.value + ' ' + item.amount.currency}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Category: </Text>
            <Text>{item.category}</Text>
          </View>
          <View style={[styles.rowView, styles.borderStyle]}>
            <Text style={styles.boldText}>Comment: </Text>
            <Text>{item.comment}</Text>
          </View>
          <View style={styles.rowView}>
            <TextInput
              style={styles.textInputStyle}
              multiline={true}
              numberOfLines={4}
              placeholder="Add Your Comment"
              placeholderTextColor="gray"
              textAlignVertical={'top'}
              onChangeText={text => setComment({text})}
              value={comment}
            />
            <Text>{item.category}</Text>
          </View>
          <View style={[styles.rowView, {height: 50}]}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.whiteText}>Add A Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseDetail;
