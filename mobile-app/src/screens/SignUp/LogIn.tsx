import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BottomTab from './BottomTab'
import Svg, {Ellipse} from 'react-native-svg';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{height: 381, backgroundColor: '#3991E2', padding: 25, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 28}}>Training Buddy</Text>
            <Image
              style={{width: 110, height: 100, resizeMode: 'contain', borderRadius: 27}}
              source={require('../../../assets/login_logo.png')}
            />
          </View>
          <Text style={{fontFamily: 'monospace', fontSize: 13}}>
            Agora que você já escolheu seu perfil, precisamos que crie um email e senha de acesso.
          </Text>
        </View>
        <Svg height="65" width="100%">
          <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
        </Svg>
      </View>

      <View>
        {/* login with face, gmail or email */}
      </View>

      <BottomTab stage={2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    fontFamily: 'monospace',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
  },
  image: {
    width: 95,
    height: 120,
  },
})

export default LogIn
