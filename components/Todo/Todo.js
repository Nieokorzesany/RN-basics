import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function Todo({todo,deleteItem,id}) {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{todo}</Text>
      <AntDesign name='closecircleo' size={32} color='black' onPress={()=>deleteItem(id)}/>
    </View>
  );
}

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
