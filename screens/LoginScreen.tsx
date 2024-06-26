import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen( {navigation}: any ) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:50 , color:'white'}}>Login</Text>
      <TextInput
        placeholder='Ingresar nick'
        style={styles.input}
      />
      <TextInput 
        placeholder='Ingrese contraseña'
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={ ()=> navigation.navigate('Bottom') } >
        <Text>INGRESAR</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#5f536e',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    backgroundColor:'#d0acfb',
    height:50,
    width:"80%",
    margin:10,
    borderRadius:50,
    borderColor:'black',
    borderWidth:2,
    fontSize:30
  },
  btn:{
    backgroundColor:'#fa94eb',
    height:40,
    width:"60%",
    borderRadius:40,
    margin:5,
    borderWidth:4
  }



})