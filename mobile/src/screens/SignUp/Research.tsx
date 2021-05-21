import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import BottomTab from '../../components/BottomTab'
import Svg, { Ellipse } from 'react-native-svg'
import styles from './styles'

const Research = () => {
  const navigation = useNavigation()
  const name = 'NOME'
  const sports = ['SURF', 'TENIS', 'CANOAGEM', 'CROSSFIT']

  return (
    <View style={[styles.root, { paddingBottom: 20 }]}>
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
            <Text style={styles.title}>Training Buddy</Text>
            <Image
              style={{
                width: 110,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 27,
                marginBottom: 10,
              }}
              source={require('../../../assets/login_logo.png')}
            />
          </View>

          <Text style={styles.text}>
            {`${name}`}, agora queremos saber mais sobre você. Esolha as opções abaixo para sabermos
            que esportes está interessado.
            {'\n\n'}
            Permita acessarmos a sua localização para ajudarmos você a encontrar grupos mais
            próximos de você.
          </Text>
        </View>
        <Svg height="65" width="100%">
          <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
        </Svg>
      </View>

      {/* body */}
      <View style={extraStyles.body}>
        {sports.map(sport => (
          <TouchableOpacity
            key={`touch-${sport.toLowerCase()}`}
            style={extraStyles.button}
            onPress={() => navigation.navigate('BottomTab')}
          >
            <Text key={`text-${sport.toLowerCase()}`} style={[styles.text, { color: 'white' }]}>
              {sport}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* footer */}
      <BottomTab step={3} />
    </View>
  )
}

const extraStyles = StyleSheet.create({
  body: {
    height: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 26,
    width: 115,
    backgroundColor: '#5F5F5F',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Research
