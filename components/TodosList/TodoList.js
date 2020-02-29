import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todo from '../Todo/Todo'

export default function TodosList({list,deleteItem}) {
  return (
    <View style={styles.todoContainer}>
      {list.map((item,i) =><Todo key={i} todo={item.item} id={item.id} deleteItem={deleteItem}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    marginTop:20
  },
});
