import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export const MainScreen=({navigation})=>{
    const goPost=()=>{
        navigation.navigate('Post')
    }
    return<View style={styles.center}>
        <Text>MainScreen</Text>
        <Button title="goToPost" onPress={goPost}/>
    </View>
}

MainScreen.navigationOptions={
    headerTitle: 'Мой блог'
}


const styles= StyleSheet.create({
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})    