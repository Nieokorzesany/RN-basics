import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Todo from '../Todo/Todo'

const TodosList=({list,deleteItem})=> {
  return (
    <View style={styles.todoContainer}>
      <FlatList
      keyExtractor={(item,i)=>item.key} 
      data={list} 
      renderItem={itemData =>(<Todo  todo={itemData.item} deleteItem={deleteItem}/>)} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
  },
});

export default TodosList;