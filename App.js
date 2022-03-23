import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/appNavigation/AppNavigation';



export default function App() {
  const[isReady, setIsRedy]=useState(false)

 if(!isReady){
  <AppLoading
  startAsync={bootstrap}
  onFinish={()=>setIsRedy(true)}
  onError={err=>console.log(err)}
  />

 }

  return (
    <AppNavigation/>
  );
}

