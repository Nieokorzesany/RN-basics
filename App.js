import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';

import TodosList from './components/TodosList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

export default function App() {
  const [list,changeList]=useState([])
  const [showModal,setShowModal]= useState(false)

  const addItem =inputText=>{
    if (!inputText) {
      Alert.alert(
        'Error','Enter Todo'
     )
    } else {
      changeList(items =>{
     return  [{key: Math.random().toString(),id:Math.floor(Math.random()*100),item:inputText},...items]})
     setShowModal(false)
  }}

  const deleteItem = id => {
    changeList(items => {
      return items.filter(item=>item.id != id);
    })
  }

  const cancelModal = ()=> {
    setShowModal(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add Todo" onPress={()=>setShowModal(true)}/>
      <AddTodo addItem={addItem} showModal={showModal} cancelModal={cancelModal}/>
      <TodosList deleteItem={deleteItem} list={list}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30
  }
});
