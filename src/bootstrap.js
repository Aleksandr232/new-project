import * as Font from 'expo-font'

export async function bootstrap() {
    await Font.loadAsync({
      'opensans-bold': require('./assets/fonts/OpenSans-Bold.tff'),
      'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    })
}
  