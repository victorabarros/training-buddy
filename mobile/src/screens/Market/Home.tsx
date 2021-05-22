import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Svg, { Ellipse } from 'react-native-svg'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const MarketHome = () => (
  <View style={styles.root}>
    {/* header */}
    <View>
      <View style={extraStyles.topContainer}>
        <Text style={styles.title}>Training Buddy</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[extraStyles.topButton, { backgroundColor: '#898989' }]}>
            <Entypo name="user" size={35} />
          </View>
          <View style={[extraStyles.topButton, { backgroundColor: 'white' }]}>
            <Entypo name="search" size={35} />
          </View>
        </View>

        <View style={extraStyles.topBar}>
          {['Mais procurados', 'Recentes', 'Aluguel'].map(label => (
            <View
              key={`view=${label.toLowerCase().replace(' ', '-')}`}
              style={extraStyles.topBarButton}
            >
              <Text
                key={`text=${label.toLowerCase().replace(' ', '-')}`}
                style={{ color: 'white', fontSize: 11 }}
              >
                {label}
              </Text>
            </View>
          ))}
        </View>

      </View>

      <Svg height="65" width="100%">
        <Ellipse cx="50%" rx="50%" ry="100%" fill="#3991E2" />
      </Svg>
    </View>
  </View>
)

const extraStyles = StyleSheet.create({
  topContainer: {
    height: 290,
    backgroundColor: '#3991E2',
    padding: 25,
    justifyContent: 'space-between',
  },
  topButton: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    backgroundColor: 'white',
    height: 50,
    width: '86%',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topBarButton: {
    backgroundColor: '#1464AF',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 7,
  },
})

export default MarketHome
