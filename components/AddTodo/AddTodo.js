import React,{useState} from 'react';
import { StyleSheet, TextInput, View, Button,Modal } from 'react-native';

const AddTodo =({addItem,showModal,cancelModal})=> {
  const [inputText,changeInputText]=useState('')

	const inputTextHandler =()=> {
		addItem(inputText);
		changeInputText('');
		console.log('asdi',inputText)
	}

  return (
      <Modal visible={showModal} animationType='slide'>
      <View style={styles.input}>
        <TextInput 
        placeholder='TODOS' 
        style={styles.textInput} 
        value={inputText} 
        onChangeText={(value)=>changeInputText(value)} />
				<View style={styles.buttonView}>
					<View style={styles.button}  >
					<Button 
            title="ADD" 
            onPress={()=>{inputTextHandler()}} />
					</View>
					<View style={styles.button} >
					<Button 
            title="CANCEL" 
            color='red'
						onPress={cancelModal}/>
					</View>
				</View>
      </View>
      </Modal>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
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
        flex:1,
        alignItems:'center',
        justifyContent:'center'
			},
		buttonView:{
			flexDirection:"row",
			justifyContent:"space-between",
			width:200
			},
		button:{
			width: '40%'
		}
})