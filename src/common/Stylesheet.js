import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from './Colors'

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
    whiteText: {
        color: '#fff',
        fontSize: 18
    },
    rowView: {
        flexDirection: 'row',
        margin: 4
    },
    topView: {
        marginHorizontal: 4,
        marginVertical: 2,
        flex: 12   
    },
    bottomView: {
        flex: 1,
        marginVertical: 2,
        marginHorizontal: 8
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: PRIMARY_COLOR,

    }
})