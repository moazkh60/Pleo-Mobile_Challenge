import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import {styles} from '../../common/Stylesheet';
import {connect, useSelector} from 'react-redux';
import {API_URL} from '../../common/Constants';
import {updateComment, uploadReceipt} from '../../actions/ExpenseListActions';

/**
 * Show no receipt text if no receipts are attached
 * otherwise populate a scrollview with the receipts
 * @param {object} receipts
 */
const setupScrollView = receipts => {
  if (receipts.length == 0) {
    return <Text style={styles.largeText}> No Receipts Attached</Text>;
  }
  return (
    <ScrollView horizontal={true} style={{flex: 1}}>
      {receipts.map((receipt, index) => {
        const url = API_URL + receipt.url;
        return (
          <Image
            source={{uri: url}}
            key={index}
            style={styles.scrollImageContainer}
          />
        );
      })}
    </ScrollView>
  );
};

/**
 * This functional component creates
 * a row with a title and a value
 * @param {string} title
 * @param {string} value
 */
const rowView = (title, value) => {
  return (
    <View style={styles.rowView}>
      <Text style={styles.boldText}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );
};

/**
 * Call upload handler action creator
 * @param {object} props contains properties
 * @param {object} item contains id
 * @param {object} result contains path of file
 */
const uploadHandler = (props, item, result) => {
    props.uploadReceipt(item.id, result.path) 
}
/**
 * This functional component uses hooks to save the
 * state of comments and then updates the comment by
 * sending update comment call to the api
 * @param {object} props passed from previous screen
 */
const ExpenseDetail = props => {
  const [comment, setComment] = useState('');
  const updatedExpense = useSelector(state => state.updatedExpense);
  const {navigation} = props;
  const item = navigation.state.params.item;

  useEffect(() => {
    const ImageEvents = new NativeEventEmitter(NativeModules.ImagePicker);
    ImageEvents.addListener('imageSelected', result => uploadHandler(props, item, result) 
    );
    return () => ImageEvents.removeAllListeners('imageSelected')
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.listItemcontainer, {flexDirection: 'column'}]}>
        <View style={[styles.rowView, styles.borderStyle, {flex: 1}]}>
          <View style={styles.addButtonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => NativeModules.ImagePicker.selectImage()}>
              <Image
                style={styles.imageContainer}
                source={require('../../common/assets/camera.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.mediumViewContainer, {justifyContent: 'center'}]}>
            {setupScrollView(updatedExpense.expense.receipts ? updatedExpense.expense.receipts : item.receipts)}
          </View>
        </View>
        <View style={styles.largeViewContainer}>
          {rowView('Name', item.user.first + ' ' + item.user.last)}
          {rowView('Email', item.user.email)}
          {rowView('Merchant', item.user.merchant)}
          {rowView('Amount', item.amount.value + ' ' + item.amount.currency)}
          {rowView('date', item.date.split('T')[0])}

          <View style={[styles.rowView, styles.borderStyle]}>
            <Text style={styles.boldText}>Comment: </Text>
            <Text>
              {updatedExpense.expense.comment ? updatedExpense.expense.comment : item.comment}
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
  {updateComment, uploadReceipt},
)(ExpenseDetail);
