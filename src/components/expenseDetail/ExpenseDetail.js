import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  NativeModules,
  NativeEventEmitter
} from 'react-native';
import {styles} from '../../common/Stylesheet';
import {connect, useSelector} from 'react-redux';
import {updateComment} from '../../actions/ExpenseListActions';

/**
 * Show no receipt text if no receipts are attached
 * otherwise populate a scrollview with the receipts
 * @param {object} item 
 */
const setupScrollView = item => {
  if (item.receipts.length == 0) {
    return <Text style={styles.largeText}> No Receipts Attached</Text>;
  }
  return <ScrollView horizontal={true}></ScrollView>
};
/**
 * This functional component uses hooks to save the
 * state of comments and then updates the comment by
 * sending update comment call to the api
 * @param {object} props passed from previous screen
 */
const ExpenseDetail = props => {
  const [comment, setComment] = useState('');
  const updatedExpense = useSelector(state => state.updatedExpense.expense);
  const {navigation} = props;
  const item = navigation.state.params.item;

  // use effect hook is only called once hence
  // we setup a listener in this hook
  useEffect(() => {
    const ImageEvents = new NativeEventEmitter(NativeModules.ImagePicker)
    ImageEvents.addListener("imageSelected", result => result)
    return () => ImageEvents.removeAllListeners();
  }, [])

  return (
    <View style={styles.container}>
      <View style={[styles.listItemcontainer, {flexDirection: 'column'}]}>
        <View style={[styles.rowView, styles.borderStyle, {flex: 1}]}>
          <View style={styles.addButtonView}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => NativeModules.ImagePicker.selectImage()}>
              <Text style={styles.whiteText}>Add Receipt Image</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.mediumViewContainer, {justifyContent: 'center'}]}>
            {setupScrollView(item)}
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
            <Text>
              {updatedExpense.comment ? updatedExpense.comment : item.comment}
            </Text>
          </View>
          <View style={styles.rowView}>
            <TextInput
              style={styles.textInputStyle}
              multiline={true}
              numberOfLines={4}
              placeholder="Add Your Comment"
              placeholderTextColor="gray"
              onChangeText={text => setComment(text)}
              value={comment}
            />
            <Text>{item.category}</Text>
          </View>
          <View style={[styles.rowView, {height: 50}]}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => props.updateComment(item.id, comment)}>
              <Text style={styles.whiteText}>Add Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default connect(
  null,
  {updateComment},
)(ExpenseDetail);
