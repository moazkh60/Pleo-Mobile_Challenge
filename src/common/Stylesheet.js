import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from './Colors';
import {Dimensions} from 'react-native';

/**
 * Since the styles we need are common across
 * all files so the styles are refactored into
 * single file from separate files.
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  listItemcontainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  leftContainer: {
    flex: 5,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingView: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 25,
    top: Dimensions.get('window').height / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 60,
    width: 60,
  },
  largeText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#fff',
    fontSize: 18,
  },
  addButtonView: {
    flex: 1.5,
    padding: 4
  },
  mediumImageStyle: {
      width: 100,
      height: 100,
      margin: 5
  },
  mediumViewContainer: {
    flex: 4
  },
  largeViewContainer: {
    flex: 6
  },
  rowView: {
    flexDirection: 'row',
    margin: 4,
  },
  topView: {
    marginHorizontal: 4,
    marginVertical: 2,
    flex: 14,
  },
  bottomView: {
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  borderStyle: {
    paddingBottom: 8,
    borderBottomColor: '#f2f2f2', 
    borderBottomWidth: 1  
  },
  textInputStyle: {
      height: 40,
      flex: 1 
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: PRIMARY_COLOR,
  },
});
