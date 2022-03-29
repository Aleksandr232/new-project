import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { CreateScreen } from './CreateScreen'

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, edu: post.edu, booked: post.booked })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Научные дисциплины',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => console.log('Press photo')}
      />
    </HeaderButtons>
  ),
  headerLeft:(
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
      title='Toggle Drawer'
      iconName='ios-menu'
      onPress={(<CreateScreen/>)}
      />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
