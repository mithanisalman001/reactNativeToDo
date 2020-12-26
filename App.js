/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions
} from 'react-native';
import ToodoList from './TodoList';

const { heigh, width } = Dimensions.get('window');

export default class App extends React.Component {
  state={
    newTodoItem: ''
  }
  newTodoItemController = textValue => {
    this.setState({
      newTodoItem: textValue
    })
  }
  render(){
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>Todo App</Text>
        <View style={styles.card}>
          <TextInput 
          style={styles.input} 
          placeholder="Add an item !"
          value={this.state.newTodoItem}
          onChangeText={this.newTodoItemController}
          placeholderTextColor={'#999'}
          returnKeyType={'done'}
          />
          <ScrollView contentContainerStyle={styles.listContainer}>
            <ToodoList/>
          </ScrollView>
        </View>
    </View>
  )
}};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f23657',
    flex: 1,
    alignItems:'center',
  },
  appTitle: {
    color: "#fff",
    fontSize:36,
    marginTop: 60,
    marginBottom:30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width-25,
    borderTopLeftRadius:10,
    borderTopRightRadius: 10
  },
  input: {
    padding:20,
    borderBottomColor:'#bbb',
    borderBottomWidth: 1,
    fontSize:20
  },
  listContainer: {
    alignItems: 'center'
  }
  });


