import React, { Component } from './node_modules/react';
import { View, Text } from 'react-native';
import { connect } from './node_modules/react-redux';
import { fetchListAction } from '../../actions/ExpenseListActions'

class ExpenseList extends Component {
    render(){
        this.props.fetchListAction({test:'complete'})
        return <View><Text>List Expenses</Text></View>
    }
}

/**
 * Maps properties from redux store
 * to state in a component
 * @param {object} state
 * @returns 
 */
mapStateToProps = state => {
    console.log('state ', state)
    return {
        state
    }
}

export default connect(mapStateToProps, {fetchListAction})(ExpenseList)