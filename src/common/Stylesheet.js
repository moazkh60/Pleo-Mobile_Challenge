import { StyleSheet } from 'react-native';

/**
 * Since the styles we need are common across
 * all files so the styles are refactored into
 * single file from separate files.
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    listItemcontainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 4,
        marginHorizontal: 4,
        marginVertical: 2
    },
    leftContainer:{
        flex: 5,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        height: 60,
        width: 60
    },
    boldText: {
        fontWeight: 'bold'
    },
    rowView: {
        flexDirection: 'row',
        margin: 4
    }
})