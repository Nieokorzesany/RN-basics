import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';

import TodosList from './components/TodosList/TodoList'

export default function App() {
  const [list,changeList]=useState([{id:1,item:'learn react native'},{id:2,item:'something else'}])
  const [inputText,changeInputText]=useState('')

  const addItem =inputText=>{
    if (!inputText) {
      Alert.alert(
        'Error','Enter Todo'
     )
    } else {
      changeList(items =>{
     return  [{id:Math.floor(Math.random()*100),item:inputText},...items]
    }
    )}}

  const deleteItem = id => {
    changeList(items => {
      return items.filter(item=>item.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput 
        placeholder='TODOS' 
        style={styles.textInput} 
        value={inputText} 
        onChangeText={(value)=>changeInputText(value)} />
        <Button title="ADD" onPress={()=>addItem(inputText)}/>
      </View>
      <TodosList list={list} deleteItem={deleteItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30
  },
  textInput:{
    padding:10,
    marginTop:10,
    marginBottom:10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    width:200,
  },
  input:{
    flexDirection:"row", justifyContent:"space-between", alignItems:"center"
  }
});
