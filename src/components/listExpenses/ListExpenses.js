import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchListAction } from '../../actions/ExpenseListActions'

class ListExpenses extends Component {
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

export default connect(mapStateToProps, {fetchListAction})(ListExpenses)