import React from 'react'
import { Text, View, Image } from 'react-native'
import BottomTab from '../../components/BottomTab'
import Svg, { Ellipse } from 'react-native-svg'
import styles from './styles'

const LogIn = () => {
  return (
    <View style={styles.root}>
      {/* header */}
      <View>
        <View
          style={{
            height: 290,
            backgroundColor: '#3991E2',
            padding: 25,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28 }}>Training Buddy</Text>
            <Image
              style={{ width: 110, height: 100, resizeMode: 'contain', borderRadius: 27 }}
              source={require('../../../assets/login_logo.png')}
            />
          </View>
          <Text style={{ fontFamily: 'monospace', fontSize: 13 }}>
            Agora que você já escolheu seu perfil, precisamos que crie um email e senha de acesso.
          </Text>
        </View>
        <Svg height="65" width="100%">
          <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
        </Svg>
      </View>

      {/* body */}
      <View>
        <View
          style={{
            backgroundColor: '#D3D1D1',
            padding: 5,
            margin: 25,
            alignSelf: 'center',
            width: 230,
            flexDirection: 'row',
          }}
        >
          <Image
            style={{ height: 23, width: 18, resizeMode: 'contain' }}
            source={require('../../../assets/logo_facebook.png')}
          />
          <Text style={{ marginLeft: 4, color: '#1070C8', fontFamily: 'monospace', fontSize: 13 }}>
            Fazer login com Facebook
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3D1D1',
            padding: 5,
            margin: 25,
            alignSelf: 'center',
            width: 230,
            flexDirection: 'row',
          }}
        >
          <Image
            style={{ height: 22, width: 16, resizeMode: 'contain' }}
            source={require('../../../assets/logo_gmail.png')}
          />
          <Text style={{ marginLeft: 4, color: '#1070C8', fontFamily: 'monospace', fontSize: 13 }}>
            Fazer login com gmail
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3D1D1',
            padding: 5,
            margin: 25,
            alignSelf: 'center',
            width: 230,
            flexDirection: 'row',
          }}
        >
          <Image
            style={{ height: 22, width: 20, resizeMode: 'contain' }}
            source={require('../../../assets/logo_e_mail.png')}
          />
          <Text style={{ marginLeft: 4, color: '#1070C8', fontFamily: 'monospace', fontSize: 13 }}>
            Fazer login com e-mail
          </Text>
        </View>
      </View>

      {/* footer */}
      <BottomTab stage={2} />
    </View>
  )
}

export default LogIn
