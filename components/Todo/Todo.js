import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

const Todo =({todo ,deleteItem})=> {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.item}</Text>
      <AntDesign name='closecircleo' size={40} color='black' onPress={()=>deleteItem(todo.id)}/>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection:'row',
    borderColor: 'black',
    backgroundColor:'#DADDD8',
    padding:10,
    justifyContent:"space-between",
    alignItems:'center',
    marginTop:10
  },
  text:{
    margin:'auto',
    fontSize:20
  }
});
